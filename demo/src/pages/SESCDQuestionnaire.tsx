import { atom } from "jotai";
import expressionAtom from "../../../lib/main";
import ResultAtom from "../components/ResultAtom";
import * as model from "fhirpath/fhir-context/r5";
import FHIRAtom from "../components/FHIRAtom";
import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { PrimitiveAtom } from "jotai";
import { DevTools } from "jotai-devtools";

const CODES = {
  sizeofulcers: new Map([
    ["none", { display: "None", weight: 0 }],
    ["aphthousulcers", { display: "Aphthous ulcers", weight: 1 }],
    ["largeulcers", { display: "Large ulcers", weight: 2 }],
    ["verylargeulcers", { display: "Very large ulcers", weight: 3 }],
  ]),
  ulceratedsurface: new Map([
    ["none", { display: "None", weight: 0 }],
    ["<10%", { display: "<10%", weight: 1 }],
    ["10-30%", { display: "10-30%", weight: 2 }],
    [">30%", { display: ">30%", weight: 3 }],
  ]),
  affectedsurface: new Map([
    ["unaffectedsegments", { display: "unaffected segments", weight: 0 }],
    ["<50%", { display: "< 50%", weight: 1 }],
    ["50%-75%", { display: "50% - 7G5%", weight: 2 }],
    [">75%", { display: "> 75%", weight: 3 }],
  ]),
  presenceofnarrowing: new Map([
    ["none", { display: "None", weight: 0 }],
    ["single", { display: "Single can be passed", weight: 1 }],
    ["multiple", { display: "Multiple can be passed", weight: 2 }],
    ["cannot", { display: "Cannot be passed", weight: 3 }],
  ]),
};

type QuestionnaireResponse = {
  resourceType: "QuestionnaireResponse";
  status: "in-progress";
  item: {
    linkId: string;
    answer: {
      valueCoding: {
        code: string;
        display: string;
        weight: number;
      };
    }[];
  }[];
};

const questionnaireAtom = atom({
  resourceType: "Questionnaire",
  status: "active",
  item: [
    {
      linkId: "sizeofulcers",
      text: "Size of ulcers",
      type: "choice",
      answerOption: [
        {
          valueCoding: { code: "none", display: "None" },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 0,
            },
          ],
        },
        {
          valueCoding: {
            code: "aphthousulcers",
            display: "Aphthous ulcers",
          },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 1,
            },
          ],
        },
        {
          valueCoding: {
            code: "largeulcers",
            display: "Large ulcers",
          },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 2,
            },
          ],
        },
        {
          valueCoding: {
            code: "verylargeulcers",
            display: "Very large ulcers",
          },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 3,
            },
          ],
        },
      ],
    },
    {
      linkId: "ulceratedsurface",
      text: "Ulcerated surface",
      type: "choice",
      answerOption: [
        {
          valueCoding: { code: "none", display: "None" },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 0,
            },
          ],
        },
        {
          valueCoding: { code: "<10%", display: "<10%" },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 1,
            },
          ],
        },
        {
          valueCoding: { code: "10-30%", display: "10-30%" },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 2,
            },
          ],
        },
        {
          valueCoding: { code: ">30%", display: ">30%" },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 3,
            },
          ],
        },
      ],
    },
    {
      linkId: "affectedsurface",
      text: "Affected surface",
      type: "choice",
      answerOption: [
        {
          valueCoding: {
            code: "unaffectedsegments",
            display: "unaffected segments",
          },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 0,
            },
          ],
        },
        {
          valueCoding: { code: "<50%", display: "<50%" },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 1,
            },
          ],
        },
        {
          valueCoding: { code: "50%-75%", display: "50%-75%" },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 2,
            },
          ],
        },
        {
          valueCoding: { code: ">75%", display: ">75%" },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 3,
            },
          ],
        },
      ],
    },
    {
      linkId: "presenceofnarrowing",
      text: "Presence of narrowing",
      type: "choice",
      answerOption: [
        {
          valueCoding: { code: "none", display: "None" },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 0,
            },
          ],
        },
        {
          valueCoding: {
            code: "single",
            display: "Single can be passed",
          },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 1,
            },
          ],
        },
        {
          valueCoding: {
            code: "multiple",
            display: "Multiple can be passed",
          },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 2,
            },
          ],
        },
        {
          valueCoding: {
            code: "cannot",
            display: "Cannot be passed",
          },
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
              valueDecimal: 3,
            },
          ],
        },
      ],
    },
  ],
});

const qrAtom = atom<QuestionnaireResponse>({
  resourceType: "QuestionnaireResponse",
  status: "in-progress",
  item: [
    {
      linkId: "sizeofulcers",
      answer: [{ valueCoding: { code: "none", display: "None", weight: 0 } }],
    },
    {
      linkId: "ulceratedsurface",
      answer: [{ valueCoding: { code: "none", display: "None", weight: 0 } }],
    },
    {
      linkId: "affectedsurface",
      answer: [
        {
          valueCoding: {
            code: "unaffectedsegments",
            display: "unaffected segments",
            weight: 0,
          },
        },
      ],
    },
    {
      linkId: "presenceofnarrowing",
      answer: [{ valueCoding: { code: "none", display: "None", weight: 0 } }],
    },
  ],
});
qrAtom.debugLabel = "QuestionnaireResponse";

const resultAtom = expressionAtom<[number]>(
  qrAtom,
  "QuestionnaireResponse.item.answer.weight().sum()",
  { questionnaire: questionnaireAtom },
  model
);
resultAtom.debugLabel = "%score";

export function SESCDQuestionnaire() {
  return (
    <div className="flex flex-col p-4 min-w-fit w-full max-w-screen-sm">
      <p className="text-lg text-gray-700 font-medium">
        🚧 This example is under construction.
      </p>
      <SESCDForm qrAtom={qrAtom} />
      <form className="mt-4 space-y-4">
        <ResultAtom label="Calculated result" atom={resultAtom} />
        <FHIRAtom label="QuestionnaireResponse" atom={qrAtom} />
        <dl className="flex flex-col">
          <dt className="text-sm font-medium text-gray-700">
            Score: <code>%score</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>QuestionnaireResponse.item.answer.weight().sum()</code>
          </dd>
        </dl>
      </form>
      <DevTools position="top-right" isInitialOpen />
    </div>
  );
}

function SESCDForm({
  qrAtom,
}: {
  qrAtom: PrimitiveAtom<QuestionnaireResponse>;
}) {
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
            if (
              item.linkId === changedInputName &&
              isValidName(changedInputName)
            ) {
              const valueCoding = extractCoding(
                formData.get(changedInputName),
                changedInputName
              );
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
      <fieldset className="block">
        <legend className="text-sm font-medium text-gray-700">Rectum</legend>
        <div>
          <label className="text-sm font-medium text-gray-700">
            Size of ulcers
          </label>
          <select
            name="sizeofulcers"
            className="block p-2 border border-gray-300 rounded-md mr-2"
          >
            <option value="none">None</option>
            <option value="aphthousulcers">Aphthous ulcers</option>
            <option value="largeulcers">Large ulcers</option>
            <option value="verylargeulcers">Very large ulcers</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            Ulcerated surface
          </label>
          <select
            name="ulceratedsurface"
            className="block p-2 border border-gray-300 rounded-md mr-2"
          >
            <option value="none">None</option>
            <option value="<10%">{"<10%"}</option>
            <option value="10-30%">10-30%</option>
            <option value=">30%">30%</option>
          </select>
        </div>
        <div>
          <label>Affected surface</label>
          <select
            name="affectedsurface"
            className="block p-2 border border-gray-300 rounded-md"
          >
            <option value="unaffectedsegments">Unaffected segments</option>
            <option value="<50%">{"<50%"}</option>
            <option value="50%-75%">50%-75%</option>
            <option value=">75%">75%</option>
          </select>
        </div>
        <div>
          <label>Presence of narrowing</label>
          <select
            name="presenceofnarrowing"
            className="block p-2 border border-gray-300 rounded-md"
          >
            <option value="none">None</option>
            <option value="single">Single can be passed</option>
            <option value="multiple">Multiple can be passed</option>
            <option value="cannot">Cannot be passed</option>
          </select>
        </div>
      </fieldset>
    </form>
  );
}

function isValidName(name: string): name is keyof typeof CODES {
  return name in CODES;
}

function extractCoding(
  raw: FormDataEntryValue | null,
  name:
    | "sizeofulcers"
    | "ulceratedsurface"
    | "affectedsurface"
    | "presenceofnarrowing"
) {
  if (typeof raw !== "string") throw new Error("Invalid code");
  const coding = CODES[name].get(raw);
  if (!coding) throw new Error("Invalid code");
  return {
    code: raw,
    ...coding,
  };
}
