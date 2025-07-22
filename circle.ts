export function solution(A: number[]): number {
  let evenPairs: string[] = [];

  let nextIndex = 0;
  for (let i = 0; i + 1 < A.length; i = nextIndex) {
    const rightNeighbour = A[i + 1];
    if ((A[i] + rightNeighbour) % 2 === 0) {
      evenPairs.push(`(${A[i]}, ${rightNeighbour})`);
      nextIndex = i + 2;
      continue;
    }

    const leftNeigbour = A.at(i - 1);
    if (leftNeigbour !== undefined) {
      if ((A[i] + leftNeigbour) % 2 === 0) {
        evenPairs.push(`(${A[i]}, ${leftNeigbour})`);
        nextIndex = i + 1;
        continue;
      }
    }

    nextIndex++;
  }

  return evenPairs.length;
}
