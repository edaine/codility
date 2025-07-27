export function solution(S: string): number {
  if (S.length === 1) return 0;

  const charCount = new Map<string, number>();

  for (const c of S) {
    const count = charCount.get(c) ?? 0;
    charCount.set(c, count + 1);
  }

  const oddLetters = Array.from(charCount.values()).filter(
    (count) => count % 2 !== 0
  ).length;

  return oddLetters > 1 ? oddLetters - 1 : 0;
}
