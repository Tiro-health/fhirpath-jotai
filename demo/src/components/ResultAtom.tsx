import { Atom } from "jotai";
import { useAtomValue } from "jotai";

export default function ResultAtom<TValue extends string | number | boolean>({
  atom,
  label,
}: {
  atom: Atom<[TValue]>;
  label: string;
}) {
  const result = useAtomValue(atom);
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <output className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-50">
        {result[0]}
      </output>
    </div>
  );
}
