// Write a function solution that, given integer N, returns the smallest nonnegative integer whose individual digits sum to N.
// Examples:
// 1. Given N = 16, the function should return 79. There are many numbers
// whose digits sum to 16 (for example: 79, 97, 808, 5551, 22822, etc.). The smallest such number is 79.
// 2. Given N = 19, the function should return 199 (the sum of digits is 1 + 9 + 9 = 19).
// 3. Given N = 7, the function should return 7.
// Assume that:
// • Nis an integer within the range [0..50).

import { expect, test } from "@jest/globals";
import { solution } from "./minSumDigits";

describe("solution for smallest number with digit sum N", () => {
  // --- Examples from the problem description ---
  test("should return 79 for N = 16", () => {
    // 16 = 9 + 7. To make the number smallest, it must be 79.
    expect(solution(16)).toBe(79);
  });

  test("should return 199 for N = 19", () => {
    // 19 = 9 + 9 + 1. The smallest number is 199.
    expect(solution(19)).toBe(199);
  });

  test("should return 7 for N = 7", () => {
    // The number is just 7.
    expect(solution(7)).toBe(7);
  });

  // --- Edge Cases ---
  test("should return 0 for N = 0", () => {
    expect(solution(0)).toBe(0);
  });

  test("should return 1 for N = 1", () => {
    expect(solution(1)).toBe(1);
  });

  test("should return 9 for N = 9", () => {
    expect(solution(9)).toBe(9);
  });

  // --- Logic and Boundary Cases ---
  test("should return 19 for N = 10", () => {
    // 10 = 9 + 1. Smallest number is 19.
    expect(solution(10)).toBe(19);
  });

  test("should return 99 for N = 18", () => {
    // 18 = 9 + 9.
    expect(solution(18)).toBe(99);
  });

  test("should return 899 for N = 26", () => {
    // 26 = 9 + 9 + 8.
    expect(solution(26)).toBe(899);
  });

  test("should return 999 for N = 27", () => {
    // 27 = 9 + 9 + 9.
    expect(solution(27)).toBe(999);
  });

  // --- Test near the maximum constraint ---
  test("should return 59999 for N = 41", () => {
    // 41 = 9 + 9 + 9 + 9 + 5.
    expect(solution(41)).toBe(59999);
  });

  test("should return 99999 for N = 45", () => {
    // 45 = 9 + 9 + 9 + 9 + 9.
    expect(solution(45)).toBe(99999);
  });

  test("should return 499999 for N = 49", () => {
    // 49 = 9 + 9 + 9 + 9 + 9 + 4.
    expect(solution(49)).toBe(499999);
  });
});
