// There is a string representing a date in "MM-DD" format, where MM denotes a month in a two-digit format and DD denotes a day in a two-digit format.
// Some digits were replaced by "?". Replace all the question marks with digits (0-9) in such a way as to obtain the latest possible date.

// Assume that the maximum number of days in each month is as follows:

//     | month     | number of days
// ----+-----------+-------------------
// 01  | January   | 31
// 02  | February  | 28
// 03  | March     | 31
// 04  | April     | 30
// 05  | May       | 31
// 06  | June      | 30
// 07  | July      | 31
// 08  | August    | 31
// 09  | September | 30
// 10  | October   | 31
// 11  | November  | 30
// 12  | December  | 31

// Write a function:

// class Solution { public String solution(String date);}

// that, given a string date, returns the latest valid date as a string in the format "MM-DD". If it is not possible to obtain any valid date, return the string "xx-xx".
// Examples:
// 1. Assuming date = "?1-31", the date is clearly from January (01) or
// November (11). Only January has 31 days, so the function should return "01-31".
// 2. Assuming date = "02-??", the date is clearly from February (02), which
// has 28 days. The function should return "02-28".
// 3. Assuming date = "??-4?", no month has at least 40 days. The function
// should return "xx-xx".
// 4. Assuming date = "09-31", the date is not valid. There are only 30 days in
// September, so the function should return "xx-xx".
// Assume that:
// • date consists of exactly five characters; the third one is "-*; the others are digits (0-9) or "?".
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

import { expect, test } from "@jest/globals";
import { solution } from "./dateFinder";

describe("solution for latest possible date", () => {
  // --- Examples from the problem description ---
  test('should return "01-31" for "?1-31"', () => {
    // Possible months are 01, 11. Nov (11) does not have 31 days. Jan (01) does.
    expect(solution("?1-31")).toBe("01-31");
  });

  test('should return "02-28" for "02-??"', () => {
    // Month is February, latest valid day is 28.
    expect(solution("02-??")).toBe("02-28");
  });

  test('should return "xx-xx" for "??-4?"', () => {
    // The day would be 40 or greater, which is impossible.
    expect(solution("??-4?")).toBe("xx-xx");
  });

  test('should return "xx-xx" for "09-31"', () => {
    // September only has 30 days. The given date is invalid.
    expect(solution("09-31")).toBe("xx-xx");
  });

  test('should return "11-30" for "?1-30"', () => {
    const date = solution("?1-30");
    expect(date).toEqual("11-30");
  });

  test('should return "02-21" for "02-?1"', () => {
    const date = solution("02-?1");
    expect(date).toEqual("02-21");
  });

  test('should return "12-31" for "??-?1"', () => {
    const date = solution("??-?1");
    expect(date).toEqual("12-31");
  });

  test('should return "09-29" for "0?-?9"', () => {
    const date = solution("0?-?9");
    expect(date).toEqual("09-29");
  });

  // --- General Wildcard Cases ---
  test('should return "12-31" for "??-??"', () => {
    // The latest possible date is Dec 31st.
    expect(solution("??-??")).toBe("12-31");
  });

  test('should return "12-31" for "1?-??"', () => {
    // Latest month starting with 1 is 12. Latest day is 31.
    expect(solution("1?-??")).toBe("12-31");
  });

  test('should return "09-30" for "0?-30"', () => {
    // Months starting with 0 that have 30 days: 09, 08, 07, etc. Latest is 09.
    expect(solution("0?-30")).toBe("09-30");
  });

  // --- Month-constrained Cases ---
  test('should return "12-29" for "?2-2?"', () => {
    // Possible months: 12, 02. Latest is 12.
    // Latest day in Dec starting with 2 is 29.
    expect(solution("?2-2?")).toBe("12-29");
  });

  test('should return "10-31" for "10-??"', () => {
    // Month is October, latest day is 31.
    expect(solution("10-??")).toBe("10-31");
  });

  // --- Day-constrained Cases ---
  test('should return "12-31" for "??-31"', () => {
    // Many months have 31 days, the latest is December (12).
    expect(solution("??-31")).toBe("12-31");
  });

  test('should return "12-30" for "??-30"', () => {
    // Many months have 30 days, the latest is December (12).
    expect(solution("??-30")).toBe("12-30");
  });

  test('should return "12-29" for "??-29"', () => {
    // All months except Feb have 29 days. Latest is December (12).
    expect(solution("??-29")).toBe("12-29");
  });

  test('should return "10-31" for "?0-3?"', () => {
    expect(solution("?0-3?")).toBe("10-31");
  });

  // --- Invalid Pattern Cases ---
  test('should return "xx-xx" for "13-01"', () => {
    // Month 13 is invalid.
    expect(solution("13-01")).toBe("xx-xx");
  });

  test('should return "xx-xx" for "04-31"', () => {
    // April does not have 31 days.
    expect(solution("04-31")).toBe("xx-xx");
  });

  test('should return "xx-xx" for "02-29"', () => {
    // February has 28 days (non-leap year).
    expect(solution("02-29")).toBe("xx-xx");
  });

  test('should return "xx-xx" for "??-00"', () => {
    // Day 00 is invalid.
    expect(solution("??-00")).toBe("xx-xx");
  });
});
