// Write a function solution that, given a string S consisting on N letters 'a' and/or 'b' returns true when all occurrences of 'a' are before all occurrences of letter 'b' and returns false otherwise.
// Examples:
// Given S="aabbb", the function should return true
// Given S="ba", the function should return false
// Given S="aaa", the function should return true. Note that 'b' does not need to occur in S
// Given S="b", the function should return true. Note that 'a' does not need to occur in S
// Given S="abba", the function should return false.
// Write an efficient algorithm with following assumptions:1. N is an integer within the range [1..300,000]2. String S is made only of the characters 'a' and/or'b'

import { expect, test } from "@jest/globals";
import { solution } from "./abSequenceCheck";

describe('solution for "all a before all b"', () => {
  // --- Examples from the problem description ---
  test('should return true for "aabbb"', () => {
    expect(solution("aabbb")).toBe(true);
  });

  test('should return false for "ba"', () => {
    expect(solution("ba")).toBe(false);
  });

  test('should return true for "aaa"', () => {
    // No 'b's exist, so the condition holds.
    expect(solution("aaa")).toBe(true);
  });

  test('should return true for "b"', () => {
    // No 'a's exist, so the condition holds.
    expect(solution("b")).toBe(true);
  });

  test('should return false for "abba"', () => {
    // An 'a' appears after a 'b'.
    expect(solution("abba")).toBe(false);
  });

  // --- Basic Valid Cases ---
  test('should return true for a single "a"', () => {
    expect(solution("a")).toBe(true);
  });

  test('should return true for "ab"', () => {
    expect(solution("ab")).toBe(true);
  });

  test('should return true for "bbbb"', () => {
    expect(solution("bbbb")).toBe(true);
  });

  // --- Basic Invalid Cases ---
  test('should return false for "bab"', () => {
    expect(solution("bab")).toBe(false);
  });

  test('should return false for "bba"', () => {
    expect(solution("bba")).toBe(false);
  });

  test('should return false for a mix like "aaabbbaaa"', () => {
    expect(solution("aaabbbaaa")).toBe(false);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long valid string", () => {
    const S = "a".repeat(150000) + "b".repeat(150000); // N = 300,000
    expect(solution(S)).toBe(true);
  });

  test('should perform efficiently on a long string of only "a"s', () => {
    const S = "a".repeat(300000);
    expect(solution(S)).toBe(true);
  });

  test('should perform efficiently on a long string of only "b"s', () => {
    const S = "b".repeat(300000);
    expect(solution(S)).toBe(true);
  });

  test('should fail fast on a long string starting with "b"', () => {
    const S = "b" + "a".repeat(299999);
    expect(solution(S)).toBe(false);
  });

  test("should perform efficiently on a long string with a late failure", () => {
    const S = "a".repeat(299998) + "ba";
    expect(solution(S)).toBe(false);
  });
});
