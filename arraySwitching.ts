export function solution(A: number[]): number {
  if (A.length === 1) return 1;

  let maxSwitchingSlice = 0;
  let evenRepeat: number;
  let oddRepeat: number;
  let repeatStart = 0;
  let repeatEnd = 0;
  A.forEach((value, index) => {
    if (index % 2 === 0) {
      if (evenRepeat === undefined) {
        evenRepeat = value;
        repeatStart = index;
      }

      if (value === evenRepeat) {
        repeatEnd = index;
        maxSwitchingSlice = Math.max(
          ...[maxSwitchingSlice, repeatEnd - repeatStart + 1]
        );
      } else {
        evenRepeat = value;
        repeatStart = repeatEnd;
        repeatEnd = index;
      }
    } else {
      if (oddRepeat === undefined) {
        oddRepeat = value;
      }

      if (value === oddRepeat) {
        repeatEnd = index;
        maxSwitchingSlice = Math.max(
          ...[maxSwitchingSlice, repeatEnd - repeatStart + 1]
        );
      } else {
        oddRepeat = value;
        repeatStart = repeatEnd;
        repeatEnd = index;
      }
    }
  });

  return maxSwitchingSlice;
}
