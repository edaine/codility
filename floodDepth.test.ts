import { expect, test } from "@jest/globals";
import { solution } from "./floodDepth";

describe("solution template", () => {
  // --- Examples from the problem description ---
  test("should return 0 with [5,8]", () => {
    expect(solution([5, 8])).toBe(0);
  });

  test("should return 0 with [1, 3, 2]", () => {
    expect(solution([1, 3, 2])).toBe(0);
  });

  test("should return 1 with [3, 1, 2]", () => {
    expect(solution([3, 1, 2])).toBe(1);
  });

  test("should return 2 with [1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]", () => {
    expect(solution([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2])).toBe(2);
  });

  test("should return 0 with [5, 3, 3, 4, 2, 1, 3, 2, 1, 2, 1]", () => {
    expect(solution([5, 3, 3, 4, 2, 1, 3, 2, 1, 2, 1])).toBe(2);
  });
});
