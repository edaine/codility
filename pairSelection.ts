export function solution(N: number[]): number {
  if (N.length <= 1) return 0;

  const digitFrequencies = {
    start: new Array(10).fill(0),
    end: new Array(10).fill(0),
  };

  N.forEach((v) => {
    const sDigit = v.toString()[0];
    const eDigit = v.toString().at(-1);
    digitFrequencies.start[sDigit]++;
    if (eDigit !== undefined) digitFrequencies.end[eDigit]++;
  });

  let pairs = 0;
  for (let i = 1; i < 10; i++) {
    pairs += digitFrequencies.start[i] * digitFrequencies.end[i];
  }

  return pairs;

  // type PairInts = {
  //   [key: string]: number;
  // };
  // let pairs: PairInts = {};
  // const integerStringList = N.map((i) => i.toString());
  // integerStringList.forEach((s, x, a) => {
  //   if (x + 1 < a.length) {
  //     a.slice(x + 1).forEach((v) => {
  //       if (s.at(0) === v.at(-1))
  //         pairs[`${s},${v}`] = (pairs[`${s},${v}`] ?? 0) + 1;
  //       if (s.at(-1) === v.at(0))
  //         pairs[`${s},${v}`] = (pairs[`${s},${v}`] ?? 0) + 1;
  //     });
  //   }
  // });

  // return Object.values(pairs).reduce((sum, v) => {
  //   return sum + v;
  // }, 0);
}
