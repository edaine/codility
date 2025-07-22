export function solution(S: string): number {
  let maxMoves = 0;
  const input = S.split("");

  // B A N A N A
  let B = input.filter((c) => c === "B").length; // we need 1
  let A = input.filter((c) => c === "A").length; // we need 3
  let N = input.filter((c) => c === "N").length; // we need 2

  while (B >= 1 && A >= 3 && N >= 2) {
    maxMoves++;

    B--;
    A -= 3;
    N -= 2;
  }

  return maxMoves;
}
