import { expect, test } from "@jest/globals";
import { solution } from "./firstUnique";

describe("FirstUnique", () => {
  // --- Examples from the problem description ---
  test("should return 5 with [4, 10, 5, 4, 2, 10]", () => {
    expect(solution([4, 10, 5, 4, 2, 10])).toBe(5);
  });

  test("should return 4 with [1, 4, 3, 3, 1, 2]", () => {
    expect(solution([1, 4, 3, 3, 1, 2])).toBe(4);
  });

  test("should return -1 with [6, 4, 4, 6]", () => {
    expect(solution([6, 4, 4, 6])).toBe(-1);
  });
});
