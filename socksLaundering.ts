export function solution(K: number, C: number[], D: number[]): number {
  const M = D.length;

  let cleanSocks = new Map<number, number>();
  let cleanPairs = new Map<number, number>();
  let missingPairs = new Map<number, number>();
  for (const colour of C) {
    cleanSocks.set(colour, (cleanSocks.get(colour) ?? 0) + 1);
    cleanPairs.set(colour, Math.floor((cleanSocks.get(colour) ?? 0) / 2));
    missingPairs.set(colour, (cleanSocks.get(colour) ?? 0) % 2);
  }

  let laundered = 0;
  let dirtySocks = new Map<number, number>();
  for (let i = 0; i < M && laundered < K; i++) {
    const colour = D[i];
    if ((missingPairs.get(colour) ?? 0) > 0) {
      cleanPairs.set(colour, (cleanPairs.get(colour) ?? 0) + 1);
      missingPairs.set(colour, 0);
      laundered++;
    } else {
      dirtySocks.set(colour, (dirtySocks.get(colour) ?? 0) + 1);
      if ((dirtySocks.get(colour) ?? 0) % 2 === 0 && laundered + 2 <= K) {
        cleanPairs.set(colour, (cleanPairs.get(colour) ?? 0) + 1);
        laundered += 2;
      }
    }
  }

  const maxPairs = Array.from(cleanPairs.values()).reduce(
    (acc, v) => acc + v,
    0
  );
  return maxPairs;
}
