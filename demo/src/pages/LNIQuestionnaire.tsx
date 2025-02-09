import { useCallback } from "react";
import { atom, useSetAtom, PrimitiveAtom } from "jotai";
import * as model from "fhirpath/fhir-context/r5";
import fhirPathAtom from "../../../lib/main";
import { FHIRExpression, QuestionnaireResponse } from "../types";
import { createSDCContext } from "../sdc";
import { VariablePanel } from "../components/VariablesPanel";

const qrAtom = atom<QuestionnaireResponse>({
  resourceType: "QuestionnaireResponse",
  status: "in-progress",
  item: [
    {
      linkId: "tstage",
    },
    {
      linkId: "ipsa",
    },
    {
      linkId: "tumorlength",
    },
    {
      linkId: "isup",
    },
  ],
});
const WEIGHT_EXT = "http://hl7.org/fhir/StructureDefinition/itemWeight";
const ISUP_CODE_DISPLAYS = new Map([
  ["1", "ISUP 1"],
  ["2", "ISUP 2"],
  ["3", "ISUP 3"],
  ["4", "ISUP 4"],
  ["5", "ISUP 5"],
]);

const TSTAGE_CODE_WEIGHTS = new Map([
  ["cT1c", 1],
  ["cT2a", 2],
  ["cT2b", 3],
  ["cT2c", 4],
  ["cT3a", 5],
  ["cT3b", 6],
]);

const fieldConverters = {
  tstage: (value: string) => ({
    valueCoding: {
      code: value,
      display: value,
      extension: [
        { url: WEIGHT_EXT, valueDecimal: TSTAGE_CODE_WEIGHTS.get(value)! },
      ],
    },
  }),
  ipsa: (value: string) => ({ valueDecimal: parseFloat(value) }),
  tumorlength: (value: string) => ({ valueDecimal: parseFloat(value) }),
  isup: (value: string) => ({
    valueCoding: {
      code: value,
      display: ISUP_CODE_DISPLAYS.get(value)!,
      extension: [{ url: WEIGHT_EXT, valueDecimal: parseInt(value) }],
    },
  }),
};

qrAtom.debugLabel = "QuestionnaireResponse";

const variables: FHIRExpression[] = [
  {
    name: "tstage",
    expression:
      "QuestionnaireResponse.item.where(linkId = 'tstage').answer.weight()",
  },
  {
    name: "isup",
    expression:
      "QuestionnaireResponse.item.where(linkId = 'isup').answer.weight()",
  },
  {
    name: "iPSA",
    expression:
      "QuestionnaireResponse.item.where(linkId = 'ipsa').answer.value",
  },
  {
    name: "tumorlength",
    expression:
      "QuestionnaireResponse.item.where(linkId = 'tumorlength').answer.value",
  },
  {
    name: "mu",
    expression:
      "(-6.4605 + (%tstage * 0.3833) + (%iPSA * 0.0228) + (%tumorlength * 0.1443) + (%isup * 0.6220))",
  },
];
const calculatedExpression = "(%mu.exp() / (1 + %mu.exp()) * 100).round(2)";
const calculated = fhirPathAtom<[number]>(
  qrAtom,
  calculatedExpression,
  createSDCContext(qrAtom, variables, {}, model)
);

function LNIForm({ qrAtom }: { qrAtom: PrimitiveAtom<QuestionnaireResponse> }) {
  const setQr = useSetAtom(qrAtom);

  // Sync formstate with atom
  const handleFormInput = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      const formData = new FormData(event.currentTarget);
      const changedInputName = event.target
        ? (event.target as HTMLInputElement).name
        : null;
      setQr((prev) => {
        const next: QuestionnaireResponse = {
          ...prev,
          item: prev.item.map((item) => {
            if (
              item.linkId === changedInputName &&
              changedInputName in fieldConverters
            ) {
              const fieldValue = formData.get(changedInputName) as string;
              const fieldName =
                changedInputName as keyof typeof fieldConverters;
              const valueObject = fieldConverters[fieldName](fieldValue);
              console.log(fieldName, fieldValue, valueObject);
              return {
                ...item,
                answer: [valueObject],
              };
            }
            return item;
          }),
        };
        return next;
      });
    },
    [setQr]
  );

  return (
    <form
      onInput={handleFormInput}
      className="border border-gray-300 p-4 rounded-md space-y-4"
    >
      <h2 className="text-lg font-medium">
        Lymphe Node Invasion Risk Questionnaire
      </h2>
      <div>
        <label className="text-base font-medium">
          T-stage (based on mpMRI)
        </label>
        <select
          name="tstage"
          defaultValue=""
          className="p-2 border border-gray-300 rounded-md mx-2"
        >
          <option disabled className="text-gray-400" value="">
            Select T-stage
          </option>
          <option value="cT1c">cT1c</option>
          <option value="cT2a">cT2a</option>
          <option value="cT2b">cT2b</option>
          <option value="cT2c">cT2c</option>
          <option value="cT3a">cT3a</option>
          <option value="cT3b">cT3b</option>
        </select>
      </div>
      <div>
        <label className="text-base font-medium">iPSA</label>
        <input
          type="number"
          name="ipsa"
          className="p-2 border border-gray-300 rounded-md mx-2"
        />
      </div>
      <div>
        <label className="text-base font-medium">
          Maximum tumor length in one core (mm):
        </label>
        <input
          type="number"
          name="tumorlength"
          className="p-2 border border-gray-300 rounded-md mx-2"
        />
      </div>
      <div>
        <label className="text-base font-medium">ISUP grade</label>
        <select
          name="isup"
          defaultValue=""
          className="p-2 border border-gray-300 rounded-md mx-2"
        >
          <option disabled className="text-gray-400" value="">
            Select ISUP grade
          </option>
          <option value="1">ISUP 1</option>
          <option value="2">ISUP 2</option>
          <option value="3">ISUP 3</option>
          <option value="4">ISUP 4</option>
          <option value="5">ISUP 5</option>
        </select>
      </div>
    </form>
  );
}

export default function LNIQuestionnairePage() {
  return (
    <VariablePanel
      qrAtom={qrAtom}
      variables={variables}
      calculatedAtom={calculated}
      calculatedExpression={calculatedExpression}
    >
      <LNIForm qrAtom={qrAtom} />
    </VariablePanel>
  );
}
