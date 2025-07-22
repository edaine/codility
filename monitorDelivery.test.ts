// A technology company announced that a new supply of P monitors would soon be available at their store. There were N orders (numbered from 0 to N-1) placed by customers who wanted to buy those monitors. The K-th order has to be delivered to a location at distance D[K] from the store and is for exactly C[K] monitors.
// Now the time has come for the monitors to be delivered. The orders will be fulfilled one by one. To minimize the shipping time, it has been decided that the deliveries will be made in order of increasing distance from the store. If there are many customers at the same distance, they can be processed in any order. Monitors to more distant customers will be delivered only once all orders to customers closer to the store have already been fulfilled.
// What is the maximum total number of orders that can be fulfilled?
// Write a function:
// class Solution { public int solution(int[] D, int[] C, int P); }
// that, given two arrays of integers D and C, and an integer P, returns the maximum total number of orders that can be fulfilled.
// Examples:
// Given D = [5, 11, 1, 3], C = [6, 1, 3, 2] and P = 7, the function should return 2.
// The customers at distances 1 and 3 will have their orders fulfilled and 3 + 2 = 5 monitors will be delivered.
// Given D = [10, 15, 1], C = [10, 1, 2] and P = 3, the function should return 1.
// Only the order for the customer at distance 1 will be fulfilled. There will not be enough monitors in the store for the customer at distance 10.
// Therefore, orders for customers at distances 10 and 15 will not be fulfilled.
// Given D = [11, 18, 1], C = [9, 18, 8] and P = 7, the function should return 0.
// Given D = [1, 4, 2, 5], C = [4, 9, 2, 3] and P = 19, the function should return 4.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of arrays D and C is an integer within the range [1..1,000,000,000];
// P is an integer within the range [0..1,000,000,000].

import { expect, test } from "@jest/globals";
import { solution } from "./monitorDelivery";

// Assuming your function is named 'solution' and is imported
// declare function solution(D: number[], C: number[], P: number): number;

describe("solution for maximum fulfilled orders", () => {
  // --- Examples from the problem description ---
  test("should return 2 for D=[5,11,1,3], C=[6,1,3,2], P=7", () => {
    // Sorted orders by distance: (d=1,c=3), (d=3,c=2), (d=5,c=6), ...
    // P=7. Fulfill (1,3) -> P=4. Fulfill (3,2) -> P=2. Cannot fulfill (5,6).
    expect(solution([5, 11, 1, 3], [6, 1, 3, 2], 7)).toBe(2);
  });

  test("should return 1 for D=[10,15,1], C=[10,1,2], P=3", () => {
    // Sorted orders: (d=1,c=2), (d=10,c=10), ...
    // P=3. Fulfill (1,2) -> P=1. Cannot fulfill (10,10).
    expect(solution([10, 15, 1], [10, 1, 2], 3)).toBe(1);
  });

  test("should return 0 for D=[11,18,1], C=[9,18,8], P=7", () => {
    // Sorted orders: (d=1,c=8), ...
    // P=7. Cannot fulfill (1,8).
    expect(solution([11, 18, 1], [9, 18, 8], 7)).toBe(0);
  });

  test("should return 4 for D=[1,4,2,5], C=[4,9,2,3], P=19", () => {
    // P=19. Fulfill (1,4)->P=15. Fulfill (2,2)->P=13. Fulfill (4,9)->P=4. Fulfill (5,3)->P=1.
    expect(solution([1, 4, 2, 5], [4, 9, 2, 3], 19)).toBe(4);
  });

  // --- Edge Cases ---
  test("should return 0 when P=0", () => {
    expect(solution([1, 2], [1, 1], 0)).toBe(0);
  });

  test("should handle a single order that can be fulfilled", () => {
    expect(solution([10], [5], 5)).toBe(1);
  });

  test("should handle a single order that cannot be fulfilled", () => {
    expect(solution([10], [5], 4)).toBe(0);
  });

  // --- Logic and Pattern Cases ---
  test("should handle ties in distance correctly", () => {
    // Sorted orders: (d=5,c=3), then (d=10,c=2) and (d=10,c=4) in any order.
    // P=10. Fulfill (5,3)->P=7. Fulfill (10,2)->P=5. Fulfill (10,4)->P=1.
    expect(solution([10, 5, 10], [2, 3, 4], 10)).toBe(3);
  });

  test("should return N if all orders can be fulfilled", () => {
    expect(solution([1, 2, 3], [1, 1, 1], 100)).toBe(3);
  });

  test("should handle an exact number of monitors", () => {
    // P=10. Fulfill (1,5)->P=5. Fulfill (2,5)->P=0.
    expect(solution([1, 2], [5, 5], 10)).toBe(2);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long, pre-sorted array", () => {
    const D = Array.from({ length: 100000 }, (_, i) => i + 1);
    const C = new Array(100000).fill(1);
    // Fulfills the first 50000 orders.
    expect(solution(D, C, 50000)).toBe(50000);
  });

  test("should perform efficiently on a long, reverse-sorted array", () => {
    const D = Array.from({ length: 100000 }, (_, i) => 100000 - i);
    const C = new Array(100000).fill(1);
    // After sorting, this is the same as the previous test.
    expect(solution(D, C, 50000)).toBe(50000);
  });
});
