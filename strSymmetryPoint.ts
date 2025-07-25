export function solution(S: string): number {
  const mid = Math.floor(S.length / 2);
  const left = S.slice(0, mid);
  const right = S.slice(mid + 1);

  if (left === right.split("").reverse().join("")) return mid;

  return -1;
}
