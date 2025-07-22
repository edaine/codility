// Given the binary representation of an integer as a string s, return the number of steps to reduce it to 0 under the following rules:
// - If the current number is even, you have to divide it by 2.
// - If the current number is odd, you have to subtract 1 to it.

// It is guaranteed that you can always reach one for all test cases.

// Constraints:
// - 1 <= s.length <= 1,000,000
// - s consists of characters '0' or '1'
// - Binary representation is big endian, first character is the most the significant bit
// - s may contain leading zeroes
// - Needs to be efficient

import { expect, test } from "@jest/globals";
import { solution } from "./binaryReduce";

// Assuming your function is named 'solution' and is imported
// declare function solution(s: string): number;

describe("solution for binary reduction to zero", () => {
  test('should return 6 for s = "1101"', () => {
    // 3 ones, 1 zero. (3 * 2) + 1 - 1 = 6.
    expect(solution("1101")).toBe(6);
  });

  test('should return 1 for s = "10"', () => {
    // 1 one, 1 zero. (1 * 2) + 1 - 1 = 2. Wait.
    // 2 -> 1 -> 0. 2 steps.
    expect(solution("10")).toBe(2);
  });

  test('should return 1 for s = "1"', () => {
    // 1 -> 0. 1 step.
    // 1 one, 0 zeros. (1 * 2) + 0 - 1 = 1.
    expect(solution("1")).toBe(1);
  });

  // --- Logic and Pattern Cases ---
  test("should correctly handle leading zeros", () => {
    // Same as "1101" -> 6 steps.
    expect(solution("001101")).toBe(6);
  });

  test('should handle a power of two: s = "10000"', () => {
    // 1 one, 4 zeros. (1 * 2) + 4 - 1 = 5.
    // 16 -> 8 -> 4 -> 2 -> 1 -> 0. 5 steps.
    expect(solution("10000")).toBe(5);
  });

  test('should handle a number that is one less than a power of two: s = "1111"', () => {
    // 4 ones, 0 zeros. (4 * 2) + 0 - 1 = 7.
    // 15->14->7->6->3->2->1->0. 7 steps.
    expect(solution("1111")).toBe(7);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long string of ones", () => {
    const s = "1".repeat(1000000);
    // 1,000,000 ones. (1000000 * 2) - 1 = 1,999,999.
    expect(solution(s)).toBe(1999999);
  });

  test("should perform efficiently on a long string with many zeros", () => {
    const s = "1" + "0".repeat(999999);
    // 1 one, 999,999 zeros. (1 * 2) + 999999 - 1 = 1,000,000.
    expect(solution(s)).toBe(1000000);
  });
});
