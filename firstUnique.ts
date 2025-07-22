export function solution(A: number[]): number {
  let firstUniqueValue = -1;
  const firstPositions = new Map<number, number>();
  const lastPositions = new Map<number, number>();

  for (let i = 0; i < A.length; i++) {
    firstPositions.set(A[i], firstPositions.get(A[i]) ?? i);
    lastPositions.set(A[i], i);
  }

  for (const key of Array.from(firstPositions.keys())) {
    if (lastPositions.get(key) === firstPositions.get(key)) {
      firstUniqueValue = key;
      break;
    }
  }

  return firstUniqueValue;
}
