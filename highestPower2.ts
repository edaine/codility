function findHighestPower(N: number, maxPower: number, power: number): number {
  if (Math.pow(2, power) > N) return maxPower;

  if (N % Math.pow(2, power) === 0) maxPower = power;

  return findHighestPower(N, maxPower, power + 1);
}

export function solution(N: number): number {
  if (N % 2 === 1) return 0;

  return findHighestPower(N, 0, 0);
}
