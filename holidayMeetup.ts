export function solution(P: number[], S: number[]): number {
  let minCars: number[] = [];
  const sortedCapacity = S.sort((a, b) => b - a);
  let totalPassengers = P.reduce((acc, x) => acc + x, 0);

  for (let k = 0; totalPassengers > 0 && k < P.length; k++) {
    const passengers =
      sortedCapacity[k] <= totalPassengers
        ? sortedCapacity[k]
        : totalPassengers;
    minCars.push(passengers);
    totalPassengers -= passengers;
  }

  return minCars.length;
}
