import { expect, test } from "@jest/globals";
import { solution } from "./gymVisits";

/**
 * A gym membership card allows entry for a one week period which always begins on a Monday and ends on the following Sunday. You are given a list of visits of length N which represents the days Ellis visits the gym, in chronological order. What is the minimum number of gym cards that Ellis needs to purchase?
 *
 * function solution(visits: string[]): number;
 *
 * Assume that:
 * - N is an integer [1..100]
 * - the only strings in visits are: "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", and/or "Sun"
 */

describe("gym visits", () => {
  // --- Examples from the problem description ---
  test("should return 2", () => {
    expect(solution(["Tue", "Sat", "Mon", "Fri"])).toBe(2);
  });

  test("should return 3", () => {
    expect(solution(["Mon", "Mon", "Mon"])).toBe(3);
  });

  test("should return 7", () => {
    expect(solution(["Sun", "Sat", "Fri", "Thu", "Wed", "Tue", "Mon"])).toBe(7);
  });

  test("should return 7", () => {
    expect(solution(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])).toBe(1);
  });

  test("should return 100", () => {
    expect(solution(new Array(100).fill("Fri"))).toBe(100);
  });

  test("should return 2", () => {
    expect(solution(["Fri", "Mon"])).toBe(2);
  });
});
