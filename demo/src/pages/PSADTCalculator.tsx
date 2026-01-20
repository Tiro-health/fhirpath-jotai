import { atom } from "jotai";
import fhirPathAtom from "../../../lib/main";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import NumberInputAtom from "../components/NumberInputAtom";
import DateInputAtom from "../components/DateInputAtom";
import ResultAtom from "../components/ResultAtom";

// Helper to get ISO date string (YYYY-MM-DD)
function getDateString(date: Date): string {
  return date.toISOString().split("T")[0];
}

// Default dates: 6 months ago and today
const today = new Date();
const sixMonthsAgo = new Date(today);
sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

const date1Atom = atom(getDateString(sixMonthsAgo));
const date2Atom = atom(getDateString(today));
const psa1Atom = atom<number | undefined>(undefined);
const psa2Atom = atom<number | undefined>(undefined);

const durationMonthsAtom = fhirPathAtom<[number]>(
  undefined,
  "%date1.toDate().duration(%date2.toDate(), 'month')",
  {
    date1: date1Atom,
    date2: date2Atom,
  }
);

const psadtAtom = fhirPathAtom<[number]>(
  undefined,
  "iif(%durationMonths.exists() and %psa1 > 0 and %psa2 > 0, (%durationMonths * (2).ln() / (%psa2 / %psa1).ln()).round(1), {})",
  {
    durationMonths: durationMonthsAtom,
    psa1: psa1Atom,
    psa2: psa2Atom,
  }
);

// Debug labels for Jotai DevTools
date1Atom.debugLabel = "%date1";
date2Atom.debugLabel = "%date2";
psa1Atom.debugLabel = "%psa1";
psa2Atom.debugLabel = "%psa2";
durationMonthsAtom.debugLabel = "%durationMonths";
psadtAtom.debugLabel = "psadt";

export function PSADTCalculator() {
  return (
    <div className="flex flex-col p-4 min-w-fit w-full max-w-screen-sm">
      <form className="space-y-4">
        <dl className="flex flex-col">
          <dt className="text-sm font-medium text-gray-700">
            PSA Doubling Time Formula:
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              <pre>PSADT = duration * ln(2) / ln(psa2/psa1)</pre>
            </code>
          </dd>
        </dl>
        <dl className="flex flex-col">
          <dt className="text-sm font-medium text-gray-700">
            FHIRPath expression used:
          </dt>
          <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
            <code>
              <pre className="whitespace-pre-wrap">
                {`iif(%durationMonths.exists() and %psa1 > 0 and %psa2 > 0,
  (%durationMonths * (2).ln() / (%psa2 / %psa1).ln()).round(1),
  {})`}
              </pre>
            </code>
          </dd>
        </dl>
        <DateInputAtom label="%date1 (first measurement)" atom={date1Atom} />
        <DateInputAtom label="%date2 (second measurement)" atom={date2Atom} />
        <NumberInputAtom label="%psa1 (first PSA value)" atom={psa1Atom} />
        <NumberInputAtom label="%psa2 (second PSA value)" atom={psa2Atom} />
        <ResultAtom label="%durationMonths" atom={durationMonthsAtom} />
        <ResultAtom label="PSADT (months)" atom={psadtAtom} />
      </form>
      <DevTools position="top-right" isInitialOpen />
    </div>
  );
}
