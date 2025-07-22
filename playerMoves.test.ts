// There are N players standing in a row, one player on a field. They are numbered from 0 to N-1 from left to right.
// Players perform moves one by one from left to right, that is, in ascending order of numbers. Each player presses an arrow key in one of the four cardinal directions: left (<), right (>), up (^*) or down (v). A key press in the given direction means that the player attempts to move onto the closest field in the direction specified. A move can be performed only if there is no other player already standing on the target field.
// Moves are represented as a string S of length N, where S[K] (for K within the range O..N-1) is the direction of the K-th player's move. How many players will actually perform a move successfully?
// Write a function:
// class Solution { public int solution(String S); )
// which, given a stringS of length N representing arrow keys pressed by each of the players, returns the number of players that will perform a move successfully.
// Examples:
// 1. Given S = "><^v", your function should return 2. Player 0 cannot move rightwards, because player 1 is standing on the target field. Player 1 cannot move leftwards, because player 0 is standing on the target field. Players 2 and 3 can both perform their moves because there are no other players

import { expect, test } from "@jest/globals";
import { solution } from "./playerMoves";

describe("Player Moves", () => {
  // Test case from the problem description
  test('should return 2 for the example case "><^v"', () => {
    expect(solution("><^v")).toBe(2);
  });

  // --- Basic Cases ---
  test("should return 0 for an empty string", () => {
    expect(solution("")).toBe(0);
  });

  test('should handle simple rightward block: ">>"', () => {
    expect(solution(">>")).toBe(1);
  });

  test('should handle simple leftward success chain: "<<"', () => {
    expect(solution("<<")).toBe(2);
  });

  test('should handle non-conflicting vertical moves: "^v"', () => {
    expect(solution("^v")).toBe(2);
  });

  test('should handle non-conflicting outward moves: "<>"', () => {
    expect(solution("<>")).toBe(2);
  });

  // --- Interaction and Blocking Cases ---
  test('should handle a total gridlock: ">><<"', () => {
    expect(solution(">><<")).toBe(0);
  });

  test('should handle alternating blocks: "<><>"', () => {
    expect(solution("<><>")).toBe(2);
  });

  test('should handle vertical moves enabling horizontal ones: "v>^<"', () => {
    expect(solution("v>^<")).toBe(3);
  });

  // --- Chain Reaction Cases ---
  test('should handle a full leftward chain reaction: "<<<"', () => {
    expect(solution("<<<")).toBe(3);
  });

  test('should handle alternating vertical and blocked moves: "v>v>v"', () => {
    expect(solution("v>v>v")).toBe(3);
  });

  test('should handle a full non-conflicting chain: "<^v>"', () => {
    expect(solution("<^v>")).toBe(4);
  });

  // --- Longer & More Complex Cases ---
  test('should handle a complex mix of moves: ">>^<<v"', () => {
    expect(solution(">>^<<v")).toBe(4);
  });

  test('should handle another complex mix: "^>v<"', () => {
    expect(solution("^>v<")).toBe(3);
  });
});
