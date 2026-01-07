import { Atom } from 'jotai';
import { Model } from 'fhirpath';
import { OptionVariants } from 'fhirpath';
import { Path } from 'fhirpath';

declare type ContextAtoms = Record<string | symbol, Atom<unknown>>;

declare function fhirPathAtom<TResult extends unknown[] = unknown[], TFHIRData extends Record<string, unknown> = Record<string, unknown>>(fhirData: Atom<TFHIRData> | undefined, expression: string | Path, context?: ContextAtoms, model?: Model, options?: OptionVariants | undefined): Atom<TResult>;
export default fhirPathAtom;

export { }
