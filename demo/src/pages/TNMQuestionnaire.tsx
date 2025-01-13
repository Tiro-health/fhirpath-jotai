import { atom } from "jotai";
import expressionAtom from "../../../lib/main";
import ResultAtom from "../components/ResultAtom";
import * as model from "fhirpath/fhir-context/r5";
import FHIRAtom from "../components/FHIRAtom";
import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { PrimitiveAtom } from "jotai";
import { DevTools } from "jotai-devtools";

const TNM_CODE_DISPLAYS = new Map([
  ["t1a", "T1a"],
  ["t1b", "T1b"],
  ["t1c", "T1c"],
  ["t2a", "T2a"],
  ["t2b", "T2b"],
  ["t3", "T3"],
  ["t4", "T4"],
  ["n0", "N0"],
  ["n1", "N1"],
  ["n2a", "N2a"],
  ["n2b", "N2b"],
  ["n3", "N3"],
  ["m0", "M0"],
  ["m1a", "M1a"],
  ["m1b", "M1b"],
  ["m1c1", "M1c1"],
  ["m1c2", "M1c2"],
]);
type QuestionnaireResponse = {
  resourceType: "QuestionnaireResponse";
  status: "in-progress";
  item: {
    linkId: string;
    answer: {
      valueCoding: {
        code: string;
        display: string;
      };
    }[];
  }[];
};

const qrAtom = atom<QuestionnaireResponse>({
  resourceType: "QuestionnaireResponse",
  status: "in-progress",
  item: [
    {
      linkId: "T",
      answer: [
        {
          valueCoding: {
            code: "t1a",
            display: "T1a",
          },
        },
      ],
    },
    {
      linkId: "N",
      answer: [
        {
          valueCoding: {
            code: "n1",
            display: "N1",
          },
        },
      ],
    },
    {
      linkId: "M",
      answer: [
        {
          valueCoding: {
            code: "m0",
            display: "M0",
          },
        },
      ],
    },
  ],
});
qrAtom.debugLabel = "QuestionnaireResponse";

const TAtom = expressionAtom<number[]>(
  qrAtom,
  "QuestionnaireResponse.item.where(linkId = 'T').answer.value.code",
  {},
  model
);
TAtom.debugLabel = "%T";

const NAtom = expressionAtom<number[]>(
  qrAtom,
  "QuestionnaireResponse.item.where(linkId = 'N').answer.value.code",
  {},
  model
);
NAtom.debugLabel = "%N";

const MAtom = expressionAtom<number[]>(
  qrAtom,
  "QuestionnaireResponse.item.where(linkId = 'M').answer.value.code",
  {},
  model
);
MAtom.debugLabel = "%M";

const isIVA = expressionAtom<[boolean]>(
  qrAtom,
  "%m = 'm1a' or %m = 'm1b'",
  { m: MAtom },
  model
);
isIVA.debugLabel = "%isIVA";
const isIVB = expressionAtom<[boolean]>(
  qrAtom,
  "%m = 'm1c1' or %m = 'm1c2'",
  { m: MAtom },
  model
);
isIVB.debugLabel = "%isIVB";
const isIIIC = expressionAtom<[boolean]>(
  qrAtom,
  "%n = 'n3' and (%t = 't3' or %t = 't4')",
  { n: NAtom, t: TAtom },
  model
);
isIIIC.debugLabel = "%isIIIC";
const isIIIB = expressionAtom<[boolean]>(
  qrAtom,
  "(%n = 'n3' and (%t = 't3' or %t = 't4').not()) or (%n = 'n2b' and (%t = 't1a' or %t = 't1b' or %t = 't1c').not()) or (%n = 'n2a' and %t = 't4')",
  { n: NAtom, t: TAtom },
  model
);
isIIIB.debugLabel = "%isIIIB";
const isIIIA = expressionAtom<[boolean]>(
  qrAtom,
  "(%n = 'n2b' and (%t = 't1a' or %t = 't1b' or %t = 't1c')) or (%n = 'n1' and (%t = 't3' or %t = 't4').not())",
  { n: NAtom, t: TAtom },
  model
);
isIIIA.debugLabel = "%isIIIA";

const stageAtom = expressionAtom<[string]>(
  qrAtom,
  "iif(%isIVA, 'stage IVA', iif(%isIVB, 'stage IVB', iif(%isIIIC, 'stage IIIC', iif(%isIIIB, 'stage IIIB', iif(%isIIIA, 'stage IIIA', 'stage IIA')))))",
  {
    t: TAtom,
    n: NAtom,
    m: MAtom,
    isIVA,
    isIVB,
    isIIIC,
    isIIIB,
    isIIIA,
  },
  model
);
stageAtom.debugLabel = "%stage";

export function TNMQuestionnaire() {
  return (
    <div className="flex flex-col p-4 min-w-fit w-full max-w-screen-sm">
      <p className="text-lg text-gray-700 font-medium">
        🚧 This example is under construction.
      </p>
      <TNMForm qrAtom={qrAtom} />
      <form className="mt-4 space-y-4">
        <ResultAtom label="Calculated result" atom={stageAtom} />
        <FHIRAtom label="QuestionnaireResponse" atom={qrAtom} />
        <dl className="flex flex-col">
          <dt className="text-sm font-medium text-gray-700">
            Variable: <code>%T</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              QuestionnaireResponse.item.where(linkId = 'T').answer.value.code
            </code>
          </dd>
          <dt className="mt-2 text-sm font-medium text-gray-700">
            Variable: <code>%N</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              QuestionnaireResponse.item.where(linkId = 'N').answer.value.code
            </code>
          </dd>
          <dt className="mt-2 text-sm font-medium text-gray-700">
            Variable: <code>%M</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              QuestionnaireResponse.item.where(linkId = 'M').answer.value.code
            </code>
          </dd>
          <dt className="mt-2 text-sm font-medium text-gray-700">
            Variable: <code>%isIVA</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>%m = 'm1a' or %m = 'm1b'</code>
          </dd>

          <dt className="mt-2 text-sm font-medium text-gray-700">
            Variable: <code>%isIVB</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>%m = 'm1c1' or %m = 'm1c2'</code>
          </dd>

          <dt className="mt-2 text-sm font-medium text-gray-700">
            Variable: <code>%isIIIC</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>%n = 'n3' and (%t = 't3' or %t = 't4')</code>
          </dd>

          <dt className="mt-2 text-sm font-medium text-gray-700">
            Variable: <code>%isIIIB</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              (%n = 'n3' and (%t = 't3' or %t = 't4').not()) or (%n = 'n2b' and
              (%t = 't1a' or %t = 't1b' or %t = 't1c').not()) or (%n = 'n2a' and
              %t = 't4')
            </code>
          </dd>

          <dt className="mt-2 text-sm font-medium text-gray-700">
            Variable: <code>%isIIIA</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              (%n = 'n2b' and (%t = 't1a' or %t = 't1b' or %t = 't1c')) or (%n =
              'n1' and (%t = 't3' or %t = 't4').not())
            </code>
          </dd>
          <dt className="mt-2 text-sm font-medium text-gray-700">
            Calculated Expression:
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              iif(%isIVA, 'stage IVA', iif(%isIVB, 'stage IVB', iif(%isIIIC,
              'stage IIIC', iif(%isIIIB, 'stage IIIB', iif(%isIIIA, 'stage
              IIIA', 'stage IIA')))))
            </code>
          </dd>
        </dl>
      </form>
      <DevTools position="top-right" isInitialOpen />
    </div>
  );
}

function TNMForm({ qrAtom }: { qrAtom: PrimitiveAtom<QuestionnaireResponse> }) {
  const setQr = useSetAtom(qrAtom);

  // Sync formstate with atom
  const handleFormInput = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      const formData = new FormData(event.currentTarget);
      const changedInputName = event.target
        ? (event.target as HTMLInputElement).name
        : null;
      setQr((prev) => {
        const next: QuestionnaireResponse = {
          ...prev,
          item: prev.item.map((item) => {
            if (item.linkId === changedInputName) {
              const valueCoding = extractCoding(formData.get(changedInputName));
              return {
                ...item,
                answer: [{ valueCoding }],
              };
            }
            return item;
          }),
        };
        return next;
      });
    },
    [setQr]
  );

  return (
    <form
      onInput={handleFormInput}
      className="border border-gray-300 p-4 rounded-md space-y-4"
    >
      <h2 className="text-lg font-medium">TNM Questionnaire</h2>
      <p>
        Source:
        <a href="https://memoinoncology.com/wclc-2023/proposals-for-the-9th-edition-of-the-tnm-classification/">
          TNM Classification Lung Cancer 9th edition
        </a>
      </p>
      <fieldset className="flex">
        <legend className="text-base font-medium block">TNM</legend>
        <div className="flex">
          <select
            name="T"
            className="block p-2 border border-gray-300 rounded-md mr-2"
          >
            <option value="t1a">T1a</option>
            <option value="t1b">T1b</option>
            <option value="t1c">T1c</option>
            <option value="t2a">T2a</option>
            <option value="t2b">T2b</option>
            <option value="t3">T3</option>
            <option value="t4">T4</option>
          </select>
          <select
            name="N"
            className="block p-2 border border-gray-300 rounded-md mr-2"
          >
            <option value="n0">N0</option>
            <option value="n1">N1</option>
            <option value="n2a">N2a</option>
            <option value="n2b">N2b</option>
            <option value="n3">N3</option>
          </select>
          <select
            name="M"
            className="block p-2 border border-gray-300 rounded-md"
          >
            <option value="m0">M0</option>
            <option value="m1a">M1a</option>
            <option value="m1b">M1b</option>
            <option value="m1c1">M1c1</option>
            <option value="m1c2">M1c2</option>
          </select>
        </div>
      </fieldset>
    </form>
  );
}

function extractCoding(raw: FormDataEntryValue | null) {
  if (typeof raw !== "string") throw new Error("Invalid code");
  const display = TNM_CODE_DISPLAYS.get(raw);
  if (!display) throw new Error("Invalid code");
  return {
    code: raw,
    display,
  };
}
