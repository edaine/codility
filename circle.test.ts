// You are given N numbers on a circle, described by an array A. Find the maximum number of neighbouring pairs whose sums are even. One element can belong to only one pair.
// Write a function:
// class Solution { public int solution(int[] A): }
// that, given an array A consisting of N integers, returns the maximum number of neighbouring pairs whose sums are even.
// Examples:
// 1. Given A = [4, 2, 5, 8, 7, 3, 7], the function should return 2. We can create
// two pairs with even sums: (A[0), A[1]) and (A[4), A[5]). Another way to choose two pairs is: (A[O), A[1]) and (A[5), A[6)).

// 2. Given A = [14, 21, 16, 35, 22], the function should return 1. There is only one qualifying pair: (A[O), A[4)).

import { expect, test } from "@jest/globals";
import { solution } from "./circle";

// Assuming your function is named 'solution' and is imported
// declare function solution(A: number[]): number;

describe("solution for max even-sum pairs on a circle", () => {
  // --- Examples from the problem description ---
  test("should return 2 for A = [4, 2, 5, 8, 7, 3, 7]", () => {
    // Parities: [0, 0, 1, 0, 1, 1, 1].
    // Can take (4,2) and (7,3). Total 2.
    // Or (4,2) and (3,7). Total 2.
    expect(solution([4, 2, 5, 8, 7, 3, 7])).toBe(2);
  });

  test("should return 1 for A = [14, 21, 16, 35, 22]", () => {
    // Parities: [0, 1, 0, 1, 0].
    // Only the circular pair (22, 14) has an even sum.
    expect(solution([14, 21, 16, 35, 22])).toBe(1);
  });

  // --- Edge Cases ---
  test("should return 0 for an empty array", () => {
    expect(solution([])).toBe(0);
  });

  test("should return 0 for a single-element array", () => {
    expect(solution([10])).toBe(0);
  });

  test("should return 1 for a two-element array with same parity", () => {
    expect(solution([2, 4])).toBe(1);
  });

  test("should return 0 for a two-element array with different parity", () => {
    expect(solution([2, 5])).toBe(0);
  });

  // --- Logic and Pattern Cases ---
  test("should return N/2 for an array of all even numbers", () => {
    // e.g., [2,4,6,8] -> pairs (2,4) and (6,8). Total 2.
    expect(solution([2, 4, 6, 8, 10, 12])).toBe(3);
  });

  test("should return N/2 for an array of all odd numbers", () => {
    // e.g., [1,3,5,7] -> pairs (1,3) and (5,7). Total 2.
    expect(solution([1, 3, 5, 7])).toBe(2);
  });

  test("should return 0 for a perfectly alternating array", () => {
    expect(solution([1, 2, 1, 2, 1, 2])).toBe(0);
  });

  test("should choose the linear scan when it is better", () => {
    // Parities: [0,0,1,1,0,0].
    // Linear scan finds 3 pairs: (2,2), (1,3), (4,4).
    // Circular option would give 1 + pairs in [0,1,1,0] -> 1 + 1 = 2.
    // Max is 3.
    expect(solution([2, 2, 1, 3, 4, 4])).toBe(3);
  });

  test("should choose the circular pair when it is better", () => {
    // Parities: [0,1,1,1,1,0].
    // Linear scan finds 2 pairs: (A[1],A[2]) and (A[3],A[4]).
    // Circular option: take (A[5],A[0]), then find pairs in [1,1,1,1], which is 2. Total 1+2=3.
    // Max is 3.
    expect(solution([2, 1, 1, 1, 1, 2])).toBe(3);
  });

  test("should handle an odd length array correctly", () => {
    // Parities: [1,1,0,1,1].
    // Linear: (A[0],A[1]) and (A[3],A[4]). Total 2.
    // Circular: (A[4],A[0]) + pairs in [1,0,1] -> 1+0=1.
    // Max is 2.
    expect(solution([1, 1, 2, 1, 1])).toBe(2);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long array of same-parity numbers", () => {
    const A = new Array(100000).fill(2);
    expect(solution(A)).toBe(50000);
  });

  test("should perform efficiently on a long alternating array", () => {
    const A: number[] = [];
    for (let i = 0; i < 50000; i++) {
      A.push(1, 2);
    }
    expect(solution(A)).toBe(0);
  });
});
