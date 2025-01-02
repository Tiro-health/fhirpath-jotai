import { useCallback } from "react";
import { atom, useSetAtom, PrimitiveAtom } from "jotai";
import expressionAtom from "../../../lib/main";
import ResultAtom from "../components/ResultAtom";
import * as model from "fhirpath/fhir-context/r5";
import FHIRAtom from "../components/FHIRAtom";
import { DevTools } from "jotai-devtools";
type QuestionnaireResponse = {
  resourceType: "QuestionnaireResponse";
  status: "in-progress";
  item: {
    linkId: string;
    answer: {
      valueDecimal: number;
    }[];
  }[];
};
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

const heightAtom = expressionAtom<number[]>(
  qrAtom,
  "QuestionnaireResponse.item.where(linkId = 'height').answer.value",
  {},
  model,
);
heightAtom.debugLabel = "%height";

const weightAtom = expressionAtom<number[]>(
  qrAtom,
  "QuestionnaireResponse.item.where(linkId = 'weight').answer.value",
  {},
  model,
);
weightAtom.debugLabel = "%weight";
const bmiAtom = expressionAtom<[number]>(
  qrAtom,
  "%weight / (%height * %height)",
  {
    weight: weightAtom,
    height: heightAtom,
  },
  model,
);
bmiAtom.debugLabel = "%bmi";

export function BMIQuestionnaire() {
  return (
    <div className="flex flex-col p-4 min-w-fit w-full max-w-screen-sm">
      <p className="text-lg text-gray-700 font-medium">
        🚧 This example is under construction.
      </p>
      <BMIForm qrAtom={qrAtom} />
      <form className="mt-4 space-y-4">
        <ResultAtom label="Calculated result" atom={bmiAtom} />
        <FHIRAtom label="QuestionnaireResponse" atom={qrAtom} />
        <dl className="flex flex-col">
          <dt className="text-sm font-medium text-gray-700">
            Variable: <code>%height</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              QuestionnaireResponse.item.where(linkId = 'height').answer.value
            </code>
          </dd>
          <dt className="mt-2 text-sm font-medium text-gray-700">
            Variable: <code>%weight</code>
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              QuestionnaireResponse.item.where(linkId = 'weight').answer.value
            </code>
          </dd>
          <dt className="mt-2 text-sm font-medium text-gray-700">
            Calculated Expression:
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>%weight / (%height * %height)</code>
          </dd>
        </dl>
      </form>
      <DevTools position="top-right" isInitialOpen />
    </div>
  );
}

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
    [setQr],
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
