export function solution(S: string): number {
  let charCount = 0;
  let letterIndex = {};
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

  [...S].forEach((c, index) => {
    if (letterIndex[c] === undefined) {
      letterIndex[c] = { first: index, last: index };
    } else {
      letterIndex[c].last = index;
    }
  });

  alphabet.forEach((c) => {
    if (
      letterIndex[c] !== undefined &&
      letterIndex[c.toUpperCase()] !== undefined
    ) {
      if (letterIndex[c].last < letterIndex[c.toUpperCase()].first) charCount++;
    }
  });

  return charCount;
}
