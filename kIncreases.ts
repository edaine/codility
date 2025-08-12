export function solution(N: number, K: number): number {
  const MAX_DIGIT_VALUE = 9;
  const digits = N.toString()
    .split("")
    .map((v) => Number(v));

  for (let index = 0; index < digits.length; index++) {
    if (K === 0) break;

    if (MAX_DIGIT_VALUE === digits[index]) continue;

    const maxValueDiff =
      MAX_DIGIT_VALUE - digits[index] < K ? MAX_DIGIT_VALUE - digits[index] : K;
    digits[index] += maxValueDiff;
    K -= maxValueDiff;
  }

  return Number(digits.join(""));
}
