import { expect, test } from "@jest/globals";
import { solution } from "./strSymmetryPoint";

describe("solution template", () => {
  // --- Examples from the problem description ---
  test("should return 3 for 'racecar'", () => {
    expect(solution("racecar")).toBe(3);
  });

  test("should return 0 for 'x'", () => {
    expect(solution("x")).toBe(0);
  });

  test("should return 0 for an empty string", () => {
    expect(solution("0")).toBe(0);
  });

  test("should return -1 for non-symmetric string", () => {
    expect(solution("ababababaCbabababab")).toBe(-1);
  });

  test("should return -1 for a space", () => {
    expect(solution(" ")).toBe(-1);
  });

  test("should return an index for a valid long string", () => {
    const input = Array(999_999)
      .fill("a")
      .concat("x")
      .concat(Array(999_999).fill("a"))
      .join("");
    expect(solution(input)).toBe(999_999);
  });

  test("should return -1 for a long non-symmetric string", () => {
    const input = Array(999_999)
      .fill("a")
      .concat("x")
      .concat(Array(999_999).fill("b"))
      .join("");
    expect(solution(input)).toBe(-1);
  });
});
