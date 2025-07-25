// Write a function solution that, given two integers A and B, returns a string containing exactly A letters 'a' and exactly B letters 'b' with no three consecutive letters being the same (in other words, neither "aaa" nor "bbb" may occur in the returned string).

// Examples:

// 1. Given A = 5 and B = 3, your function may return "aabaabab". Note that "abaabbaa" would also be a correct answer. Your function may return any correct answer.

// 2. Given A = 3 and B = 3, your function should return "ababab", "aababb", "abaabb" or any of several other strings.

// 3. Given A = 1 and B = 4, your function should return "bbabb", which is the only correct answer in this case.

// Assume that:

// A and B are integers within the range [0..100];
// at least one solution exists for the given A and B.

import { expect, test } from "@jest/globals";
import { solution } from "./consecutiveAB";

describe("solution template", () => {
  // --- Examples from the problem description ---
  test("should return aabaabab", () => {
    expect(solution(5, 3)).toEqual("aabaabab");
  });

  test("should return ababab", () => {
    expect(solution(3, 3)).toEqual("aababb");
  });

  test("should return bbabb", () => {
    expect(solution(1, 4)).toEqual("bbabb");
  });

  test("should return aabaabaabaab", () => {
    expect(solution(8, 4)).toEqual("aabaabaabaab");
  });

  test("should return for max", () => {
    expect(solution(100, 100)).toEqual(
      new Array(200)
        .fill("")
        .map((_, index) => {
          return (index + 1) % 3 !== 0 ? "a" : "b";
        })
        .join("")
    );
  });
});
