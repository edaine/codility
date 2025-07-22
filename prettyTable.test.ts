// The table can consist of many rows, and adjacent rows share an edge:
// +-----+-----+-----+-----+
// |    4|   35|   80|  123|
// +-----+-----+-----+-----+
// |12345|   44|    8|    5|
// +-----+-----+-----+-----+
// |   24|    3|   22|   35|
// +-----+-----+-----+-----+

// Your goal is to output a table containing all the numbers from a given array such that each row contains exactly K numbers. The last row can contain fewer numbers.

// Write a function:
// class Solution ‹ public void solution(intll A, int K); }
// that, given a non-empty array A consisting of N integers and an integer K, prints a string representing the formatted array. The numbers in the table should appear in the same order as the numbers in the array.

//  For A = 14, 35, 80, 123, 12345, 44, 8, 5, 24, 3, K = 4, the table would appear as follows:
// +-----+-----+-----+-----+
// |    4|   35|   80|  123|
// +-----+-----+-----+-----+
// |12345|   44|    8|    5|
// +-----+-----+-----+-----+
// |   24|    3|
// +-----+-----+

// The function shouldn't return any value.
// You can print a string to the output (without or with the end-of-line character) as follows:
// System.out.print ("sample string");
// System.out.println("whole line");
// Assume that:
// • N is an integer within the range [1.200];
// • K is an integer within the range [1.1,000,000,000);
// • each element of array A is an integer within the range

import { expect, test } from "@jest/globals";
import { solution } from "./prettyTable";

let consoleLogSpy;

beforeEach(() => {
  // Create a spy on console.log
  consoleLogSpy = jest.spyOn(console, "log");
});

afterEach(() => {
  // Restore the original console.log
  consoleLogSpy.mockRestore();
});

test("Pretty Table 1", () => {
  solution([4, 35, 80, 123, 12345, 44, 8, 5], 10);
  const prettyTable =
    "\
+-----+-----+-----+-----+-----+-----+-----+-----+\n\
|    4|   35|   80|  123|12345|   44|    8|    5|\n\
+-----+-----+-----+-----+-----+-----+-----+-----+\n";

  expect(consoleLogSpy).toHaveBeenCalledWith(prettyTable);
});

test("perfect fit", () => {
  solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35], 4);
  const prettyTable =
    "\
+-----+-----+-----+-----+\n\
|    4|   35|   80|  123|\n\
+-----+-----+-----+-----+\n\
|12345|   44|    8|    5|\n\
+-----+-----+-----+-----+\n\
|   24|    3|   22|   35|\n\
+-----+-----+-----+-----+\n";

  expect(consoleLogSpy).toHaveBeenCalledWith(prettyTable);
});

test("last row not enough numbers", () => {
  solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4);
  const prettyTable =
    "\
+-----+-----+-----+-----+\n\
|    4|   35|   80|  123|\n\
+-----+-----+-----+-----+\n\
|12345|   44|    8|    5|\n\
+-----+-----+-----+-----+\n\
|   24|    3|\n\
+-----+-----+\n";

  expect(consoleLogSpy).toHaveBeenCalledWith(prettyTable);
});

test("single number", () => {
  solution([4], 4);
  const prettyTable =
    "\
+-+\n\
|4|\n\
+-+\n";
});

test("single column", () => {
  solution([1, 10, 100], 1);
  const prettyTable =
    "\
+---+\n\
|  1|\n\
+---+\n\
| 10|\n\
+---+\n\
|100|\n\
+---+\n";

  expect(consoleLogSpy).toHaveBeenCalledWith(prettyTable);
});

test("empty table", () => {
  solution([], 4);
  const prettyTable = "";

  expect(consoleLogSpy).toHaveBeenCalledWith(prettyTable);
});
