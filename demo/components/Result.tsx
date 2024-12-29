import { Atom } from "jotai";
import { useAtomValue } from "jotai";

export default function Result({
  atom,
  label,
}: {
  atom: Atom<number[]>;
  label: string;
}) {
  const result = useAtomValue(atom);
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <output className="mt-1 p-2 border rounded-md">{result[0]}</output>
    </div>
  );
}
