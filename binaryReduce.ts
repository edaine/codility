export function solution(S: string): number {
  let steps = 0;

  if (S.length) {
    const firstOne = S.indexOf("1");
    const count = {
      msb: S[0],
      zeros: 0,
      ones: 0,
    };

    S.substring(firstOne)
      .split("")
      .forEach((b) => {
        if (b === "0") {
          count.zeros++;
        } else {
          count.ones++;
        }
      });

    steps = count.zeros + count.ones * 2 - 1;
  }

  return steps;
}
