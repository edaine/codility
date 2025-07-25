export function solution(A: number, B: number): string {
  let pattern = "";

  while (A > 0 || B > 0) {
    if (A >= B) {
      if (pattern.slice(-2) != "aa") {
        pattern += "a";
        A--;
      } else if (B > 0) {
        pattern += "b";
        B--;
      }
    } else {
      if (pattern.slice(-2) != "bb") {
        pattern += "b";
        B--;
      } else if (A > 0) {
        pattern += "a";
        A--;
      }
    }
  }

  return pattern;
}
