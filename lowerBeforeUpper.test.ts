// You are given a string letters made of N English letters. Count the number of different letters that appear in both uppercase and lowercase where all lowercase occurrences of the given letter appear before any uppercase occurrence. For example, for letters = "aaAbcCABBc" the answer is 2. The condition is met for letters 'a' and 'b', but not for 'c'. Write a function: class Solution { public int solution(String letters);} that, given a string letters, returns the number of different letters fulfilling the conditions above. Examples:
// Given letters = "aaAbcCABBc", the function should return 2, as explained above.
// Given letters = "xyzXYZabcABC", the function should return 6.
// Given letters = "ABCabcAefG", the function should return 0. Write an efficient algorithm for the following assumptions: • N is an integer within the range [1.. 100,000]; • string letters is made only of letters (a-z and/or A-Z).

import { expect, test } from "@jest/globals";
import { solution } from "./lowerBeforeUpper";

describe("solution for ordered case-sensitive letters", () => {
  // --- Examples from the problem description ---
  test('should return 2 for "aaAbcCABBc"', () => {
    // 'a' is valid (last 'a' at index 1 < first 'A' at index 2).
    // 'b' is valid (last 'b' at index 3 < first 'B' at index 7).
    // 'c' is not (last 'c' at index 9 > first 'C' at index 5).
    expect(solution("aaAbcCABBc")).toBe(2);
  });

  test('should return 6 for "xyzXYZabcABC"', () => {
    // All letters 'x', 'y', 'z', 'a', 'b', 'c' appear in both cases, correctly ordered.
    expect(solution("xyzXYZabcABC")).toBe(6);
  });

  test('should return 0 for "ABCabcAefG"', () => {
    // For 'a', 'b', 'c', the uppercase appears before the lowercase.
    // 'e', 'f', 'G' do not appear in both cases.
    expect(solution("ABCabcAefG")).toBe(0);
  });

  // --- Edge Cases ---
  test("should return 0 for a string with only lowercase letters", () => {
    expect(solution("lowercase")).toBe(0);
  });

  test("should return 0 for a string with only uppercase letters", () => {
    expect(solution("UPPERCASE")).toBe(0);
  });

  test('should return 1 for a simple valid case "aA"', () => {
    expect(solution("aA")).toBe(1);
  });

  test('should return 0 for a simple invalid case "Aa"', () => {
    expect(solution("Aa")).toBe(0);
  });

  // --- Logic and Pattern Cases ---
  test('should return 3 for a perfectly ordered string "aAbBcC"', () => {
    expect(solution("aAbBcC")).toBe(3);
  });

  test("should handle interleaved but valid ordering", () => {
    // 'a' is invalid (last 'a' at 3 > first 'A' at 2).
    // 'b' is valid (last 'b' at 1 < first 'B' at 4).
    expect(solution("abAaB")).toBe(1);
  });

  test("should handle interleaved invalid ordering", () => {
    // 'a' is valid (last 'a' at 0 < first 'A' at 2).
    // 'b' is invalid (last 'b' at 3 > first 'B' at 1).
    expect(solution("aBAb")).toBe(1);
  });

  test("should handle a single valid letter among many others", () => {
    // Only 'x' is valid (last 'x' at 0 < first 'X' at 8).
    expect(solution("xBCdefgX")).toBe(1);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long, valid string", () => {
    const lower = "a".repeat(50000);
    const upper = "A".repeat(50000);
    expect(solution(lower + upper)).toBe(1);
  });

  test("should perform efficiently on a long, invalid string", () => {
    const lower = "a".repeat(50000);
    const upper = "A".repeat(50000);
    expect(solution(upper + lower)).toBe(0);
  });

  test("should perform efficiently on a long, mixed string", () => {
    const part1 = "a".repeat(25000) + "b".repeat(25000);
    const part2 = "A".repeat(25000) + "B".repeat(25000);
    // Both 'a' and 'b' are valid.
    expect(solution(part1 + part2)).toBe(2);
  });
});
