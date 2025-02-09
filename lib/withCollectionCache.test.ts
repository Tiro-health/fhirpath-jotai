import { createStore } from "jotai";
import { atom } from "jotai";
import { expect, test, vi } from "vitest";
import withCollectionCache from "./withCollectionCache";

const initialValue = [1, 2, { test: "test" }];
const a = atom(initialValue);
const b = withCollectionCache(a);

test("if b is updated when updating a", () => {
  const store = createStore();

  expect(store.get(b)).toBe(initialValue);
  const mockFn = vi.fn();
  store.sub(b, mockFn);
  const newValue = [2, 3, 4];
  store.set(a, newValue);
  expect(store.get(b)).toBe(newValue);
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("if b is not updated when updating a with same values", () => {
  const store = createStore();

  expect(store.get(b)).toBe(initialValue);
  const mockFn = vi.fn();
  store.sub(b, mockFn);
  store.set(a, [...initialValue]);
  expect(store.get(b)).toBe(initialValue);
  expect(mockFn).toHaveBeenCalledTimes(0);
});
