import { expect, test } from "@jest/globals";
import { solution } from "./highestPower2";

describe("solution template", () => {
  // --- Examples from the problem description ---
  test("should return 0 for odd numbers", () => {
    expect(solution(3)).toBe(0);
  });

  test("should return 3 for 24", () => {
    expect(solution(24)).toBe(3);
  });

  test("should return 3 for 1_000_000_000", () => {
    expect(solution(1_000_000_000)).toBe(3);
  });
});
