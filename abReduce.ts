export function solution(S: string): number {
  const deleteAllA = S.split("").filter((c) => c === "A").length;
  const deleteAllB = S.split("").filter((c) => c === "B").length;

  const abMatches = S.match(/A+B/);
  let deleted = abMatches?.index || 0;

  const baSearch = S.substring(deleted).slice(
    S.substring(deleted).indexOf("B")
  );
  if (baSearch) {
    deleted += baSearch.split("").filter((c) => c === "A").length;
  }

  return Math.min(deleted, deleteAllA, deleteAllB);
}
