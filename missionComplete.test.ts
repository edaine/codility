// In order to finish a game, a player has to complete N missions. The missions are numbered from 0 to N-1. The K-th mission has an integer D[K] assigned, representing its difficulty level.
// During a day, you can perform any number of missions given the two following rules:
// • missions should be performed in the specified order, in other words, a mission can be undertaken only if all of the missions preceding it have already been completed;
// • the difference between the difficulty levels of any two missions performed on the same day should not be greater than an integer X.
// Write a function:
// class Solution { public int solution (int[] D, int X) };
// that, given an array D of N integers and an integer X, returns the minimum number of days required to complete all of the missions in the game.
// Examples:
// 1. Given D = [5, 8, 2, 7] and X = 3, your function should return 3. The first two
// missions can be performed on the first day, the third mission on the second day and the last mission on the third day. It is not possible to complete all of the missions in fewer days.

// 2. Given D = [2, 5, 9, 2, 1, 4] and X = 4, your function should return 3. The first
// two missions can be performed on the first day, the third mission on the second day and all of the remaining missions on the third day. Note that it is possible to perform the first mission on the first day and the next two missions on the second day. In both of these cases, the minimum number of days required to complete all of the missions is 3.

// 3. Given D = [1, 12, 10, 4, 5, 2] and X = 2, your function should return 4. The
// first mission can be performed on the first day, the next two missions on the second day, the fourth and fifth missions on the third day, and the last remaining mission on the fourth day. It is not possible to complete all of the missions in fewer days.
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range [1..200,000];
// • X is an integer within the range [0..1,000,000,000];
// • each element of array D is an integer within the range [1..1,000,000,000].

import { expect, test } from "@jest/globals";
import { solution } from "./missionComplete";

describe("solution for minimum days to complete missions", () => {
  // --- Examples from the problem description ---
  test("should return 3 for D=[5, 8, 2, 7], X=3", () => {
    // Day 1: [5, 8] (max-min=3). Day 2: [2]. Day 3: [7].
    expect(solution([5, 8, 2, 7], 3)).toBe(3);
  });

  test("should return 3 for D=[2, 5, 9, 2, 1, 4], X=4", () => {
    // Day 1: [2, 5] (max-min=3). Day 2: [9]. Day 3: [2, 1, 4] (max-min=3).
    expect(solution([2, 5, 9, 2, 1, 4], 4)).toBe(3);
  });

  test("should return 4 for D=[1, 12, 10, 4, 5, 2], X=2", () => {
    // Day 1: [1]. Day 2: [12, 10]. Day 3: [4, 5]. Day 4: [2].
    expect(solution([1, 12, 10, 4, 5, 2], 2)).toBe(4);
  });

  // --- Edge Cases ---
  test("should return 0 for an empty array of missions", () => {
    expect(solution([], 5)).toBe(0);
  });

  test("should return 1 for a single mission", () => {
    expect(solution([100], 10)).toBe(1);
  });

  test("should handle X=0 correctly", () => {
    // With X=0, all missions on a day must have the same difficulty.
    // Day 1: [5, 5, 5]. Day 2: [6].
    expect(solution([5, 5, 5, 6], 0)).toBe(2);
  });

  // --- Logic and Pattern Cases ---
  test("should return 1 if all missions can be done in one day", () => {
    // Max difficulty is 12, min is 10. Difference is 2, which is <= X.
    expect(solution([10, 12, 11], 2)).toBe(1);
  });

  test("should handle a steadily increasing difficulty array", () => {
    // Day 1: [1, 2]. Day 2: [3, 4]. Day 3: [5, 6].
    expect(solution([1, 2, 3, 4, 5, 6], 1)).toBe(3);
  });

  test("should handle wildly fluctuating difficulties", () => {
    // Each mission's difficulty range with the next is > 5.
    // Each mission must be on its own day.
    expect(solution([10, 1, 12, 2, 13, 3], 5)).toBe(6);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long array that takes 1 day", () => {
    const D = new Array(200000).fill(100);
    D[50000] = 50; // min
    D[150000] = 150; // max
    // max-min = 100, which is <= X.
    expect(solution(D, 100)).toBe(1);
  });

  test("should perform efficiently on a long array where each mission is a new day", () => {
    const D: number[] = [];
    for (let i = 0; i < 100000; i++) {
      D.push(i * 10);
    }
    // With X=5, each mission will start a new day.
    expect(solution(D, 5)).toBe(100000);
  });
});
