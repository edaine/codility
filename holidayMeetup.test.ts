// A group of friends is going on holiday together. They have come to a meeting point (the start of the journey) using N cars. There are P[K] people and S[K] seats in the K-th car for K in range [O..N-1].
// Some of the seats in the cars may be free, so it is possible for some of the friends to change the car they are in. The friends have decided that, in order to be ecological, they will leave some cars parked at the meeting point and travel with as few cars as possible.
// Write a function:
// def solution (P, S)
// that, given two arrays P and S, consisting of N integers each, returns the minimum number of cars needed to take all of the friends on holiday.
// Examples:
// 1. Given P = [1, 4, 1] and S = [1, 5, 1], the function should return 2. A person from car number 0 can
// travel in car number 1 instead. This way, car number 0 can be left parked at the meeting point.
// 2. Given P = [4, 4, 2, 4] and S = [5, 5, 2, 5], the function should return 3. One person from car number
// 2 can travel in car number 0 and the other person from car number 2 can travel in car number 3.
// 3. Given P = [2, 3, 4, 2] and S = [2, 5, 7, 2], the function should return 2. Passengers from car number
// O can travel in car number 1 and passengers from car number 3 can travel in car number 2.
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range [1..100,000];
// • each element of arrays P and S is an integer within the range [1..9];
// • every friend had a seat in the car they came in; that is, P[K] ≤ S[K] for each K within the range [O..N-1].

import { expect, test } from "@jest/globals";
import { solution } from "./holidayMeetup";

// Assuming your function is named 'solution' and is imported
// declare function solution(P: number[], S: number[]): number;

describe("solution for minimum cars needed", () => {
  // --- Examples from the problem description ---
  test("should return 2 for P=[1,4,1], S=[1,5,1]", () => {
    // Total people: 6. Sorted seats: [5, 1, 1].
    // Car 1 (5 seats) is not enough. Car 1+2 (5+1=6 seats) is enough.
    expect(solution([1, 4, 1], [1, 5, 1])).toBe(2);
  });

  test("should return 3 for P=[4,4,2,4], S=[5,5,2,5]", () => {
    // Total people: 14. Sorted seats: [5, 5, 5, 2].
    // 5+5+5 = 15 seats are needed. That's 3 cars.
    expect(solution([4, 4, 2, 4], [5, 5, 2, 5])).toBe(3);
  });

  test("should return 2 for P=[2,3,4,2], S=[2,5,7,2]", () => {
    // Total people: 11. Sorted seats: [7, 5, 2, 2].
    // 7+5 = 12 seats are needed. That's 2 cars.
    expect(solution([2, 3, 4, 2], [2, 5, 7, 2])).toBe(2);
  });

  // --- Edge Cases ---
  test("should return 1 for a single car", () => {
    expect(solution([5], [5])).toBe(1);
  });

  test("should return 1 if all people fit into the single largest car", () => {
    // Total people: 10. Largest car has 10 seats.
    expect(solution([2, 3, 5], [2, 4, 10])).toBe(1);
  });

  test("should return N if all cars are exactly full and no consolidation is possible", () => {
    const P = [2, 3, 4];
    const S = [2, 3, 4];
    expect(solution(P, S)).toBe(3);
  });

  // --- Logic and Pattern Cases ---
  test("should handle a case where many small cars are needed", () => {
    // Total people: 18. Sorted seats: [5, 5, 3, 3, 3, 3].
    // 5+5+3+3+3 = 19 seats. That's 5 cars.
    const P = [2, 2, 2, 2, 5, 5];
    const S = [3, 3, 3, 3, 5, 5];
    expect(solution(P, S)).toBe(5);
  });

  test("should handle a perfect fit", () => {
    // Total people: 10. Sorted seats: [5, 5].
    // 5+5=10. Exactly 2 cars.
    expect(solution([5, 5], [5, 5])).toBe(2);
  });

  // --- Performance Tests (large inputs) ---
  test("should perform efficiently on a long, uniform array", () => {
    const P = new Array(100000).fill(1); // 100,000 people
    const S = new Array(100000).fill(9); // All cars have 9 seats
    // 100000 / 9 = 11111.11... -> need 11112 cars.
    expect(solution(P, S)).toBe(11112);
  });

  test("should perform efficiently on a long, mixed array", () => {
    const P = new Array(50000).fill(1); // 50,000 people
    const S = new Array(50000).fill(1);
    // Need 50,000 cars.
    expect(solution(P, S)).toBe(50000);
  });
});
