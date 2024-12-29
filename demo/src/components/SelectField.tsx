import { useAtom } from "jotai";
import { PrimitiveAtom } from "jotai";

export default function SelectField<TValue extends string | undefined>({
  label,
  atom,
  children,
}: React.PropsWithChildren<{
  label: string;
  atom: PrimitiveAtom<TValue>;
}>) {
  const [value, setValue] = useAtom(atom);
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select
        className="mt-1 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        value={value}
        onChange={(e) => setValue(e.target.value as TValue)}
      >
        {children}
      </select>
    </div>
  );
}
