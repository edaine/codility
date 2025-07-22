export function solution(A: number, B: number): number {
  const combinedLength = A + B;
  let sideLength = Math.floor(combinedLength / 4);
  let sideCount = Math.floor(A / sideLength) + Math.floor(B / sideLength);

  while (sideLength > 0 && sideCount < 4) {
    sideLength--;
    sideCount = Math.floor(A / sideLength) + Math.floor(B / sideLength);
  }

  return sideLength;
}
