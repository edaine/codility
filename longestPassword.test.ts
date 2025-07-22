// You would like to set a password for a bank account. However, there are three restrictions on the format of the password:

// it has to contain only alphanumerical characters (a−z, A−Z, 0−9);
// there should be an even number of letters;
// there should be an odd number of digits.
// You are given a string S consisting of N characters. String S can be divided into words by splitting it at, and removing, the spaces. The goal is to choose the longest word that is a valid password. You can assume that if there are K spaces in string S then there are exactly K + 1 words.

// For example, given "test 5 a0A pass007 ?xy1", there are five words and three of them are valid passwords: "5", "a0A" and "pass007". Thus the longest password is "pass007" and its length is 7. Note that neither "test" nor "?xy1" is a valid password, because "?" is not an alphanumerical character and "test" contains an even number of digits (zero).

// Write a function:

// function solution(S: string): number;

// that, given a non-empty string S consisting of N characters, returns the length of the longest word from the string that is a valid password. If there is no such word, your function should return −1.

// For example, given S = "test 5 a0A pass007 ?xy1", your function should return 7, as explained above.

// Assume that:

// N is an integer within the range [1..200];
// string S consists only of printable ASCII characters and spaces.
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

import { expect, test } from "@jest/globals";
import { solution } from "./longestPassword";

describe("Password Validator Solution", () => {
  // --- Correctness Tests ---

  test('should return 7 for the example case "test 5 a0A pass007 ?xy1"', () => {
    const S = "test 5 a0A pass007 ?xy1";
    expect(solution(S)).toBe(7);
  });

  test("should return -1 if no valid password exists", () => {
    const S = "test ?xy1 wordswithoutdigits";
    expect(solution(S)).toBe(-1);
  });

  test("should return -1 for a word with odd letters and odd digits", () => {
    const S = "a1";
    expect(solution(S)).toBe(-1);
  });

  test("should return -1 for a word with even letters and even digits", () => {
    const S = "ab12";
    expect(solution(S)).toBe(-1);
  });

  test("should correctly handle a single valid word", () => {
    const S = "password123"; // 8 letters (even), 3 digits (odd)
    expect(solution(S)).toBe(11);
  });

  test("should correctly handle a word with only digits", () => {
    const S = "13579"; // 0 letters (even), 5 digits (odd)
    expect(solution(S)).toBe(5);
  });

  test("should return -1 for a word with only even digits", () => {
    const S = "1234";
    expect(solution(S)).toBe(-1);
  });

  test("should correctly handle a word with only letters", () => {
    const S = "even"; // 4 letters (even), 0 digits (not odd) -> invalid
    expect(solution(S)).toBe(-1);
  });

  test("should handle multiple spaces between words", () => {
    const S = "word1  valid123   another";
    expect(solution(S)).toBe(5);
  });

  test("should return -1 for an empty string input (after split)", () => {
    // A string of only spaces would result in empty strings in the array
    const S = "   ";
    expect(solution(S)).toBe(-1);
  });

  test("one_word", () => {
    const S = "zaq123edc";
    expect(solution(S)).toBe(9);
  });

  // --- NEW: Tricky Edge Cases for Invalid Characters ---

  test("should handle invalid characters at the end of a potential password", () => {
    // "passw0rd1!" is invalid, so the longest valid word is "a0A".
    expect(solution("a0A passw0rd1!")).toBe(3);
  });

  test("should handle invalid characters at the start or middle of a word", () => {
    // Both "?v4lid" and "an0ther-word" are invalid.
    expect(solution("?v4lid an0ther-word")).toBe(-1);
  });

  test("should treat a word with an embedded invalid character as one invalid word", () => {
    // "a0A!longestpass123" is a single invalid word. "word" is also invalid.
    expect(solution("word a0A!longestpass123")).toBe(-1);
  });

  test("should return -1 for a word with even letters and zero (even) digits", () => {
    // "test" has 4 letters (even) but 0 digits (also even), so it's invalid.
    expect(solution("test")).toBe(-1);
  });

  // --- Performance Tests ---

  test("should handle the maximum string length (N=200) efficiently", () => {
    // Create a long string close to the 200 character limit.
    // The longest valid password is at the end to test full iteration.
    const longInvalidWord = "a".repeat(10);
    const manyInvalidWords = (longInvalidWord + " ").repeat(15); // 15 * 11 = 165 chars
    const finalValidWord = "validpassword1"; // 13 letters (odd), 1 digit (odd) -> invalid
    const longestValidWord = "superlongvalidpass123"; // 18 letters (even), 3 digits (odd) -> valid (21 chars)

    const S = manyInvalidWords + finalValidWord + " " + longestValidWord; // ~165 + 14 + 21 = 200

    // For simple performance checks, we can time the execution.
    console.time("Performance Test (N=200)");
    const result = solution(S);
    console.timeEnd("Performance Test (N=200)");

    expect(result).toBe(21);
  });

  test("should handle a single very long word correctly", () => {
    // A single word that is 199 characters long
    const S = "a".repeat(198) + "1"; // 198 letters (even), 1 digit (odd)
    expect(solution(S)).toBe(199);
  });
});
