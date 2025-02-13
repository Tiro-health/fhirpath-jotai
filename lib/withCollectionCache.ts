import { atom } from "jotai";
import { Atom } from "jotai";

/**
 * Keeps track of a FHIRPath collection and returns previous collection when the collection nodes have not changed
 * @param targetAtom holding a collection (ie. an array of FHIRPath nodes)
 * @param limit the maximum number of history states to keep
 * @returns an atom with an array of history states
 */
export default function withCollectionCache<T extends unknown[]>(
  targetAtom: Atom<T>
) {
  // Create a reference atom to keep track of the previous collection
  const refAtom = atom(
    () => ({ previous: null as T | null }),
    (get) => () => void (get(refAtom).previous = null)
  );
  refAtom.debugPrivate = true;
  // Return an atom that returns the previous collection when the collection nodes have not changed
  const cachedAtom = atom((get) => {
    const ref = get(refAtom);
    const current = get(targetAtom);
    const previous = ref.previous;
    // Return the previous collection if previous is not null and the collection nodes have not changed
    if (previous && shallowEqual(current, previous)) return previous;
    return (ref.previous = current); // Update the previous collection and return the current collection
  });
  cachedAtom.debugPrivate = true;
  return cachedAtom;
}

/*
 * Compare elements of two arrays to see if they are equal
 * @param a
 * @param b
 */
function shallowEqual(a: unknown[], b: unknown[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}
