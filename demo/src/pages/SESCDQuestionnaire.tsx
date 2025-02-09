import { atom } from "jotai";
import fhirPathAtom from "../../../lib/main";
import ResultAtom from "../components/ResultAtom";
import * as model from "fhirpath/fhir-context/r5";
import FHIRAtom from "../components/FHIRAtom";
import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { PrimitiveAtom } from "jotai";
import { DevTools } from "jotai-devtools";

const FIELDSETS = [
  "rectum",
  "sigmoidleftcolon",
  "traversecolon",
  "rightcolon",
  "ileum",
] as const;
const CODES = {
  sizeofulcers: new Map([
    ["none", { display: "None", weight: 0 }],
    ["aphthousulcers", { display: "Aphthous ulcers", weight: 1 }],
    ["largeulcers", { display: "Large ulcers", weight: 2 }],
    ["verylargeulcers", { display: "Very large ulcers", weight: 3 }],
  ]),
  ulceratedsurface: new Map([
    ["none", { display: "None", weight: 0 }],
    ["<10%", { display: "<10%", weight: 1 }],
    ["10-30%", { display: "10-30%", weight: 2 }],
    [">30%", { display: ">30%", weight: 3 }],
  ]),
  affectedsurface: new Map([
    ["unaffectedsegments", { display: "unaffected segments", weight: 0 }],
    ["<50%", { display: "< 50%", weight: 1 }],
    ["50%-75%", { display: "50% - 7G5%", weight: 2 }],
    [">75%", { display: "> 75%", weight: 3 }],
  ]),
  presenceofnarrowing: new Map([
    ["none", { display: "None", weight: 0 }],
    ["single", { display: "Single can be passed", weight: 1 }],
    ["multiple", { display: "Multiple can be passed", weight: 2 }],
    ["cannot", { display: "Cannot be passed", weight: 3 }],
  ]),
};

type QuestionnaireResponse = {
  resourceType: "QuestionnaireResponse";
  status: "in-progress";
  item: {
    linkId: string;
    item: {
      linkId: string;
      answer: [
        {
          extension?: {
            url: string;
            valueDecimal: number;
          }[];
          valueCoding: {
            code: string;
            display: string;
          };
        }
      ];
    }[];
  }[];
};

const questionnaireAtom = atom({
  resourceType: "Questionnaire",
  status: "active",
  item: FIELDSETS.map((fieldset) => ({
    linkId: fieldset,
    type: "group",
    item: [
      {
        linkId: `${fieldset}/sizeofulcers`,
        text: "Size of ulcers",
        type: "choice",
        answerOption: [...CODES.sizeofulcers].map(
          ([code, { display, weight }]) => ({
            valueCoding: { code, display },
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
                valueDecimal: weight,
              },
            ],
          })
        ),
      },
      {
        linkId: `${fieldset}/ulceratedsurface`,
        text: "Ulcerated surface",
        type: "choice",
        answerOption: [...CODES.ulceratedsurface].map(
          ([code, { display, weight }]) => ({
            valueCoding: { code, display },
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
                valueDecimal: weight,
              },
            ],
          })
        ),
      },
      {
        linkId: `${fieldset}/affectedsurface`,
        text: "Affected surface",
        type: "choice",
        answerOption: [...CODES.affectedsurface].map(
          ([code, { display, weight }]) => ({
            valueCoding: { code, display },
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
                valueDecimal: weight,
              },
            ],
          })
        ),
      },
      {
        linkId: `${fieldset}/presenceofnarrowing`,
        text: "Presence of narrowing",
        type: "choice",
        answerOption: [...CODES.presenceofnarrowing].map(
          ([code, { display, weight }]) => ({
            valueCoding: { code, display },
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
                valueDecimal: weight,
              },
            ],
          })
        ),
      },
    ],
  })),
});
questionnaireAtom.debugLabel = "Questionnaire";

const qrAtom = atom<QuestionnaireResponse>({
  resourceType: "QuestionnaireResponse",
  status: "in-progress",
  item: FIELDSETS.map((fieldset) => ({
    linkId: fieldset,
    item: [
      {
        linkId: `${fieldset}/sizeofulcers`,
        answer: [{ valueCoding: { code: "none", display: "None" } }],
      },
      {
        linkId: `${fieldset}/ulceratedsurface`,
        answer: [{ valueCoding: { code: "none", display: "None" } }],
      },
      {
        linkId: `${fieldset}/affectedsurface`,
        answer: [
          {
            valueCoding: {
              code: "unaffectedsegments",
              display: "unaffected segments",
            },
          },
        ],
      },
      {
        linkId: `${fieldset}/presenceofnarrowing`,
        answer: [{ valueCoding: { code: "none", display: "None" } }],
      },
    ],
  })),
} as QuestionnaireResponse);
qrAtom.debugLabel = "QuestionnaireResponse";

const rectumResultAtom = fhirPathAtom<[number]>(
  qrAtom,
  "QuestionnaireResponse.item.where(linkId='rectum').item.answer.weight().sum()",
  { questionnaire: questionnaireAtom },
  model
);
rectumResultAtom.debugLabel = "%rectum";

const sigmoidleftcolonResultAtom = fhirPathAtom<[number]>(
  qrAtom,
  "QuestionnaireResponse.item.where(linkId='sigmoidleftcolon').item.answer.weight().sum()",
  { questionnaire: questionnaireAtom },
  model
);
sigmoidleftcolonResultAtom.debugLabel = "%sigmoidleftcolon";

const traversecolonResultAtom = fhirPathAtom<[number]>(
  qrAtom,
  "QuestionnaireResponse.item.where(linkId='traversecolon').item.answer.weight().sum()",
  { questionnaire: questionnaireAtom },
  model
);
traversecolonResultAtom.debugLabel = "%traversecolon";

const rightcolonResultAtom = fhirPathAtom<[number]>(
  qrAtom,
  "QuestionnaireResponse.item.where(linkId='rightcolon').item.answer.weight().sum()",
  { questionnaire: questionnaireAtom },
  model
);
rightcolonResultAtom.debugLabel = "%rightcolon";

const ileumResultAtom = fhirPathAtom<[number]>(
  qrAtom,
  "QuestionnaireResponse.item.where(linkId='ileum').item.answer.weight().sum()",
  { questionnaire: questionnaireAtom },
  model
);
ileumResultAtom.debugLabel = "%ileum";

const resultAtom = fhirPathAtom<[number]>(
  qrAtom,
  "QuestionnaireResponse.repeat(item).answer.weight().sum()",
  { questionnaire: questionnaireAtom },
  model
);
resultAtom.debugLabel = "%score";

export function SESCDQuestionnaire() {
  return (
    <div className="flex flex-col p-4 min-w-fit w-full max-w-screen-sm">
      <SESCDForm qrAtom={qrAtom} />
      <form className="mt-4 space-y-4">
        <ResultAtom label="Rectum Score" atom={rectumResultAtom} />
        <ResultAtom
          label="Sigmoid and Left Colon Score"
          atom={sigmoidleftcolonResultAtom}
        />
        <ResultAtom
          label="Traverse Colon Score"
          atom={traversecolonResultAtom}
        />
        <ResultAtom label="Right Colon Score" atom={rightcolonResultAtom} />
        <ResultAtom label="Ileum Score" atom={ileumResultAtom} />
        <ResultAtom label="Total Score" atom={resultAtom} />
        <FHIRAtom label="QuestionnaireResponse" atom={qrAtom} />
        <h4 className="text-lg font-medium">FHIRPath Expressions</h4>
        <dl className="flex flex-col gap-4">
          <div>
            <dt className="text-sm font-medium text-gray-700">
              Rectum Score: <code>%rectum</code>
            </dt>
            <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
              <code>
                QuestionnaireResponse.item.where(linkId='rectum').item.answer.weight().sum()
              </code>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-700">
              Sigmoid and Left Colon Score: <code>%sigmoidleftcolon</code>
            </dt>
            <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
              <code>
                QuestionnaireResponse.item.where(linkId='sigmoidleftcolon').item.answer.weight().sum()
              </code>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-700">
              Traverse Colon Score: <code>%traversecolon</code>
            </dt>
            <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
              <code>
                QuestionnaireResponse.item.where(linkId='traversecolon').item.answer.weight().sum()
              </code>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-700">
              Right Colon Score: <code>%rightcolon</code>
            </dt>
            <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
              <code>
                QuestionnaireResponse.item.where(linkId='rightcolon').item.answer.weight().sum()
              </code>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-700">
              Ileum Score: <code>%ileum</code>
            </dt>
            <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
              <code>
                QuestionnaireResponse.item.where(linkId='ileum').item.answer.weight().sum()
              </code>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-700">
              Total Score: <code>%score</code>
            </dt>
            <dd className="text-sm text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2">
              <code>
                QuestionnaireResponse.repeat(item).answer.weight().sum()
              </code>
            </dd>
          </div>
        </dl>
      </form>
      <DevTools position="top-right" isInitialOpen />
    </div>
  );
}

function SESCDForm({
  qrAtom,
}: {
  qrAtom: PrimitiveAtom<QuestionnaireResponse>;
}) {
  const setQr = useSetAtom(qrAtom);

  // Sync formstate with atom
  const handleFormInput = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      const formData = new FormData(event.currentTarget);
      const changedInputName = event.target
        ? (event.target as HTMLInputElement).name
        : null;
      setQr((prev) => {
        if (!changedInputName || !isValidName(changedInputName)) return prev;
        console.log("changedInputName", changedInputName);
        const [fieldsetName, fieldName] = changedInputName.split("/") as [
          (typeof FIELDSETS)[number],
          keyof typeof CODES
        ];
        const next: QuestionnaireResponse = {
          ...prev,
          item: prev.item.map((item) => {
            if (item.linkId === fieldsetName) {
              const [valueCoding, weightExt] = extractCoding(
                formData.get(changedInputName),
                [fieldsetName, fieldName]
              );
              return {
                ...item,
                item: item.item.map((item) =>
                  item.linkId === changedInputName
                    ? {
                        ...item,
                        answer: [{ valueCoding }],
                        extension: [weightExt],
                      }
                    : item
                ),
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
      <h2 className="text-lg font-medium">SES-CD Questionnaire</h2>
      <div className="flex gap-2">
        <fieldset className="block">
          <legend className="text-base font-medium text-gray-700">
            Rectum
          </legend>
          <div className="mt-2">
            <label className="text-sm font-medium text-gray-700">
              Size of ulcers
            </label>
            <select
              name="rectum/sizeofulcers"
              className="block p-2 border border-gray-300 rounded-md mr-2"
            >
              <option value="none">None (0)</option>
              <option value="aphthousulcers">Aphthous ulcers (1)</option>
              <option value="largeulcers">Large ulcers (2)</option>
              <option value="verylargeulcers">Very large ulcers (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Ulcerated surface
            </label>
            <select
              name="rectum/ulceratedsurface"
              className="block p-2 border border-gray-300 rounded-md mr-2"
            >
              <option value="none">None (0)</option>
              <option value="<10%">{"<10%"} (1)</option>
              <option value="10-30%">10-30% (2)</option>
              <option value=">30%">30% (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Affected surface
            </label>
            <select
              name="rectum/affectedsurface"
              className="block p-2 border border-gray-300 rounded-md"
            >
              <option value="unaffectedsegments">
                Unaffected segments (0)
              </option>
              <option value="<50%">{"<50%"} (1)</option>
              <option value="50%-75%">50%-75% (2)</option>
              <option value=">75%">75% (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Presence of narrowing
            </label>
            <select
              name="rectum/presenceofnarrowing"
              className="block p-2 border border-gray-300 rounded-md"
            >
              <option value="none">None (0)</option>
              <option value="single">Single can be passed (1)</option>
              <option value="multiple">Multiple can be passed (2)</option>
              <option value="cannot">Cannot be passed (3)</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="block">
          <legend className="text-base font-medium text-gray-700">
            Sigmoid and Left Colon
          </legend>
          <div className="mt-2">
            <label className="text-sm font-medium text-gray-700">
              Size of ulcers
            </label>
            <select
              name="sigmoidleftcolon/sizeofulcers"
              className="block p-2 border border-gray-300 rounded-md mr-2"
            >
              <option value="none">None (0)</option>
              <option value="aphthousulcers">Aphthous ulcers (1)</option>
              <option value="largeulcers">Large ulcers (2)</option>
              <option value="verylargeulcers">Very large ulcers (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Ulcerated surface
            </label>
            <select
              name="sigmoidleftcolon/ulceratedsurface"
              className="block p-2 border border-gray-300 rounded-md mr-2"
            >
              <option value="none">None (0)</option>
              <option value="<10%">{"<10%"} (1)</option>
              <option value="10-30%">10-30% (2)</option>
              <option value=">30%">30% (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Affected surface
            </label>
            <select
              name="sigmoidleftcolon/affectedsurface"
              className="block p-2 border border-gray-300 rounded-md"
            >
              <option value="unaffectedsegments">
                Unaffected segments (0)
              </option>
              <option value="<50%">{"<50%"} (1)</option>
              <option value="50%-75%">50%-75% (2)</option>
              <option value=">75%">75% (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Presence of narrowing
            </label>
            <select
              name="sigmoidleftcolon/presenceofnarrowing"
              className="block p-2 border border-gray-300 rounded-md"
            >
              <option value="none">None (0)</option>
              <option value="single">Single can be passed (1)</option>
              <option value="multiple">Multiple can be passed (2)</option>
              <option value="cannot">Cannot be passed (3)</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="block">
          <legend className="text-base font-medium text-gray-700">
            Traverse Colon
          </legend>
          <div className="mt-2">
            <label className="text-sm font-medium text-gray-700">
              Size of ulcers
            </label>
            <select
              name="traversecolon/sizeofulcers"
              className="block p-2 border border-gray-300 rounded-md mr-2"
            >
              <option value="none">None (0)</option>
              <option value="aphthousulcers">Aphthous ulcers (1)</option>
              <option value="largeulcers">Large ulcers (2)</option>
              <option value="verylargeulcers">Very large ulcers (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Ulcerated surface
            </label>
            <select
              name="traversecolon/ulceratedsurface"
              className="block p-2 border border-gray-300 rounded-md mr-2"
            >
              <option value="none">None (0)</option>
              <option value="<10%">{"<10%"} (1)</option>
              <option value="10-30%">10-30% (2)</option>
              <option value=">30%">30% (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Affected surface
            </label>
            <select
              name="traversecolon/affectedsurface"
              className="block p-2 border border-gray-300 rounded-md"
            >
              <option value="unaffectedsegments">
                Unaffected segments (0)
              </option>
              <option value="<50%">{"<50%"} (1)</option>
              <option value="50%-75%">50%-75% (2)</option>
              <option value=">75%">75% (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Presence of narrowing
            </label>
            <select
              name="traversecolon/presenceofnarrowing"
              className="block p-2 border border-gray-300 rounded-md"
            >
              <option value="none">None (0)</option>
              <option value="single">Single can be passed (1)</option>
              <option value="multiple">Multiple can be passed (2)</option>
              <option value="cannot">Cannot be passed (3)</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="block">
          <legend className="text-base font-medium text-gray-700">
            Right Colon
          </legend>
          <div className="mt-2">
            <label className="text-sm font-medium text-gray-700">
              Size of ulcers
            </label>
            <select
              name="rightcolon/sizeofulcers"
              className="block p-2 border border-gray-300 rounded-md mr-2"
            >
              <option value="none">None (0)</option>
              <option value="aphthousulcers">Aphthous ulcers (1)</option>
              <option value="largeulcers">Large ulcers (2)</option>
              <option value="verylargeulcers">Very large ulcers (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Ulcerated surface
            </label>
            <select
              name="rightcolon/ulceratedsurface"
              className="block p-2 border border-gray-300 rounded-md mr-2"
            >
              <option value="none">None (0)</option>
              <option value="<10%">{"<10%"} (1)</option>
              <option value="10-30%">10-30% (2)</option>
              <option value=">30%">30% (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Affected surface
            </label>
            <select
              name="rightcolon/affectedsurface"
              className="block p-2 border border-gray-300 rounded-md"
            >
              <option value="unaffectedsegments">
                Unaffected segments (0)
              </option>
              <option value="<50%">{"<50%"} (1)</option>
              <option value="50%-75%">50%-75% (2)</option>
              <option value=">75%">75% (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Presence of narrowing
            </label>
            <select
              name="rightcolon/presenceofnarrowing"
              className="block p-2 border border-gray-300 rounded-md"
            >
              <option value="none">None (0)</option>
              <option value="single">Single can be passed (1)</option>
              <option value="multiple">Multiple can be passed (2)</option>
              <option value="cannot">Cannot be passed (3)</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="block">
          <legend className="text-base font-medium text-gray-700">Ileum</legend>
          <div className="mt-2">
            <label className="text-sm font-medium text-gray-700">
              Size of ulcers
            </label>
            <select
              name="ileum/sizeofulcers"
              className="block p-2 border border-gray-300 rounded-md mr-2"
            >
              <option value="none">None (0)</option>
              <option value="aphthousulcers">Aphthous ulcers (1)</option>
              <option value="largeulcers">Large ulcers (2)</option>
              <option value="verylargeulcers">Very large ulcers (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Ulcerated surface
            </label>
            <select
              name="ileum/ulceratedsurface"
              className="block p-2 border border-gray-300 rounded-md mr-2"
            >
              <option value="none">None (0)</option>
              <option value="<10%">{"<10%"} (1)</option>
              <option value="10-30%">10-30% (2)</option>
              <option value=">30%">30% (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Affected surface
            </label>
            <select
              name="ileum/affectedsurface"
              className="block p-2 border border-gray-300 rounded-md"
            >
              <option value="unaffectedsegments">
                Unaffected segments (0)
              </option>
              <option value="<50%">{"<50%"} (1)</option>
              <option value="50%-75%">50%-75% (2)</option>
              <option value=">75%">75% (3)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Presence of narrowing
            </label>
            <select
              name="ileum/presenceofnarrowing"
              className="block p-2 border border-gray-300 rounded-md"
            >
              <option value="none">None (0)</option>
              <option value="single">Single can be passed (1)</option>
              <option value="multiple">Multiple can be passed (2)</option>
              <option value="cannot">Cannot be passed (3)</option>
            </select>
          </div>
        </fieldset>
      </div>
    </form>
  );
}
type ValidNameTuple = [(typeof FIELDSETS)[number], keyof typeof CODES];
type ValidName = `${ValidNameTuple[0]}/${ValidNameTuple[1]}`;
function isValidName(name: string): name is ValidName {
  const [fieldset, fieldname] = name.split("/") as ValidNameTuple;
  return FIELDSETS.includes(fieldset) && fieldname in CODES;
}

function extractCoding(
  raw: FormDataEntryValue | null,
  name: [(typeof FIELDSETS)[number], keyof typeof CODES]
) {
  if (typeof raw !== "string") throw new Error("Invalid code");
  const coding = CODES[name[1]].get(raw);
  if (!coding) throw new Error("Invalid code");
  const { weight, ...rest } = coding;
  const valueCoding = { code: raw, ...rest };
  const weightExt = {
    url: "http://hl7.org/fhir/StructureDefinition/itemWeight",
    valueDecimal: weight,
  };
  return [valueCoding, weightExt] as const;
}
