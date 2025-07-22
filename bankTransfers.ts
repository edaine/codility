export function solution(R: string, V: number[]): number[] {
  let deficitA = 0;
  let deficitB = 0;
  let balanceA = 0;
  let balanceB = 0;
  const iterator = V.entries();

  for (let entry of iterator) {
    const [index, value] = entry;
    // Sender is A
    if (R.at(index) === "B") {
      if (balanceA < value) {
        deficitA += Math.abs(balanceA - value);
        balanceA += Math.abs(balanceA - value);
      }
      balanceA -= value;
      balanceB += value;
    }
    // Sender is B
    else {
      if (balanceB < value) {
        deficitB += Math.abs(balanceB - value);
        balanceB += Math.abs(balanceB - value);
      }
      balanceB -= value;
      balanceA += value;
    }
  }

  return [deficitA, deficitB];
}
