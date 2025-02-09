type ValueObject =
  | {
      valueDecimal: number;
    }
  | {
      valueString: string;
    }
  | {
      valueBoolean: boolean;
    }
  | {
      valueCoding: {
        code: string;
        display: string;
      };
    };
export type QuestionnaireResponse = {
  resourceType: "QuestionnaireResponse";
  status: "in-progress";
  item: {
    linkId: string;
    answer?: [ValueObject];
  }[];
};

export type FHIRExpression = {
  name: string;
  expression: string;
  description?: string;
  language?: "text/fhirpath";
};
