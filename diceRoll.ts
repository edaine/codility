export function solution(A: number[], F: number, M: number): number[] {
  if (!F) {
    return [0];
  }

  const totalRolls = A.length + F;
  const sumAll = M * totalRolls;
  const sumF = sumAll - A.reduce((acc, x) => acc + x, 0);

  if (
    new Array(F).fill(1).reduce((acc, x) => acc + x, 0) > sumF ||
    new Array(F).fill(6).reduce((acc, x) => acc + x, 0) < sumF
  ) {
    return [0];
  }

  const baseValue = Math.floor(sumF / F);
  let remainder = sumF % F;
  let missingRolls = new Array(F).fill(baseValue);

  let index = 0;
  while (remainder > 0) {
    missingRolls[index]++;
    remainder--;
    index = index === F - 1 ? 0 : index + 1;
  }

  return missingRolls;
}
