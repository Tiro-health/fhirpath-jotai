import { useCallback } from "react";
import { atom, useSetAtom, PrimitiveAtom } from "jotai";
import * as model from "fhirpath/fhir-context/r5";
import fhirPathAtom from "../../../lib/main";
import { FHIRExpression, QuestionnaireResponse } from "../types";
import { createSDCContext } from "../sdc";
import { VariablePanel } from "../components/VariablesPanel";

const qrAtom = atom<QuestionnaireResponse>({
  resourceType: "QuestionnaireResponse",
  status: "in-progress",
  item: [
    {
      linkId: "height",
      answer: [
        {
          valueDecimal: 1.8,
        },
      ],
    },
    {
      linkId: "weight",
      answer: [
        {
          valueDecimal: 80,
        },
      ],
    },
  ],
});
qrAtom.debugLabel = "QuestionnaireResponse";

const variables: FHIRExpression[] = [
  {
    name: "height",
    expression:
      "QuestionnaireResponse.item.where(linkId = 'height').answer.value",
  },
  {
    name: "weight",
    expression:
      "QuestionnaireResponse.item.where(linkId = 'weight').answer.value",
  },
];
const calculatedExpression = "(%weight / (%height * %height)).round(2)";
const calculatedAtom = fhirPathAtom<[number]>(
  qrAtom,
  calculatedExpression,
  createSDCContext(qrAtom, variables, {}, model)
);
calculatedAtom.debugLabel = "calculatedExpression";

function BMIForm({ qrAtom }: { qrAtom: PrimitiveAtom<QuestionnaireResponse> }) {
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
            if (item.linkId === changedInputName && changedInputName) {
              const formValue = formData.get(changedInputName);
              console.assert(formValue !== null);
              const valueDecimal = parseFloat(formValue as string);
              return {
                ...item,
                answer: [{ valueDecimal }],
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
      <h2 className="text-lg font-medium">BMI Questionnaire</h2>
      <div>
        <label className="text-base font-medium">height</label>
        <input
          type="number"
          name="height"
          defaultValue="1.8"
          step="0.01"
          className="p-2 border border-gray-300 rounded-md mx-2"
        />
      </div>
      <div>
        <label className="text-base font-medium">weight</label>
        <input
          type="number"
          name="weight"
          defaultValue="80"
          className="p-2 border border-gray-300 rounded-md mx-2"
        />
      </div>
    </form>
  );
}

export default function BMIQuestionnairePage() {
  return (
    <VariablePanel
      qrAtom={qrAtom}
      variables={variables}
      calculatedAtom={calculatedAtom}
      calculatedExpression={calculatedExpression}
    >
      <BMIForm qrAtom={qrAtom} />
    </VariablePanel>
  );
}
