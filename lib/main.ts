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
  return withCollectionCache(
    atom((get) => {
      const contextProxy: ContextAtoms | undefined =
        context != undefined
          ? new Proxy(context, createVarsProxyHandler(get))
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
    })
  );
}
