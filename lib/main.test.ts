import { Atom, atom } from "jotai";
import { createStore } from "jotai";
import { expect, test } from "vitest";
import fhirPathAtom from "./main";

test("if sum is updated when updating operands", () => {
  const store = createStore();
  const a = atom(0);
  const b = atom(0);
  const c = atom(0);
  const context = { a, b, c };
  const resultAtom = fhirPathAtom(undefined, "%a + %b", context);
  expect(store.get(resultAtom)).toStrictEqual([0]);
  store.set(a, 1);
  store.set(b, 2);
  expect(store.get(a)).toBe(1);
  expect(store.get(b)).toBe(2);
  expect(store.get(resultAtom)).toStrictEqual([3]);
});

test("if multiple linked expressions are resolved", () => {
  const store = createStore();
  const context: Record<string, Atom<unknown>> = {};
  context["a"] = fhirPathAtom(undefined, "1", context);
  context["b"] = fhirPathAtom(undefined, "2", context);
  console.log(context);
  const resultAtom = fhirPathAtom(undefined, "%a + %b", context);
  expect(store.get(resultAtom)).toStrictEqual([3]);
});
