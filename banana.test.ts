// A string S made of uppercase English letters is given. In one move, six letters forming the word
// "BANANA" (one 'B', three 'A's and two 'N's) can be deleted from S. What is the maximum number times such a move can be applied to S?
// Write a function:
// def solution (S)
// that, given a string S of length N, returns the maximum number of moves that can be applied.
// Examples:
// 1. Given S = "NAABXXAN", the function should return 1.
// NAABXXAN → XX
// 2. Given S = "NAANAAXNABABYNNBZ", the function should return 2.
// NAANAAXNABABYNNBZ → NAAXNABYNBZ → XBYNZ
// 3. Given S = "QABAAAWOBL", the function should return 0.
// QABAAAWOBL
// Write an efficient algorithm for the following assumptions:
// • Nis an integer within the range [1..100,000);
// • string S is made only of uppercase letters (A-Z).

import { expect, test } from "@jest/globals";
import { solution } from "./banana";

describe('solution for "BANANA" moves', () => {
  // --- Examples from the problem description ---
  test('should return 1 for "NAABXXAN"', () => {
    // Counts: B:1, A:3, N:2.
    // Moves possible: B->1, A->floor(3/3)=1, N->floor(2/2)=1. Min is 1.
    expect(solution("NAABXXAN")).toBe(1);
  });

  test('should return 2 for "NAANAAXNABABYNNBZ"', () => {
    // Counts: B:2, A:6, N:4.
    // Moves possible: B->2, A->floor(6/3)=2, N->floor(4/2)=2. Min is 2.
    expect(solution("NAANAAXNABABYNNBZ")).toBe(2);
  });

  test('should return 0 for "QABAAAWOBL"', () => {
    // Counts: B:2, A:4, N:0.
    // Moves possible: B->2, A->floor(4/3)=1, N->floor(0/2)=0. Min is 0.
    expect(solution("QABAAAWOBL")).toBe(0);
  });

  // --- Edge Cases ---
  test("should return 0 for an empty string", () => {
    expect(solution("")).toBe(0);
  });

  test("should return 0 for a string with no relevant letters", () => {
    expect(solution("QWERTYUIOP")).toBe(0);
  });

  // --- Limiting Factor Cases ---
  test("should return 0 when missing just one letter type (e.g., N)", () => {
    // Has enough B and A for one move, but no N.
    expect(solution("BAAA")).toBe(0);
  });

  test("should be limited by the count of B", () => {
    // String has only 1 'B', but enough 'A's and 'N's for 5 moves.
    const S = "B" + "AAA".repeat(5) + "NN".repeat(5);
    // Counts: B:1, A:15, N:10.
    // Moves: B->1, A->5, N->5. Min is 1.
    expect(solution(S)).toBe(1);
  });

  test("should be limited by the count of A", () => {
    // String has only 5 'A's, limiting moves to floor(5/3)=1.
    const S = "B".repeat(10) + "AAAAA" + "N".repeat(20);
    // Counts: B:10, A:5, N:20.
    // Moves: B->10, A->1, N->10. Min is 1.
    expect(solution(S)).toBe(1);
  });

  test("should be limited by the count of N", () => {
    // String has only 3 'N's, limiting moves to floor(3/2)=1.
    const S = "B".repeat(10) + "A".repeat(30) + "NNN";
    // Counts: B:10, A:30, N:3.
    // Moves: B->10, A->10, N->1. Min is 1.
    expect(solution(S)).toBe(1);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long string forming many BANANAs", () => {
    const S = "BANANA".repeat(15000); // Length 90,000
    // Should be able to make exactly 15,000 moves.
    expect(solution(S)).toBe(15000);
  });

  test("should perform efficiently on a long string with no BANANAs", () => {
    const S = "X".repeat(100000);
    expect(solution(S)).toBe(0);
  });

  test("should perform efficiently on a long string with a single limiting factor", () => {
    // A huge number of A's and N's, but only one B.
    const S = "B" + "A".repeat(50000) + "N".repeat(49999);
    expect(solution(S)).toBe(1);
  });
});
