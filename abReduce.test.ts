// We are given a string S of length N consisting of only letters 'A' and/or 'B'. Our goal is to obtain a string of format "A..AB..B" (all letters 'A' occur before all letter 'B') by deleting some letters from S. In particular string consisting only of letters 'A' or only letters 'B' fit this format.
// Write a function:
// class Solution {public int solution(String S)}
// That, given a string S, returns the minimum number of letters that need to be deleted from S in order to obtain a string in the above format.

// Examples:
// Given S="BAAABAB", the function should return 2. We can obtain "AAABB" by deleting the first occurrence of B and last occurrence of A
// Given S="BBABAA", the function should return 3. We can delete all occurrences of 'A' or all occurrences of 'B'
// Given S="AABBBB", the function should return 0. We do not have to delete any letters because string is in expected format
// Write an efficient algorithm with the following assumption:
// N is an integer within the range [1..100,000]S is a string made of only characters 'A' and / or 'B'

import { expect, test } from "@jest/globals";
import { solution } from "./abReduce";

describe("minimum deletions to get 'A...AB...B'", () => {
  // --- Examples from the problem description ---
  test('should return 2 for "BAAABAB"', () => {
    // To get "AAABB", delete B at index 0 and A at index 5. Total 2.
    expect(solution("BAAABAB")).toBe(2);
  });

  test('should return 3 for "BBABAA"', () => {
    // To get "BBB", delete all three 'A's. Total 3.
    // To get "AAA", delete all three 'B's. Total 3.
    expect(solution("BBABAA")).toBe(3);
  });

  test('should return 0 for "AABBBB"', () => {
    // Already in the correct format.
    expect(solution("AABBBB")).toBe(0);
  });

  // --- Edge Cases ---
  test('should return 0 for a string with only "A"s: "AAAAA"', () => {
    expect(solution("AAAAA")).toBe(0);
  });

  test('should return 0 for a string with only "B"s: "BBBBB"', () => {
    expect(solution("BBBBB")).toBe(0);
  });

  test('should return 1 for a single misplaced B: "AAABAAA"', () => {
    // Just delete the single 'B'.
    expect(solution("AAABAAA")).toBe(1);
  });

  test('should return 1 for a single misplaced A: "BBBABBB"', () => {
    // Just delete the single 'A'.
    expect(solution("BBBABBB")).toBe(1);
  });

  test('should return 0 for a single character "A"', () => {
    expect(solution("A")).toBe(0);
  });

  test('should return 0 for a single character "B"', () => {
    expect(solution("B")).toBe(0);
  });

  // --- More Complex Cases ---
  test('should handle alternating pattern: "ABABAB"', () => {
    // To get "AAB": split "AB|ABAB". Delete B at 1, A at 2, A at 4 -> 3 deletions.
    // To get "ABB": split "A|BABAB". Delete A at 2, A at 4 -> 2 deletions.
    // This is the minimum.
    expect(solution("ABABAB")).toBe(2);
  });

  test('should handle reversed pattern: "BBBAAA"', () => {
    // Option 1: Delete all 'B's -> 3 deletions.
    // Option 2: Delete all 'A's -> 3 deletions.
    // Minimum is 3.
    expect(solution("BBBAAA")).toBe(3);
  });

  test('should handle a more mixed case: "BBAAABBAA"', () => {
    // Keep "AAAAA", delete four 'B's. Total 4.
    // Keep "BBBB", delete five 'A's. Total 5.
    // The minimum is 4.
    expect(solution("BBAAABBAA")).toBe(4);
  });

  // --- Performance Tests (using long strings) ---
  test("should perform efficiently on a long alternating string", () => {
    const S = "AB".repeat(50000); // Length 100,000
    // The optimal solution is to split after the first 'A',
    // keeping that 'A' and all subsequent 'B's.
    // This requires deleting the 49,999 other 'A's.
    expect(solution(S)).toBe(49999);
  });

  test("should perform efficiently on a long string that is almost correct", () => {
    const S = "A".repeat(50000) + "B" + "A".repeat(49999); // Length 100,000
    // Just delete the one 'B'.
    expect(solution(S)).toBe(1);
  });

  test("should perform efficiently on a long reversed string", () => {
    const S = "B".repeat(50000) + "A".repeat(50000); // Length 100,000
    // Delete all 50,000 'A's or all 50,000 'B's.
    expect(solution(S)).toBe(50000);
  });
});
