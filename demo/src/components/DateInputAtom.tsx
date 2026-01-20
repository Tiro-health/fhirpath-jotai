import { useAtom } from "jotai";
import { PrimitiveAtom } from "jotai";

export default function DateInputAtom<TValue extends string | undefined>({
  label,
  atom,
}: {
  label: string;
  atom: PrimitiveAtom<TValue>;
}) {
  const [value, setValue] = useAtom(atom);
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type="date"
        className="mt-1 p-2 border rounded-md"
        value={value ?? ""}
        onChange={(e) => setValue(e.target.value as TValue)}
      />
    </div>
  );
}
