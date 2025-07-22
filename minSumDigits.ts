export function solution(N: number): number {
  if (N < 9) return N;

  for (let n = N; ; n++) {
    const workingSum = n
      .toString()
      .split("")
      .reduce((sum, x) => Number(sum) + Number(x), 0);

    if (workingSum === N) return n;
  }
}
