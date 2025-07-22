// You are given a string S made of N digits that represents a positive integer.
// Among all positive integers smaller than S, find the one with the maximum possible sum of digits.
// Write a function:
// class Solution { public String solution (String S ) ; }
// that, given a string S, returns a string representing a positive integer smaller than S with the maximum possible sum of digits. If there i s more than one such integer, return
// any of them. The returned string can only consist of digits and may not contain leading zeros.
// Examples:
// 1. Given S = "899", one of the possible correct answers is "898".
// 2. Given S = "10", the only possible correct answer is "g".
// 3. Given S = "98", the only possible correct answer is "89".
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range [2..100,000);
// • string S is made only of digits (0-9);

import { expect, test } from "@jest/globals";
import { solution } from "./sumDigits";

describe("solution for max digit sum smaller than S", () => {
  // --- Examples from the problem description ---
  test('should return "799" for S = "899"', () => {
    expect(solution("899")).toBe("898");
  });

  test('should return "9" for S = "10"', () => {
    // Decrementing the '1' gives '09', which becomes "9".
    expect(solution("10")).toBe("9");
  });

  test('should return "89" for S = "98"', () => {
    // Decrementing '9' gives '8', and the rest become '9's.
    expect(solution("98")).toBe("89");
  });

  // --- Edge Cases ---
  test('should handle the smallest two-digit number: "11"', () => {
    // Decrementing '1' gives '0', rest become '9'. Result is "9".
    expect(solution("11")).toBe("9");
  });

  // --- Logic and Pattern Cases ---
  test('should handle a number with a zero in the middle: "504"', () => {
    // Change '5' to '4', rest become '9's.
    expect(solution("504")).toBe("499");
  });

  test('should handle a number like "1000"', () => {
    // Decrement '1' to '0', rest become '9's. Result is "999".
    expect(solution("1000")).toBe("999");
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long string starting with 9", () => {
    const S = "9" + "0".repeat(99998); // A 9 followed by 99,998 zeros
    const expected = "8" + "9".repeat(99998);
    expect(solution(S)).toBe(expected);
  });

  test("should perform efficiently on a long string starting with 1", () => {
    const S = "1" + "0".repeat(99998); // A 1 followed by 99,998 zeros
    const expected = "9".repeat(99998);
    expect(solution(S)).toBe(expected);
  });
});
