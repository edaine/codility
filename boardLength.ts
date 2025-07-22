export function solution(A: number[]): number {
  let minLength = 1;
  const sortedPositions = A.sort((a, b) => a - b);
  const start = Math.min(...A);
  const end = Math.max(...A);
  const distance = end - start;

  for (let l = 1; l <= distance; l++) {
    let coveredDistance = start + l;
    // First board cannot be greater than the end
    if (coveredDistance > end) continue;

    const nextPosition = sortedPositions.findIndex((v) => v > coveredDistance);
    if (nextPosition !== -1 && sortedPositions[nextPosition] + l >= end) {
      minLength = l;
      break;
    }
  }

  return minLength;
}
