export function solution(A: number[]): number {
  let minMoves = 0;
  let lastIndex = 0;

  for (let index = 0; index < A.length; index = lastIndex) {
    const searchValue = A[index];
    const occurrence = A.filter((v) => searchValue === v).length;
    lastIndex = A.lastIndexOf(searchValue) + 1;

    if (occurrence === searchValue) continue;

    minMoves += Math.min(Math.abs(searchValue - occurrence), occurrence);
  }

  return minMoves;
}
