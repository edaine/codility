export function solution(A: number[]): number {
  let listLength = 0;
  let nextNode = A[0];

  do {
    listLength++;
    if (nextNode === -1) break;
    nextNode = A[nextNode];
  } while (true);

  return listLength;
}
