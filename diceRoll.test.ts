// You have just rolled a dice several times. The N roll results that you remember are described by an array A. However, there are F rolls whose results you have forgotten. The arithmetic mean of all of the roll results (the sum of all the roll results divided by the number of rolls) equals M.
// What are the possible results of the missing rolls?
// Write a function:
// def solution(A, F, M)
// that, given an array A of length N, an integer F and an integer M, returns an array containing possible results of the missed rolls. The returned array should contain F integers from 1 to 6 (valid dice rolls). If such an array does not exist then the function should return [O].
// Examples:
// 1. Given A = [3, 2, 4, 3], F = 2, M = 4, your function should return [6, 6]. The arithmetic mean of all the
// rolls is 3 + 2 + 4 + 3 + 6 + 6) / 6 = 24/6 = 4.
// 2. Given A = [1, 5, 6], F = 4, M = 3, your function may return 2, 1, 2, 4] or [6, 1, 1, 1] (among others).
// 3. Given A = [1, 2, 3, 4], F = 4, M = 6, your function should return [0]. It is not possible to obtain such a mean.
// 4. Given A = [6, 1], F = 1, M = 1, your function should return [0]. It is not possible to obtain such a mean.
// Write an efficient algorithm for the following assumptions:
// • N and F are integers within the range [1..100,000);
// • each element of array A is an integer within the range [1..6];
// • M is an integer within the range [1..6].

import { expect, test } from "@jest/globals";
import { solution } from "./diceRoll";

function isValidResult(
  result: number[],
  F: number,
  expectedSum: number
): boolean {
  if (result.length !== F) {
    return false;
  }
  let currentSum = 0;
  for (const roll of result) {
    if (roll < 1 || roll > 6 || !Number.isInteger(roll)) {
      return false; // Not a valid dice roll
    }
    currentSum += roll;
  }
  return currentSum === expectedSum;
}

describe("solution for forgotten dice rolls", () => {
  // --- Examples from the problem description ---
  test("should return a valid result for A=[3,2,4,3], F=2, M=4", () => {
    const A = [3, 2, 4, 3],
      F = 2,
      M = 4;
    const expectedSum = (A.length + F) * M - A.reduce((a, b) => a + b, 0); // 12
    const result = solution(A, F, M);
    expect(isValidResult(result, F, expectedSum)).toBe(true);
  });

  test("should return a valid result for A=[1,5,6], F=4, M=3", () => {
    const A = [1, 5, 6],
      F = 4,
      M = 3;
    const expectedSum = (A.length + F) * M - A.reduce((a, b) => a + b, 0); // 9
    const result = solution(A, F, M);
    expect(isValidResult(result, F, expectedSum)).toBe(true);
  });

  test("should return [0] for A=[1,2,3,4], F=4, M=6 (impossible sum)", () => {
    expect(solution([1, 2, 3, 4], 4, 6)).toEqual([0]);
  });

  test("should return [0] for A=[6,1], F=1, M=1 (impossible sum)", () => {
    expect(solution([6, 1], 1, 1)).toEqual([0]);
  });

  // --- Edge Cases ---
  test("should handle the minimum possible sum for forgotten rolls", () => {
    // N=1, F=3, M=2. Total sum = 5*2=10. Sum_A=4. Sum_F=6.
    // F=3, min sum is 3. Max sum is 18. 6 is possible.
    // One valid result is [1,1,4]
    const A = [4],
      F = 3,
      M = 2;
    const expectedSum = (A.length + F) * M - A.reduce((a, b) => a + b, 0); // 6
    const result = solution(A, F, M);
    expect(isValidResult(result, F, expectedSum)).toBe(true);
  });

  test("should handle the maximum possible sum for forgotten rolls", () => {
    // N=1, F=2, M=6. Total sum = 3*6=18. Sum_A=6. Sum_F=12.
    // F=2, max sum is 12. Possible result: [6,6].
    const A = [6],
      F = 2,
      M = 6;
    const expectedSum = (A.length + F) * M - A.reduce((a, b) => a + b, 0); // 12
    const result = solution(A, F, M);
    expect(isValidResult(result, F, expectedSum)).toBe(true);
  });

  test("should return [0] when forgotten sum is too low", () => {
    // N=1, F=3, M=1. Total sum = 4*1=4. Sum_A=2. Sum_F=2.
    // F=3, min possible sum is 3. 2 is impossible.
    expect(solution([2], 3, 1)).toEqual([0]);
  });

  test("should return [0] when forgotten sum is too high", () => {
    // N=1, F=2, M=6. Total sum = 3*6=18. Sum_A=5. Sum_F=13.
    // F=2, max possible sum is 12. 13 is impossible.
    expect(solution([5], 2, 6)).toEqual([0]);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on large inputs (valid case)", () => {
    const A = new Array(99999).fill(3);
    const F = 1;
    const M = 3;
    const expectedSum = (A.length + F) * M - A.reduce((a, b) => a + b, 0); // 3
    const result = solution(A, F, M);
    expect(isValidResult(result, F, expectedSum)).toBe(true);
  });

  test("should perform efficiently on large inputs (impossible case)", () => {
    const A = new Array(100000).fill(6);
    const F = 1;
    const M = 6;
    // Sum_A is 600,000. Total sum is 600,006. Sum_F is 6.
    // Wait, this is possible. Let's make it impossible.
    // M=5. Total sum = 500005. Sum_A=600000. Sum_F = -99995. Impossible.
    expect(solution(A, F, 5)).toEqual([0]);
  });
});
