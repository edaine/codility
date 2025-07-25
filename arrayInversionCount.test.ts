import { expect, test } from "@jest/globals";
import { solution } from "./arrayInversionCount";

describe("solution template", () => {
  // --- Examples from the problem description ---
  test("should return 4", () => {
    expect(solution([-1, 6, 3, 4, 7, 4])).toBe(4);
  });
});
