import { expect, test } from "@jest/globals";
import { Tree, solution } from "./binaryTreeHeight";

describe("solution template", () => {
  // --- Examples from the problem description ---
  test("should return 2", () => {
    const l2LeftLeft = new Tree(20);
    const l2LeftRight = new Tree(21);
    const l1Left = new Tree(3, l2LeftLeft, l2LeftRight);
    const l2RightLeft = new Tree(1);
    const l1Right = new Tree(10, l2RightLeft);
    const root = new Tree(5, l1Left, l1Right);
    expect(solution(root)).toBe(2);
  });
});
