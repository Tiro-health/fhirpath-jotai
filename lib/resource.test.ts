import { createStore } from "jotai";
import { atom } from "jotai";
import { describe, expect, test, vi } from "vitest";
import * as model from "fhirpath/fhir-context/r5";
import fhirPathAtom from "./main";

describe("resource atom with localized updates", () => {
  const initialResource = {
    resourceType: "QuestionnaireResponse",
    questionnaire: "https://example.org/fhir/Questionnaire/1",
    status: "in-progress",
    item: [
      {
        linkId: "1",
        answer: [
          {
            valueString: "John Doe",
          },
        ],
      },
      {
        linkId: "2",
        answer: [
          {
            valueDate: "2021-01-01",
          },
        ],
      },
      {
        linkId: "3",
        answer: [
          {
            valueDecimal: 68.5,
          },
        ],
      },
    ],
  };
  test("adding an item to qr doesn't trigger updates on existing items", () => {
    const resource = atom(initialResource);
    const testExpressionAtom = fhirPathAtom(
      resource,
      "QuestionnaireResponse.item.where(linkId='3')",
      {},
      model
    );
    const store = createStore();
    const expressionResult = store.get(testExpressionAtom);
    const mockFn = vi.fn();
    store.sub(testExpressionAtom, mockFn);
    store.set(resource, {
      ...initialResource,
      item: [
        ...initialResource.item,
        {
          linkId: "4",
          answer: [
            {
              valueString: "Jane Doe",
            },
          ],
        },
      ],
    });
    const newExpressionResult = store.get(testExpressionAtom);
    expect(mockFn).toHaveBeenCalledTimes(0); // no updates have been triggered
    expect(expressionResult).toBe(newExpressionResult); // the result is the same
  });

  test("updating an item to qr doe trigger updates of that item", () => {
    const resource = atom(initialResource);
    const lastItem = fhirPathAtom(
      resource,
      "QuestionnaireResponse.item.where(linkId='3')",
      {},
      model
    );
    const store = createStore();
    const mockFn = vi.fn();
    store.sub(lastItem, mockFn);
    store.set(resource, {
      ...initialResource,
      item: [
        ...initialResource.item.filter(({ linkId }) => linkId != "3"),
        {
          linkId: "3",
          answer: [
            {
              valueString: "Jane Doe",
            },
          ],
        },
      ],
    });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("item atom can use %context", () => {
  const initialResource = {
    resourceType: "QuestionnaireResponse",
    questionnaire: "https://example.org/fhir/Questionnaire/1",
    status: "in-progress",
    item: [
      {
        linkId: "1",
        answer: [
          {
            valueString: "John Doe",
          },
        ],
      },
      {
        linkId: "2",
        answer: [
          {
            valueDate: "2021-01-01",
          },
        ],
      },
      {
        linkId: "3",
        answer: [
          {
            valueDecimal: 68.5,
          },
        ],
      },
    ],
  };
  test("%context evaluates to correct item", () => {
    const qr = atom(initialResource);
    const item = atom((get) => {
      const node = get(qr).item.find(({ linkId }) => linkId === "3")!;
      // @ts-expect-error path is not a valid property
      node.__path__ = { path: "QuestionnaireResponse.item", parentResNode: qr };
      return node;
    });
    const testExpressionAtom = fhirPathAtom(
      item,
      "%context",
      { resource: qr },
      model
    );
    const store = createStore();
    const expressionResult = store.get(testExpressionAtom);
    expect(expressionResult).toStrictEqual([
      initialResource.item.find(({ linkId }) => linkId === "3"),
    ]);
  });
  test("evaluate %context path when item is passed", () => {
    const qr = atom(initialResource);
    const item = atom((get) => {
      const node = get(qr).item.find(({ linkId }) => linkId === "3")!;
      // @ts-expect-error path is not a valid property
      node.__path__ = { path: "QuestionnaireResponse.item", parentResNode: qr };
      return node;
    });
    const testExpressionAtom = fhirPathAtom(
      item,
      "%context.answer.value",
      { resource: qr },
      model
    );
    const store = createStore();
    const expressionResult = store.get(testExpressionAtom);
    expect(expressionResult).toStrictEqual([68.5]);
  });
});
