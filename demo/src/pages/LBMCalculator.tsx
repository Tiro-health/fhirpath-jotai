import { atom } from "jotai";
import expressionAtom from "../../../lib/main";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import NumberInputAtom from "../components/NumberInputAtom";
import ResultAtom from "../components/ResultAtom";
import SelectAtom from "../components/SelectAtom";

const heightAtom = atom(1.75);
const weightAtom = atom(65);
const genderAtom = atom<string>("female");
const lbmAtom = expressionAtom<number[]>(
  undefined,
  // the James formula
  "iif(%gender = 'male', 1.1 * %weight - 128 * (%weight / %height).power(2), iif(%gender = 'female', 1.07 * %weight - 148 * (%weight / %height).power(2), {}))",
  {
    weight: weightAtom,
    height: heightAtom,
    gender: genderAtom,
  },
);
// Only to help Jotai DevTools display the atoms with a label
heightAtom.debugLabel = "%height";
weightAtom.debugLabel = "%weight";
genderAtom.debugLabel = "%gender";
lbmAtom.debugLabel = "%lbm";

export function LBMCalculator() {
  return (
    <div className="flex flex-col p-4 min-w-fit w-full max-w-screen-sm">
      <form className="space-y-4">
        <dl className="flex flex-col">
          <dt className="text-sm font-medium text-gray-700">
            FHIRPath expression used:
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              <pre>
                <span>
                  iff(%gender = 'male', 1.10 * %weight - 128 * (%weight /
                  %height).power(2),
                </span>
                <br />
                <span>
                  iff(%gender = 'female', 1.07 * %weight - 148 * (%weight /
                  %height).power(2), {}
                </span>
                <br />
                <span>{"{}"}))</span>
              </pre>
            </code>
          </dd>
        </dl>
        <NumberInputAtom label="%height" atom={heightAtom} />
        <NumberInputAtom label="%weight" atom={weightAtom} />
        <SelectAtom label="%gender" atom={genderAtom}>
          <option value="male">male</option>
          <option value="female">female</option>
        </SelectAtom>
        <ResultAtom label="%lbm" atom={lbmAtom} />
      </form>
      <DevTools position="top-right" isInitialOpen />
    </div>
  );
}
