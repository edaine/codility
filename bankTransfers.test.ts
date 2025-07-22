// You are given a list of N transfers (numbered from 0 to N-1), between two banks: bank A and bank B. the K-th transfer is described by two values:

// R[K](either "A"  or "B") representing the recipient (the bank the transfer is sent to );
// V[K] denoting the value sent via the transfer
// All transfers are completed in the order they appear in the list.The banks do not want to go into the debt(in other words, their account balance may not drop below 0).What minimal initial account balance in each bank is necessary in order to complete the transfers ?
//  Write a Java function:
//  Class Solution {public int[] solution (String R, int[] V);}
//  That given a string R and an array of integers V, both of length N, return an array of two integers. The intergers should represent the minimum initial account balances for bank A and B in the following order: [bank A,bank B]
// Result array should be returned as an array of integers.
//  Example:

// Given R="BAABA" and V = [2,4,1,1,2], the function should return [2,4].
// Given R = "ABAB" and V=[10,5,10,15], the function should return [0,15]
// Given R="B" and V=[100], the function should return [100,0]

import { expect, test } from "@jest/globals";
import { solution } from "./bankTransfers";

describe("solution for minimum bank balances", () => {
  // --- Examples from the problem description ---
  test('should return [2, 4] for R="BAABA", V=[2, 4, 1, 1, 2]', () => {
    // Bank A's lowest net flow is -2. Bank B's is -4.
    expect(solution("BAABA", [2, 4, 1, 1, 2])).toEqual([2, 4]);
  });

  test('should return [0, 15] for R="ABAB", V=[10, 5, 10, 15]', () => {
    // Bank A's net flow never goes below 0. Bank B's lowest is -15.
    expect(solution("ABAB", [10, 5, 10, 15])).toEqual([0, 15]);
  });

  test('should return [100, 0] for R="B", V=[100]', () => {
    // Bank A pays 100, its lowest point. Bank B only receives.
    expect(solution("B", [100])).toEqual([100, 0]);
  });

  // --- Edge Cases ---
  test("should return [0, 0] for empty inputs", () => {
    expect(solution("", [])).toEqual([0, 0]);
  });

  // --- Logic and Pattern Cases ---
  test("should handle all transfers to Bank A", () => {
    // Bank B pays out 10+20+5+15 = 50. Its lowest point is -50.
    const R = "AAAA";
    const V = [10, 20, 5, 15];
    expect(solution(R, V)).toEqual([0, 50]);
  });

  test("should handle all transfers to Bank B", () => {
    // Bank A pays out 10+20+5+15 = 50. Its lowest point is -50.
    const R = "BBBB";
    const V = [10, 20, 5, 15];
    expect(solution(R, V)).toEqual([50, 0]);
  });

  test("should handle a large initial transfer defining the minimum", () => {
    // A pays 100. Later transfers don't cause a deeper debt for A.
    // B's balance never drops below its initial state.
    const R = "BABA";
    const V = [100, 1, 1, 1];
    expect(solution(R, V)).toEqual([100, 0]);
  });

  test("should handle when both banks require initial funds", () => {
    // B pays 100 to A (B needs 100). Then A pays 200 to B (A needs 100).
    const R = "AB";
    const V = [100, 200];
    expect(solution(R, V)).toEqual([100, 100]);
  });

  test("should handle when the deepest debt occurs mid-way for one bank and at the end for the other", () => {
    const R = "BBAA";
    const V = [50, 50, 100, 100];
    // A's lowest point is -100 after the first two transfers.
    // B's lowest point is -100 after the final transfer.
    expect(solution(R, V)).toEqual([100, 100]);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long alternating string", () => {
    const R = "AB".repeat(50000); // length 100,000
    const V = new Array(100000).fill(10);
    // B pays 10 (minB=-10). A pays 10 (net flows return to 0). Repeats.
    // A never needs funds. B repeatedly needs 10.
    expect(solution(R, V)).toEqual([0, 10]);
  });

  test("should perform efficiently on a long string with accumulating debt", () => {
    const R = "B".repeat(100000);
    const V = new Array(100000).fill(1);
    // A's debt accumulates to -100,000.
    expect(solution(R, V)).toEqual([100000, 0]);
  });
});
