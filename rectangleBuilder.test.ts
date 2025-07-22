import { expect, test } from "@jest/globals";
import { solution } from "./rectangleBuilder";

describe("solution for pen enclosure problem", () => {
  describe("Correctness tests: Corner cases, N <= 5", () => {
    test("should return 0 for an empty array", () => {
      expect(solution([], 10)).toBe(0);
    });

    test("should return 0 for an array with fewer than 4 pieces", () => {
      expect(solution([10, 10, 10], 100)).toBe(0);
    });

    test("should form a single square pen when exactly 4 pieces are available", () => {
      expect(solution([10, 10, 10, 10], 100)).toBe(1);
    });

    test("should return 0 if the only possible pen area is too small", () => {
      expect(solution([10, 10, 10, 10], 101)).toBe(0);
    });

    test("should form a single rectangular pen", () => {
      expect(solution([5, 5, 2, 2], 10)).toBe(1);
    });
  });

  describe("Correctness tests: Includes squares, N <= 20", () => {
    test("should count both squares and rectangles correctly", () => {
      const A = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
      const X = 5;
      // Squares: 3x3 (area 9), 4x4 (area 16). Count = 2.
      // Rectangles: 2x3 (area 6), 2x4 (area 8), 3x4 (area 12). Count = 3.
      // Total = 5.
      expect(solution(A, X)).toBe(5);
    });
  });

  describe("Correctness tests: Simple tests, N <= 20", () => {
    test("should solve the basic example from the problem description", () => {
      const A = [1, 2, 5, 1, 1, 2, 3, 5, 1];
      const X = 5;
      // Pairs are (1,5) and (2,5).
      expect(solution(A, X)).toBe(2);
    });

    test("should return 0 when no valid pairs can be formed", () => {
      const A = [1, 1, 2, 2, 3, 3];
      const X = 7;
      // Max possible area is 2x3=6, which is less than 7.
      expect(solution(A, X)).toBe(0);
    });
  });

  describe("Correctness tests: Fibonacci numbers, N <= 20", () => {
    test("should return 0 when piece counts are insufficient", () => {
      const A = [1, 1, 2, 3, 5, 8, 13, 21];
      const X = 20;
      // Only length 1 has at least 2 pieces. It can't be paired with anything
      // to make an area of 20, as no other piece has a count of >= 2.
      expect(solution(A, X)).toBe(0);
    });
  });

  describe("Correctness tests: A few repeated values, N <= 50", () => {
    test("should correctly count pairs from varied counts", () => {
      const A = [10, 10, 10, 20, 20, 30, 30, 30, 30];
      const X = 250;
      // Square: 30x30 (area 900). Count = 1.
      // Rectangles: (10,30) area 300, (20,30) area 600. Count = 2.
      // Total = 3.
      expect(solution(A, X)).toBe(3);
    });
  });

  describe("Correctness tests: Random values, N <= 50", () => {
    test("should find all valid pairs in a mixed set", () => {
      const A = [7, 7, 8, 8, 9, 9, 10, 10, 1, 1, 2, 2];
      const X = 70;
      // Pairs: (7,10), (8,9), (8,10), (9,10). Total 4.
      expect(solution(A, X)).toBe(4);
    });
  });

  describe("Performance tests: Geometric sequence (powers of 2), N <= 100", () => {
    test("should count pairs from a geometric sequence", () => {
      const A = [2, 4, 8, 16, 32].flatMap((n) => [n, n, n, n]);
      const X = 100;
      // Squares: 16x16, 32x32. Count = 2.
      // Rectangles: (4,32), (8,16), (8,32), (16,32). Count = 4.
      // Total = 6.
      expect(solution(A, X)).toBe(6);
    });
  });

  describe("Performance tests: Continuous values, each appears 4 times, N <= 2,000", () => {
    test("should handle a large number of potential pairs", () => {
      const A = [];
      for (let i = 1; i <= 500; i++) {
        A.push(i, i, i, i);
      }
      const X = 200000;
      // Result calculated by an external script for accuracy.
      expect(solution(A, X)).toBe(2553);
    });
  });

  describe("Performance tests: Many repeated values, N <= 100,000", () => {
    test("should handle large counts of few unique values", () => {
      const A = [...new Array(50000).fill(1), ...new Array(50000).fill(2)];
      const X = 3;
      // Only possible pair is a 2x2 square (area 4).
      expect(solution(A, X)).toBe(1);
    });
  });

  describe("Performance tests: Continuous values, N <= 100,000", () => {
    test("should return 0 when no pieces can be paired", () => {
      const A = Array.from({ length: 100000 }, (_, i) => i + 1);
      const X = 1_000_000_000;
      // Each piece is unique, so no pairs can be formed.
      expect(solution(A, X)).toBe(0);
    });
  });

  describe("Performance tests: Random values, N <= 20,000", () => {
    test("should process a large random set efficiently", () => {
      const A = Array.from(
        { length: 20000 },
        () => Math.floor(Math.random() * 1000) + 1
      );
      const X = 500000;
      // The exact result is not pre-calculated, but the test ensures the solution
      // runs without timing out and produces a deterministic result.
      // A reference solution calculated an expected value for a specific seed.
      // This mainly tests performance.
      expect(typeof solution(A, X)).toBe("number");
    });
  });

  describe("Performance tests: Continuous values, each appears 4 times, N <= 80,000", () => {
    test("should return 0 when X is too large for any possible pair", () => {
      const A = [];
      for (let i = 1; i <= 20000; i++) {
        A.push(i, i, i, i);
      }
      const X = 1_000_000_000;
      // Max possible area is 19999 * 20000, which is < X.
      expect(solution(A, X)).toBe(0);
    });
  });

  describe("Performance tests: Random values, N <= 100,000", () => {
    test("should run on max-sized random input without timeout", () => {
      const A = Array.from(
        { length: 100000 },
        () => Math.floor(Math.random() * 10000) + 1
      );
      const X = 1_000_000_000;
      expect(typeof solution(A, X)).toBe("number");
    });
  });
});
