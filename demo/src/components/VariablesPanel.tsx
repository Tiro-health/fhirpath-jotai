import { PrimitiveAtom } from "jotai";
import FHIRAtom from "./FHIRAtom";
import ResultAtom from "./ResultAtom";
import { DevTools } from "jotai-devtools";
import { FHIRExpression, QuestionnaireResponse } from "../types";
import { Atom } from "jotai";

type VariablePanelProps<TResult> = {
  children?: React.ReactNode;
  qrAtom: PrimitiveAtom<QuestionnaireResponse>;
  variables: FHIRExpression[];
  calculatedAtom: Atom<[TResult]>;
  calculatedExpression: string;
};
export function VariablePanel<TResult extends boolean | string | number>({
  children,
  variables,
  calculatedAtom,
  calculatedExpression,
  qrAtom,
}: VariablePanelProps<TResult>) {
  return (
    <div className="flex flex-col p-4 min-w-fit w-full max-w-screen-sm">
      {children}
      <form className="mt-4 space-y-4">
        <ResultAtom label="Calculated result" atom={calculatedAtom} />
        <FHIRAtom label="QuestionnaireResponse" atom={qrAtom} />
        <dl className="flex flex-col">
          {variables.map(({ name, expression }) => (
            <div key={name} className="mt-1">
              <dt className="text-sm font-medium text-gray-700">
                Variable: <code>{name}</code>
              </dt>
              <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
                <code>{expression}</code>
              </dd>
            </div>
          ))}
          <div className="mt-4">
            <dt className="text-sm font-medium text-gray-700">
              Calculated expression
            </dt>
            <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
              <code>{calculatedExpression}</code>
            </dd>
          </div>
        </dl>
      </form>
      <DevTools position="top-right" />
    </div>
  );
}
