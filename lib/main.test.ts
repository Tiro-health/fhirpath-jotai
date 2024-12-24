import { Atom, atom } from "jotai";
import { createStore } from "jotai";
import { expect, test } from "vitest";
import expressionAtom from "./main";

test("if sum is updated when updating operands", () => {
  const store = createStore();
  const a = atom(0);
  const b = atom(0);
  const c = atom(0);
  const context = { a, b, c };
  const resultAtom = expressionAtom(undefined, "%a + %b", context);
  expect(store.get(resultAtom)).toStrictEqual([0]);
  store.set(a, 1);
  store.set(b, 2);
  expect(store.get(a)).toBe(1);
  expect(store.get(b)).toBe(2);
  expect(store.get(resultAtom)).toStrictEqual([3]);
});

test("if multiple linked expressions", () => {
  const store = createStore();
  const context: Record<string, Atom<unknown>> = {};
  context["a"] = expressionAtom(undefined, "1", context);
  context["b"] = expressionAtom(undefined, "2", context);
  const resultAtom = expressionAtom(undefined, "%a + %b", context);
  expect(store.get(resultAtom)).toStrictEqual([3]);
});
