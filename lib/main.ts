import { evaluate, Model, OptionVariants, Path } from "fhirpath";
import { atom, Atom, Getter } from "jotai";

export type ContextAtoms = Record<string | symbol, Atom<unknown>>;
export type Context = Record<string | symbol, unknown> & {
  __deleted: (string | symbol)[];
  __atoms: ContextAtoms;
};

const createProxyHandler = (get: Getter): ProxyHandler<Context> => ({
  get(target, key: string) {
    if (key in target.__deleted) return undefined;
    if (key in target.__atoms) return get(target.__atoms[key]);
    return key in target ? target[key] : undefined;
  },
  set(target, p, newValue) {
    if (p in target.__atoms) return false;
    target[p] = newValue;
    return true;
  },
  has(target, p) {
    return (p in target || p in target.__atoms) && !(p in target.__deleted);
  },
  deleteProperty(target, p) {
    if (p in target) {
      delete target[p];
      return true;
    } else if (p in target.__atoms) {
      target.__deleted.push(p);
      return true;
    }
    return false;
  },
});

const createProxyContext = (context: ContextAtoms) => ({
  __deleted: [],
  __atoms: context,
});

export default function expressionAtom<
  TFHIRData,
  TResult extends unknown[] | Promise<unknown[]> =
    | unknown[]
    | Promise<unknown[]>,
>(
  fhirData: Atom<TFHIRData> | undefined,
  expression: string | Path,
  context?: ContextAtoms,
  model?: Model,
  options?: OptionVariants | undefined,
): Atom<TResult> {
  return atom((get) => {
    const contextProxy: Context | undefined =
      context != undefined
        ? new Proxy(createProxyContext(context), createProxyHandler(get))
        : undefined;
    const result = evaluate(
      fhirData && get(fhirData),
      expression,
      contextProxy,
      model,
      options,
    );
    return result as TResult;
  });
}

export function useExpressionAtom(
  atom: Atom<unknown>,
  expression: string | Path,
  context: ContextAtoms,
  model?: Model,
  options?: OptionVariants | undefined,
) {}
