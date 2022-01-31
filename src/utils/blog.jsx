/*
 * https://en.wikipedia.org/wiki/Jaccard_index
 * https://itnext.io/string-similarity-the-basic-know-your-algorithms-guide-3de3d7346227
 */
export function jaccardIndexCompareTwoStrings(first, second) {
  if (!first || !second) {
    return undefined;
  }
  first = first.replace(/\s+/g, "");
  second = second.replace(/\s+/g, "");

  /* Cases
   * one of them is empty
   * both are empty
   * identical
   * both length 1
   * either length 1
   */
  if (!first.length || !second.length) return 0;
  if (!first.length && !second.length) return 1;
  if (first === second) return 1;
  if (first.length === 1 && second.length === 1) return 0;
  if (first.length < 2 || second.length < 2) return 0;

  const firstMap = new Map();

  // create tokens for adjacent letters
  for (let i = 0; i < first.length - 1; i++) {
    const token = first.substring(i, i + 2);
    const count = firstMap.has(token) ? firstMap.get(token) + 1 : 1;
    firstMap.set(token, count);
  }

  // get intersection size
  let intersectionSize = 0;
  for (let i = 0; i < second.length - 1; i++) {
    const token = second.substring(i, i + 2);

    /* if firstMap has this token == intersects
     *  remove it from map
     *  increment intersection size
     */
    const count = firstMap.has(token) ? firstMap.get(token) : 0;
    if (count > 0) {
      firstMap.set(token, count - 1);
      intersectionSize++;
    }
  }

  return (
    intersectionSize / (first.length + second.length - 2 - intersectionSize)
  );
}
