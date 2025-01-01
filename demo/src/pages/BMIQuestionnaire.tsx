import { atom } from "jotai";
import expressionAtom from "../../../lib/main";
import ResultAtom from "../components/ResultAtom";
import * as model from "fhirpath/fhir-context/r5";
import FHIRAtom from "../components/FHIRAtom";
import { DevTools } from "jotai-devtools";

const qrAtom = atom({
  resourceType: "QuestionnaireResponse",
  status: "in-progress",
  item: [
    {
      linkId: "height",
      text: "What is your height?",
      answer: [
        {
          valueDecimal: 1.8,
        },
      ],
    },
    {
      linkId: "weight",
      text: "What is your weight?",
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
      <form className="space-y-4">
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
        <ResultAtom label="Calculated result" atom={bmiAtom} />
      </form>
      <DevTools position="top-right" isInitialOpen />
    </div>
  );
}
