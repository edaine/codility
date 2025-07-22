// There are N holes arranged in a row in the top of an old table. We want to fix the table by covering the holes with two boards. For technical reasons, the boards need to be of the same length.
// The position of the K-th hole is A[K]. What is the shortest length of the boards required to cover all the holes? The length of the boards has to be a positive Integer. A board of length L, set at position X, covers all the holes located between positions X and X+L (inclusive). The position of every hole is unique.
// Write a function:
// class Solution { public int solution(int[] A): }
// which, given an array A of integers of length N, representing the positions of the holes in the table, returns the shortest board length required to cover all the holes.
// Examples:
// 1. Given A = [11, 20, 15], your function should return 4. The first board would
// cover the holes in positions 11 and 15, and the second board the hole at position 20.
// 2. Given A = [15, 20, 9, 11], your function should return 5. The first board
// covers the holes at positions 9 and 11, and the second one the holes in positions 15 and 20.
// 3. Given A = [0, 44, 32, 30, 42, 18, 34, 16, 35] your function should return 18.

import { expect, test } from "@jest/globals";
import { solution } from "./boardLength";

describe("solution for shortest boards to cover holes", () => {
  // --- Examples from the problem description ---
  test("should return 4 for A = [11, 20, 15]", () => {
    // Sorted: [11, 15, 20]. Optimal split: {11, 15} | {20}.
    // Lengths needed: (15-11)=4, (20-20)=0. Max is 4.
    expect(solution([11, 20, 15])).toBe(4);
  });

  test("should return 5 for A = [15, 20, 9, 11]", () => {
    // Sorted: [9, 11, 15, 20]. Optimal split: {9, 11} | {15, 20}.
    // Lengths needed: (11-9)=2, (20-15)=5. Max is 5.
    expect(solution([15, 20, 9, 11])).toBe(5);
  });

  // --- Corrected Edge and Logic Cases ---
  test("should return 1 for a single hole as per example", () => {
    // This is a special case as it cannot be split.
    expect(solution([100])).toBe(1);
  });

  test("should return 1 for two distinct holes", () => {
    // Split: {10} | {20}. Lengths needed: 0 and 0. Min positive length is 1.
    expect(solution([10, 20])).toBe(1);
  });

  test("should handle a case that previously seemed to need one board", () => {
    // Sorted: [0, 1, 2, 99, 100]. Optimal split: {0,1,2} | {99,100}.
    // Lengths needed: (2-0)=2, (100-99)=1. Max is 2.
    expect(solution([0, 1, 2, 99, 100])).toBe(2);
  });

  test("should handle two distinct, tight clusters of holes", () => {
    // Split: {10,11,12} | {100,101,102}.
    // Lengths needed: (12-10)=2, (102-100)=2. Max is 2.
    expect(solution([10, 11, 12, 100, 101, 102])).toBe(2);
  });

  test("should handle a symmetrical case requiring two boards", () => {
    const A: number[] = [0, 49, 50, 99];
    // Board 1 covers [0,49]. Board 2 covers [50,99]. Length needed is 49.
    expect(solution(A)).toBe(49);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long array with two distant clusters", () => {
    const firstCluster: number[] = Array.from({ length: 50000 }, (_, i) => i);
    const secondCluster: number[] = Array.from(
      { length: 50000 },
      (_, i) => 1000000 + i
    );
    const A: number[] = [...firstCluster, ...secondCluster];
    // Board 1 covers the first cluster, needing length 49999.
    // Board 2 covers the second cluster, needing length 49999.
    expect(solution(A)).toBe(49999);
  });
});
