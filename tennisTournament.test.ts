// You are hosting a tennis tournament. P players, who will take part in the first round of this tournament, are already registered and you have reserved C tennis courts for the matches. Exactly two players play in each game and only one game can be played on each court at any given time. You want to host the maximum possible number of games starting at the same time (in order to finish the first round quickly).

// How many games can be hosted in parallel simultaneously?

// Write a function:

// function solution(P: number, C: number): number;
// that, given the number of players P and the number of reserved courts C, returns the maximum number of games that can be played in parallel.

// Examples:

// 1. Given P = 5 players and C = 3 available courts, the function should return 2. Two games can be played simultaneously (for instance, the first and second players can play on the first court, and the third and fourth players on the second court, and the third court will be empty because the fifth player does not have a partner to play with).

// 2. Given P = 10 players and C = 3 courts, the function should return 3. At most three games can be hosted in parallel.

// Assume that:

// P and C are integers within the range[1..30,000].

import { expect, test } from "@jest/globals";
import { solution } from "./tennisTournament";

// Assuming your function is named 'solution' and is imported
// declare function solution(P: number, C: number): number;

describe("solution for tennis tournament games", () => {
  describe("Examples from the problem description", () => {
    test("should return 2 for P=5 players and C=3 courts", () => {
      // 5 players can form floor(5/2) = 2 pairs.
      // This is limited by players, not courts.
      expect(solution(5, 3)).toBe(2);
    });

    test("should return 3 for P=10 players and C=3 courts", () => {
      // 10 players can form floor(10/2) = 5 pairs.
      // This is limited by the 3 courts.
      expect(solution(10, 3)).toBe(3);
    });
  });

  describe("Correctness tests: Player-limited scenarios", () => {
    test("should be limited by players when courts are abundant", () => {
      // 8 players can form 4 pairs. 10 courts are available.
      expect(solution(8, 10)).toBe(4);
    });

    test("should return 0 when there are not enough players for a single game", () => {
      // 1 player cannot form any pairs.
      expect(solution(1, 10)).toBe(0);
    });

    test("should handle an odd number of players", () => {
      // 9 players can form 4 pairs, one player is left out.
      expect(solution(9, 20)).toBe(4);
    });
  });

  describe("Correctness tests: Court-limited scenarios", () => {
    test("should be limited by courts when players are abundant", () => {
      // 100 players could form 50 pairs, but only 10 courts are available.
      expect(solution(100, 10)).toBe(10);
    });

    test("should return 1 when there is only one court", () => {
      // Many players, but only one court.
      expect(solution(50, 1)).toBe(1);
    });
  });

  describe("Correctness tests: Edge cases", () => {
    test("should handle the minimum possible inputs", () => {
      // 1 player, 1 court -> 0 games.
      expect(solution(1, 1)).toBe(0);
    });

    test("should handle when player pairs exactly match courts", () => {
      // 10 players form 5 pairs. 5 courts are available.
      expect(solution(10, 5)).toBe(5);
    });

    test("should handle when there are exactly 2 players", () => {
      // 2 players form 1 pair.
      expect(solution(2, 5)).toBe(1);
    });
  });

  describe("Performance tests: Maximum constraints", () => {
    test("should handle max players and max courts (player-limited)", () => {
      // 30,000 players form 15,000 pairs.
      expect(solution(30000, 30000)).toBe(15000);
    });

    test("should handle max players and one court (court-limited)", () => {
      expect(solution(30000, 1)).toBe(1);
    });

    test("should handle one less than max players and max courts", () => {
      // 29,999 players form floor(29999/2) = 14,999 pairs.
      expect(solution(29999, 30000)).toBe(14999);
    });
  });
});
