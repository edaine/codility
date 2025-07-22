function recursiveSum(value: string, maxSum: number, maxValue: string) {
  if (!Number(value)) return maxValue;

  const workingSum = value
    .split("")
    .reduce((sum, x) => Number(sum) + Number(x), 0);

  if (workingSum > maxSum) {
    maxSum = workingSum;
    maxValue = value;
  }

  return recursiveSum((Number(value) - 1).toString(), maxSum, maxValue);
}

// export function solution(S: string): string {
//   return recursiveSum((Number(S) - 1).toString(), 0, "");
// }

export function solution(S: string): string {
  if (!S) return "0";

  const maxValue = (Number(S) - 1).toString();
  if (maxValue.length === 1) return maxValue;

  const maxValueSum = maxValue
    .split("")
    .reduce((sum, x) => Number(sum) + Number(x), 0);

  const leftMostDigit = Number(S.toString()[0]) - 1;
  const nextMaxValue = "".concat(
    leftMostDigit ? leftMostDigit.toString() : "",
    new Array(S.length - 1).fill("9").join("")
  );
  const nextMaxValueSum = nextMaxValue
    .split("")
    .reduce((sum, x) => Number(sum) + Number(x), 0);

  return maxValueSum >= nextMaxValueSum ? maxValue : nextMaxValue;
}
