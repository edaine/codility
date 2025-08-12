import { expect, test } from "@jest/globals";
import { solution } from "./kIncreases";

/**
 * Write a function that, given a three-digit integer N and an integer K, returns the max possible three-digit value that can be obtained by performing at most K increases by 1 of any digit in N.
 *
 * Assume that:
 * - N is an integer within the range [100..999]
 * - K is an integer within the range [0..30]
 */
describe("solution template", () => {
  // --- Examples from the problem description ---
  test("should return 972", () => {
    expect(solution(512, 10)).toBe(972);
  });

  test("should return 591", () => {
    expect(solution(191, 4)).toBe(591);
  });

  test("should return 999", () => {
    expect(solution(285, 20)).toBe(999);
  });

  test("should return 100", () => {
    expect(solution(100, 0)).toBe(100);
  });

  test("should return 999", () => {
    expect(solution(999, 1)).toBe(999);
  });
});
