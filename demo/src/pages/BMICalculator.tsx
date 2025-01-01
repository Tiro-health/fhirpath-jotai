import { atom } from "jotai";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import expressionAtom from "../../../lib/main";
import NumberInputAtom from "../components/NumberInputAtom";
import ResultAtom from "../components/ResultAtom";

const heightAtom = atom(1.8);
const weightAtom = atom(80);
const heightSquaredAtom = expressionAtom<[number]>(
  undefined,
  "%height * %height",
  { height: heightAtom, weight: weightAtom },
);
const bmiAtom = expressionAtom<[number]>(
  undefined,
  "%weight / (%height * %height)",
  {
    weight: weightAtom,
    height: heightAtom,
    "height-sqaured": heightSquaredAtom,
  },
);
// Only to help Jotai DevTools display the atoms with a label
heightAtom.debugLabel = "%height";
heightSquaredAtom.debugLabel = "%height-squared";
weightAtom.debugLabel = "%weight";
bmiAtom.debugLabel = "%bmi";

export function BMICalculator() {
  return (
    <div className="flex flex-col p-4 min-w-fit w-full max-w-screen-sm">
      <form className="space-y-4">
        <dl className="flex flex-col">
          <dt className="text-sm font-medium text-gray-700">
            FHIRPath expression used:
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>%weight / (%height * %height)</code>
          </dd>
        </dl>
        <NumberInputAtom label="%height" atom={heightAtom} />
        <NumberInputAtom label="%weight" atom={weightAtom} />
        <ResultAtom label="%height-squared" atom={heightSquaredAtom} />
        <ResultAtom label="BMI" atom={bmiAtom} />
      </form>
      <DevTools position="top-right" isInitialOpen />
    </div>
  );
}
