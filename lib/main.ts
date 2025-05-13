import { evaluate, Model, OptionVariants, Path } from "fhirpath";
import { atom, Atom, Getter } from "jotai";
import withCollectionCache from "./withCollectionCache";

export type ContextAtoms = Record<string | symbol, Atom<unknown>>;

/**
 * Create a proxy handler for the context atoms to allow for dynamic resolution of atoms
 * @param get
 * @returns
 */
const createVarsProxyHandler = (get: Getter): ProxyHandler<ContextAtoms> => ({
  get(target, key: string) {
    if (key in target) return get(target[key]);
    return undefined;
  },
  has(target, p) {
    return p in target;
  },
});

export default function fhirPathAtom<
  TResult extends unknown[] = unknown[],
  TFHIRData extends Record<string, unknown> = Record<string, unknown>
>(
  fhirData: Atom<TFHIRData> | undefined,
  expression: string | Path,
  context?: ContextAtoms,
  model?: Model,
  options?: OptionVariants | undefined
): Atom<TResult> {
  const expressionAtom = atom((get) => {
    const contextWithFhirData = fhirData
      ? { ...context, context: fhirData }
      : context;
    const contextProxy: ContextAtoms | undefined =
      contextWithFhirData != undefined
        ? new Proxy(contextWithFhirData, createVarsProxyHandler(get))
        : undefined;
    const result = evaluate(
      fhirData ? get(fhirData) : undefined,
      expression,
      contextProxy,
      model,
      options
    );
    if (result instanceof Promise)
      throw new Error(
        "Async evaluation of FHIRPath expressions is not supported."
      );
    return result as TResult;
  });
  const cachedAtom = withCollectionCache(expressionAtom);
  return new Proxy(cachedAtom, {
    get(target, p, receiver) {
      if (p == "debugLabel") {
        return expressionAtom.debugLabel;
      }
      return Reflect.get(target, p, receiver);
    },
    set(target, p, newValue, receiver) {
      if (p == "debugLabel") {
        expressionAtom.debugLabel = newValue;
      }
      return Reflect.set(target, p, newValue, receiver);
    },
  });
}
