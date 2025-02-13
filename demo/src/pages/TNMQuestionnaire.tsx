import { useSetAtom, PrimitiveAtom, atom } from "jotai";
import { useCallback } from "react";
import {} from "jotai";
import * as model from "fhirpath/fhir-context/r5";
import fhirPathAtom from "../../../lib/main";
import { FHIRExpression, QuestionnaireResponse } from "../types";
import { VariablePanel } from "../components/VariablesPanel";
import { createSDCContext } from "../sdc";

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

const variables: FHIRExpression[] = [
  {
    name: "T",
    expression:
      "QuestionnaireResponse.item.where(linkId = 'T').answer.value.code",
  },
  {
    name: "N",
    expression:
      "QuestionnaireResponse.item.where(linkId = 'N').answer.value.code",
  },
  {
    name: "M",
    expression:
      "QuestionnaireResponse.item.where(linkId = 'M').answer.value.code",
  },
  {
    name: "isIVA",
    expression: "iif(%M = 'm1a' or %M = 'm1b', 'IVA', {})",
  },
  {
    name: "isIVB",
    expression: "iif(%M = 'm1c1' or %M = 'm1c2', 'IVB', {})",
  },
  {
    name: "isIIIC",
    expression: "iif(%N = 'n3' and (%T = 't3' or %T = 't4'), 'IIIC', {})",
  },
  {
    name: "isIIIB",
    expression:
      "iif((%N = 'n3' and (%T = 't3' or %T = 't4').not()) or (%N = 'n2b' and (%T = 't1a' or %T = 't1b' or %T = 't1c').not()) or (%N = 'n2a' and %T = 't4'), 'IIIB' ,{})",
  },
  {
    name: "isIIIA",
    expression:
      "iif((%N = 'n2b' and (%T = 't1a' or %T = 't1b' or %T = 't1c')) or (%N = 'n1' and (%T = 't3' or %T = 't4').not()), 'IIIA', {})",
  },
  {
    name: "isIIB",
    expression:
      "iif((%N = 'n2a' and (%T = 't1a' or %T = 't1b' or %T = 't1c')) or (%N = 'n1' and (%T = 't2a' or %T = 't2b')) or (%N = 'n0' and %T = 't3'), 'IIB', {})",
  },
  {
    name: "isIIA",
    expression:
      "iif((%N = 'n1' and (%T = 't1a' or %T = 't1b' or %T = 't1c')) or (%N = 'n0' and %T = 't2b'), 'IIA', {})",
  },
  {
    name: "isIA",
    expression:
      "iif(%N = 'n0' and (%T = 't1a' or %T = 't1b' or %T = 't1c'), 'IA', {})",
  },
  {
    name: "isIB",
    expression: "iif(%N = 'n0' and %T = 't2a', 'IB', {})",
  },
];

const calculatedExpression =
  "(%isIVA | %isIVB | %isIIIC | %isIIIB | %isIIIA | %isIIB | %isIIA | %isIA | %isIB)";

const calculated = fhirPathAtom<[string]>(
  qrAtom,
  calculatedExpression,
  createSDCContext(qrAtom, variables, {}, model)
);
calculated.debugLabel = "calculatedExpression";

export default function TNMQuestionnairePage() {
  return (
    <VariablePanel
      qrAtom={qrAtom}
      variables={variables}
      calculatedAtom={calculated}
      calculatedExpression={calculatedExpression}
    >
      <TNMForm qrAtom={qrAtom} />
    </VariablePanel>
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
