import { Atom } from "jotai";
import { FHIRExpression } from "./types";
import fhirPathAtom from "../../lib/main";
import { Model } from "fhirpath";
import { AtomFamily } from "jotai/vanilla/utils/atomFamily";
import { atomFamily } from "jotai/utils";

export function createVariableAtoms(
  resource: Atom<Record<string, unknown>>,
  context?: Record<string, Atom<unknown>>,
  model?: Model
): AtomFamily<FHIRExpression, Atom<unknown[]>> {
  return atomFamily((param: FHIRExpression) => {
    const atom = fhirPathAtom<unknown[]>(
      resource,
      param.expression,
      context,
      model
    );
    atom.debugLabel = param.name;
    return atom;
  });
}

export function createSDCContext(
  resource: Atom<Record<string, unknown>>,
  variables: FHIRExpression[],
  context?: Record<string, Atom<unknown>>,
  model?: Model
): Record<string, Atom<unknown>> {
  const c = { ...context };
  variables.forEach(({ name, expression }) => {
    const variableAtom = fhirPathAtom<unknown[]>(
      resource,
      expression,
      c,
      model
    );
    variableAtom.debugLabel = name;
    c[name] = variableAtom;
  });
  return c;
}
