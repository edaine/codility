// There are two wooden sticks of lengths A and B respectively. Each of them can be cut into shorter sticks of integer lengths. Our goal is to construct the largest possible square. In order to do this, we want to cut the sticks in such a way as to achieve four sticks of the same length (note that there can be some leftover pieces). What is the longest side of square that we can achieve?
// Write a function:
// class Solution ( public int solution(int A, int B);
// that, given two integers A, B, returns the side length of the largest square that we can obtain. If it is not possible to create any square, the function should return 0.
// Examples:
// Given A = 10, B = 21, the function should return 3. We can split the second stick into three sticks of length 7 and shorten the first stick by 3.
// Given A = 13, B = 11, the function should return 5. We can cut two sticks of length 5 from each of the given sticks.
// Given A - 2, B - 1, the function should return 0. It is not possible to make any square from the given sticks.
// Given A = 1, B = 8, the function should return 2. We can cut stick B into four parts.

import { expect, test } from "@jest/globals";
import { solution } from "./buildSquare";

describe("solution for largest square from sticks", () => {
  // --- Examples from the problem description ---
  test("should return 7 for A = 10, B = 21", () => {
    // Total length 31. Max possible side is floor(31/4)=7.
    // For L=7: floor(10/7) + floor(21/7) = 1 + 3 = 4 sticks. Possible.
    expect(solution(10, 21)).toBe(7);
  });

  test("should return 5 for A = 13, B = 11", () => {
    // Total length 24. Max possible side is floor(24/4)=6.
    // For L=6: floor(13/6) + floor(11/6) = 2 + 1 = 3 sticks. Not possible.
    // For L=5: floor(13/5) + floor(11/5) = 2 + 2 = 4 sticks. Possible.
    expect(solution(13, 11)).toBe(5);
  });

  test("should return 0 for A = 2, B = 1", () => {
    // Total length 3. Max possible side is floor(3/4)=0. Not possible.
    expect(solution(2, 1)).toBe(0);
  });

  test("should return 2 for A = 1, B = 8", () => {
    // Total length 9. Max possible side is floor(9/4)=2.
    // For L=2: floor(1/2) + floor(8/2) = 0 + 4 = 4 sticks. Possible.
    expect(solution(1, 8)).toBe(2);
  });

  // --- Edge Cases ---
  test("should return 0 for A = 0, B = 0", () => {
    expect(solution(0, 0)).toBe(0);
  });

  test("should return 1 for A = 4, B = 0", () => {
    // Can cut four sticks of length 1 from stick A.
    expect(solution(4, 0)).toBe(1);
  });

  test("should return 0 for A = 3, B = 0", () => {
    // Cannot get four sticks of any positive length.
    expect(solution(3, 0)).toBe(0);
  });

  test("should return 1 for A = 2, B = 2", () => {
    // Can get two sticks of length 1 from each. Total 4.
    expect(solution(2, 2)).toBe(1);
  });

  // --- Logic and Pattern Cases ---
  test("should handle when both sticks contribute equally", () => {
    // Can get two sticks of length 50 from each.
    expect(solution(100, 100)).toBe(50);
  });

  test("should handle when one stick contributes all four pieces", () => {
    // Can get four sticks of length 10 from stick B.
    expect(solution(1, 40)).toBe(10);
  });

  test("should handle when one stick contributes three pieces", () => {
    // Can get three sticks of length 10 from A, and one from B.
    expect(solution(30, 10)).toBe(10);
  });

  test("should handle a perfect fit with no leftovers", () => {
    expect(solution(20, 20)).toBe(10);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently for two very large equal sticks", () => {
    expect(solution(1_000_000_000, 1_000_000_000)).toBe(500_000_000);
  });

  test("should perform efficiently when one stick is tiny and one is huge", () => {
    // Stick B can be cut into four pieces of length 250,000,000.
    expect(solution(1, 1_000_000_000)).toBe(250_000_000);
  });

  test("should perform efficiently for two large different sticks", () => {
    // Max side is floor((1.2e9)/4) = 300,000,000.
    // For L=300M: floor(800M/300M) + floor(400M/300M) = 2 + 1 = 3. Not enough.
    // For L=266,666,666: floor(8e8/L) + floor(4e8/L) = 3 + 1 = 4. Possible.
    expect(solution(800_000_000, 400_000_000)).toBe(266_666_666);
  });
});
