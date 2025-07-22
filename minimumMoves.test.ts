// Write a function:
// class Solution { public int solution(int[] A); }
// that, given an array A, returns the minimum number of moves after which every value X in the array occurs exactly X times. Note that it is permissible to remove some values entirely, if appropriate.
// Examples:
// Given A = [1, 1, 3, 4, 4, 4), your function should return 3, as described
// above.
// Given A = [1, 2, 2, 2, 5, 5, 5, 8), your function should return 4. You can
// delete the 8 and one occurrence of 2, and insert 5 twice, resulting in [1, 2, 2, 5, 5, 5, 5, 5] after four moves. Notice that after the removals, there is no occurrence of 8 in the array anymore.
// Given A = [1, 1, 1, 1, 3, 3, 4, 4, 4, 4, 4], your function should return 5.
// Given A = [10, 10, 10], your function should return 3. You can remove all
// elements, resulting in an empty array.
// Write an efficient algorithm for the following assumptions:
// * N is an integer within the range [1..100,000);
// * each element of array A is an integer within the range [1..100,000,000];
// * elements of array A are sorted in non-decreasing order.

import { expect, test } from "@jest/globals";
import { solution } from "./minimumMoves";

describe("solution for minimum moves to X occurrences", () => {
  // --- Examples from the problem description ---
  test("should return 3 for A = [1, 1, 3, 4, 4, 4]", () => {
    // 1: has 2, needs 1 -> 1 move.
    // 3: has 1, needs 3 -> 2 moves. Cheaper to delete (1 move).
    // 4: has 3, needs 4 -> 1 move.
    // Total: 1 + 1 + 1 = 3.
    expect(solution([1, 1, 3, 4, 4, 4])).toBe(3);
  });

  test("should return 4 for A = [1, 2, 2, 2, 5, 5, 5, 8]", () => {
    // 1: has 1, needs 1 -> 0 moves.
    // 2: has 3, needs 2 -> 1 move.
    // 5: has 3, needs 5 -> 2 moves.
    // 8: has 1, needs 8 -> 7 moves. Cheaper to delete (1 move).
    // Total: 0 + 1 + 2 + 1 = 4.
    expect(solution([1, 2, 2, 2, 5, 5, 5, 8])).toBe(4);
  });

  test("should return 5 for A = [1, 1, 1, 1, 3, 3, 4, 4, 4, 4, 4]", () => {
    // 1: has 4, needs 1 -> 3 moves.
    // 3: has 2, needs 3 -> 1 move.
    // 4: has 5, needs 4 -> 1 move.
    // Total: 3 + 1 + 1 = 5.
    expect(solution([1, 1, 1, 1, 3, 3, 4, 4, 4, 4, 4])).toBe(5);
  });

  test("should return 3 for A = [10, 10, 10]", () => {
    // 10: has 3, needs 10 -> 7 moves. Cheaper to delete all 3 (3 moves).
    expect(solution([10, 10, 10])).toBe(3);
  });

  // --- Edge Cases ---
  test("should return 0 for an empty array", () => {
    expect(solution([])).toBe(0);
  });

  test("should return 0 for a perfectly formed array", () => {
    // 1 appears once, 2 appears twice.
    expect(solution([1, 2, 2])).toBe(0);
  });

  // --- Logic and Pattern Cases ---
  test("should always be cheaper to delete when count is low and value is high", () => {
    // For 100: has 2, needs 100 -> 98 moves. Cheaper to delete (2 moves).
    expect(solution([100, 100])).toBe(2);
  });

  test("should always be cheaper to adjust when count is high and value is close", () => {
    // For 5: has 6, needs 5 -> 1 move. Cheaper than deleting 6.
    expect(solution([5, 5, 5, 5, 5, 5])).toBe(1);
  });

  test("should handle a single element array", () => {
    // For 5: has 1, needs 5 -> 4 moves. Cheaper to delete (1 move).
    expect(solution([5])).toBe(1);
  });

  test("should handle a case with only deletions needed", () => {
    // 1: has 2, needs 1 -> 1 move.
    // 2: has 3, needs 2 -> 1 move.
    // 3: has 4, needs 3 -> 1 move.
    // Total: 1 + 1 + 1 = 3.
    expect(solution([1, 1, 2, 2, 2, 3, 3, 3, 3])).toBe(3);
  });

  test("should handle a case with only insertions needed", () => {
    // 2: has 1, needs 2 -> 1 move.
    // 3: has 2, needs 3 -> 1 move.
    // 4: has 3, needs 4 -> 1 move.
    // Total: 1 + 1 + 1 = 3.
    expect(solution([2, 3, 3, 4, 4, 4])).toBe(3);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long array with few unique values", () => {
    const A1 = new Array(50000).fill(1);
    const A2 = new Array(50000).fill(100000);
    // Cost for 1s: min(abs(50000-1), 50000) = 49999
    // Cost for 100000s: min(abs(50000-100000), 50000) = 50000
    // Total: 49999 + 50000 = 99999
    expect(solution([...A1, ...A2])).toBe(99999);
  });

  test("should perform efficiently on a long array that is perfectly formed", () => {
    // [1, 2, 2, 3, 3, 3, ...]
    const A: number[] = [];
    for (let i = 1; i < 300; i++) {
      for (let j = 0; j < i; j++) {
        A.push(i);
      }
    }
    expect(solution(A)).toBe(0);
  });
});
