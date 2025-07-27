import { expect, test } from "@jest/globals";
import { solution } from "./palindrome";

describe("solution template", () => {
  // --- Examples from the problem description ---
  test("should return ...", () => {
    expect(solution("ervervige")).toBe(2);
  });

  test("should return ...", () => {
    expect(solution("aaabab")).toBe(0);
  });

  test("should return ...", () => {
    expect(solution("x")).toBe(0);
  });

  test("should return ...", () => {
    expect(solution("aaabab".repeat(200_000 / 6))).toBe(0);
  });

  test("should return ...", () => {
    expect(solution("erverv".repeat(200_000 / 6).concat("ige"))).toBe(2);
  });
});
