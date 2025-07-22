// There is an array numbers made of N integers. Each number has at least 2 digits and first and last digits are different.You can select a number of pairs if the last digit of the first selected number is the same as the first digit of the second selected number.calculate teh number of ways in which such a pir can be selected.
// Write a java function :
// class solution {public int solution(int[] numbers);}
// that given an array numbers made of N integers,returns the number of ways to select a pair of numbers as described above .
// Examples:
// Given numbers =[30,12,29,91], the function should return 3 . the pairs are :(12,29),(29,91),(91,12)

import { expect, test } from "@jest/globals";
import { solution } from "./pairSelection";

describe("solution for number of pairs", () => {
  // --- Example from the problem description ---
  test("should return 3 for numbers = [30, 12, 29, 91]", () => {
    // Pairs: (12, 29), (29, 91), (91, 12)
    expect(solution([30, 12, 29, 91])).toBe(3);
  });

  // --- Edge Cases ---
  test("should return 0 for an empty array", () => {
    expect(solution([])).toBe(0);
  });

  test("should return 0 for a single number", () => {
    // A number cannot pair with itself as its first and last digits are different.
    expect(solution([12])).toBe(0);
  });

  // --- Logic and Pattern Cases ---
  test("should return 0 when no pairs can be formed", () => {
    expect(solution([12, 34, 56, 78])).toBe(0);
  });

  test("should handle a full cycle of pairs", () => {
    // Pairs: (12,23), (23,34), (34,41), (41,12)
    expect(solution([12, 23, 34, 41])).toBe(4);
  });

  test("should handle many numbers ending with the same digit (many-to-one)", () => {
    // Pairs: (12,25), (32,25), (42,25)
    expect(solution([12, 32, 42, 25])).toBe(3);
  });

  test("should handle many numbers starting with the same digit (one-to-many)", () => {
    // Pairs: (12,23), (12,24), (12,25)
    expect(solution([12, 23, 24, 25])).toBe(3);
  });

  test("should handle a many-to-many case", () => {
    // 2 numbers end in 2, 2 numbers start in 2. Total pairs = 2 * 2 = 4.
    // (12,25), (12,26), (32,25), (32,26)
    expect(solution([12, 32, 25, 26])).toBe(4);
  });

  test("should handle duplicate numbers in the input array", () => {
    // Numbers ending in 1: two (the 21s). Numbers starting with 1: two (the 12s). Pairs = 2 * 2 = 4.
    // Numbers ending in 2: two (the 12s). Numbers starting with 2: two (the 21s). Pairs = 2 * 2 = 4.
    // Total = 4 + 4 = 8.
    expect(solution([12, 21, 12, 21])).toBe(8);
  });

  test("should handle multiple connections and duplicate numbers", () => {
    // Connections via digit '1': two '21's can pair with one '122' (2 pairs).
    // Connections via digit '2': one '122' can pair with three '2x' numbers (3 pairs).
    // Total = 2 + 3 = 5.
    const pairs = solution([122, 21, 21, 23]);
    expect(pairs).toEqual(5);
  });

  test("should handle large numbers with different digits", () => {
    // Pairs: (10002, 200005), (98, 81), (81, 1...)
    const pairs = solution([10002, 200005, 98, 81]);
    expect(pairs).toEqual(3);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a large array", () => {
    // part1: 50k numbers starting with 1. Last digits 2-9 appear 6250 times each.
    const part1 = Array.from({ length: 50000 }, (_, i) => 10 + (i % 8) + 2);
    // part2: 50k numbers ending with 1. First digits 2-9 appear 6250 times each.
    const part2 = Array.from(
      { length: 50000 },
      (_, i) => ((i % 8) + 2) * 10 + 1
    );
    const numbers = [...part1, ...part2];

    // Pairs via digit 1: 50000 * 50000 = 2,500,000,000
    // Pairs via digits 2-9: 8 * (6250 * 6250) = 312,500,000
    // Total: 2,812,500,000
    expect(solution(numbers)).toBe(2812500000);
  });
});
