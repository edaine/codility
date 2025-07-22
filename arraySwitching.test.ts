// We call an array switching if all numbers in even positions are equal and all numbers in odd positions are equal.
// For example:
// [3, -7, 3, -7, 3] and [4, 4, 4, 4] are switching,
// but [5, 5, 4, 5] and [-3, 2, 3] are not switching.
// What is the length of the longest switching slice (continuous fragment) in a given array A?
// Write a function:
// class Solution { public int solution(int[] A); }
// that, given an array A consisting of N integers, returns the length of the longest switching slice in A.
// Examples:
// Given A = [3, 2, 3, 2, 3], the function should return 5, because the whole array is switching.
// Given A = [7, 4, -2, 4, -2, -9], the function should return 4.
//  The longest switching slice is [4, -2, 4, -2].
// Given A = [7, -5, -5, -5, 7, -1, 7], the function should return 3.
//  There are two switching slices of equal length: [-5, -5, -5] and [7, -1, 7].
// Given A = [4], the function should return 1.
//  A single-element slice is also a switching slice.

import { expect, test } from "@jest/globals";
import { solution } from "./arraySwitching";

describe("solution for longest switching slice", () => {
  // --- Examples from the problem description ---
  test("should return 5 for a fully switching array: [3, 2, 3, 2, 3]", () => {
    expect(solution([3, 2, 3, 2, 3])).toBe(5);
  });

  test("should return 4 for [7, 4, -2, 4, -2, -9]", () => {
    // The longest slice is [4, -2, 4, -2].
    expect(solution([7, 4, -2, 4, -2, -9])).toBe(4);
  });

  test("should return 3 for [7, -5, -5, -5, 7, -1, 7]", () => {
    // Slices are [-5, -5, -5] and [7, -1, 7].
    expect(solution([7, -5, -5, -5, 7, -1, 7])).toBe(3);
  });

  test("should return 1 for a single-element array: [4]", () => {
    expect(solution([4])).toBe(1);
  });

  // --- Edge Cases ---
  test("should return 0 for an empty array", () => {
    expect(solution([])).toBe(0);
  });

  test("should return 2 for a two-element array: [5, 10]", () => {
    expect(solution([5, 10])).toBe(2);
  });

  test("should return 5 for an array where all elements are the same: [4, 4, 4, 4, 4]", () => {
    // This is a valid switching slice.
    expect(solution([4, 4, 4, 4, 4])).toBe(5);
  });

  // --- Pattern and Logic Cases ---
  test("should handle when the longest slice is at the beginning", () => {
    const A = [1, 2, 1, 2, 1, 8, 9, 8];
    // Slice is [1, 2, 1, 2, 1] (length 5).
    expect(solution(A)).toBe(5);
  });

  test("should handle when the longest slice is at the end", () => {
    const A = [1, 2, 1, 5, 4, 5, 4, 5];
    // Slice is [5, 4, 5, 4, 5] (length 5).
    expect(solution(A)).toBe(5);
  });

  test("should return 2 if no slice is longer than 2", () => {
    const A = [1, 2, 3, 4, 5, 6];
    // Every adjacent pair is a switching slice of length 2.
    expect(solution(A)).toBe(2);
  });

  test("should handle a pattern break at the very end", () => {
    const A = [1, 2, 1, 2, 1, 2, 5];
    // The slice [1, 2, 1, 2, 1, 2] has length 6.
    expect(solution(A)).toBe(6);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long, perfectly switching array", () => {
    const A: number[] = [];
    for (let i = 0; i < 50000; i++) {
      A.push(0, 1);
    } // Array of [0, 1, 0, 1, ...] with length 100,000
    expect(solution(A)).toBe(100000);
  });

  test("should perform efficiently on a long array of identical numbers", () => {
    const A = new Array(100000).fill(7);
    expect(solution(A)).toBe(100000);
  });

  test("should perform efficiently when the pattern breaks in the middle", () => {
    const firstHalf: number[] = [];
    for (let i = 0; i < 25000; i++) {
      firstHalf.push(0, 1);
    } // Length 50,000
    const secondHalf: number[] = [];
    for (let i = 0; i < 25000; i++) {
      secondHalf.push(8, 9);
    } // Length 50,000
    const A = [...firstHalf, ...secondHalf];
    // Both halves are switching slices of length 50,000.
    expect(solution(A)).toBe(50000);
  });
});
