import { expect, test } from "@jest/globals";
import { solution } from "./transform";

describe("solution template", () => {
  // --- Examples from the problem description ---
  test("should return ...", () => {
    expect(solution("13471", "59604")).toBe(9);
  });

  test("should return ...", () => {
    expect(solution("557", "304")).toBe(15);
  });

  test("should return ...", () => {
    expect(solution("115", "116")).toBe(-1);
  });

  test("should return ...", () => {
    expect(solution("1343", "1343")).toBe(0);
  });
});
