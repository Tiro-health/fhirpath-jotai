import { useAtomValue, PrimitiveAtom } from "jotai";

export default function FHIRAtom<
  TValue extends Record<string, unknown> | undefined
>({ label, atom }: { label: string; atom: PrimitiveAtom<TValue> }) {
  const value = useAtomValue(atom);
  return (
    <div className="mt-2 flex flex-col">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        className="text-xs text-gray-700 rounded-lg border border-gray-300 bg-gray-50 p-2 font-mono"
        readOnly
        rows={10}
        value={JSON.stringify(value, null, 2)}
      />
    </div>
  );
}
