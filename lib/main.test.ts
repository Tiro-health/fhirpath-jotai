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

test("duration function calculates months between dates", () => {
  const store = createStore();
  // Test using literal dates in the expression
  const monthsAtom = fhirPathAtom(
    undefined,
    "@2024-01-01.duration(@2024-07-01, 'month')",
    {}
  );
  expect(store.get(monthsAtom)).toStrictEqual([6]);
});

test("duration function returns empty when dates are empty", () => {
  const store = createStore();
  const context: Record<string, Atom<unknown>> = {};
  context["date1"] = atom([]);
  // When date1 is empty, duration should return empty
  const monthsAtom = fhirPathAtom(
    undefined,
    "%date1.duration(@2024-07-01, 'month')",
    context
  );
  expect(store.get(monthsAtom)).toStrictEqual([]);
});

test("PSA Doubling Time calculation with iif guard", () => {
  const store = createStore();
  const context: Record<string, Atom<unknown>> = {};
  context["psa1"] = atom(4);
  context["psa2"] = atom(8);
  // Using renamed variable to avoid reserved word 'months'
  context["durationMonths"] = fhirPathAtom(
    undefined,
    "@2024-01-01.duration(@2024-07-01, 'month')",
    context
  );
  const psadtAtom = fhirPathAtom(
    undefined,
    "iif(%durationMonths.exists() and %psa1.exists() and %psa2.exists() and %psa1 > 0 and %psa2 > 0, (%durationMonths * (2).ln() / (%psa2 / %psa1).ln()).round(1), {})",
    context
  );
  // PSA doubled in 6 months, so PSADT should be 6
  expect(store.get(psadtAtom)).toStrictEqual([6]);
});

test("PSA Doubling Time returns empty when values missing", () => {
  const store = createStore();
  const context: Record<string, Atom<unknown>> = {};
  context["psa1"] = atom([]);
  context["psa2"] = atom([]);
  context["durationMonths"] = atom([]);
  const psadtAtom = fhirPathAtom(
    undefined,
    "iif(%durationMonths.exists() and %psa1.exists() and %psa2.exists() and %psa1 > 0 and %psa2 > 0, (%durationMonths * (2).ln() / (%psa2 / %psa1).ln()).round(1), {})",
    context
  );
  expect(store.get(psadtAtom)).toStrictEqual([]);
});
