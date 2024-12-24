import { atom } from "jotai";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import expressionAtom from "../../../lib/main";
import NumberField from "../components/NumberField";
import Result from "../components/Result";

const heightAtom = atom(1.8);
const weightAtom = atom(80);
const bmiAtom = expressionAtom<undefined, number[]>(
  undefined,
  "%weight / (%height * %height)",
  {
    weight: weightAtom,
    height: heightAtom,
  },
);
// Only to help Jotai DevTools display the atoms with a label
heightAtom.debugLabel = "%height";
weightAtom.debugLabel = "%weight";
bmiAtom.debugLabel = "%bmi";

export function BMICalculator() {
  return (
    <div className="flex flex-col p-4 w-96">
      <form className="space-y-4">
        <dl className="flex flex-col">
          <dt className="text-sm font-medium text-gray-700">
            FHIRPath expression used:
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>%weight / (%height * %height)</code>
          </dd>
        </dl>
        <NumberField label="%height" atom={heightAtom} />
        <NumberField label="%weight" atom={weightAtom} />
        <Result label="BMI" atom={bmiAtom} />
      </form>
      <DevTools position="top-right" isInitialOpen />
    </div>
  );
}
