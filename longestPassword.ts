export function solution(S: string): number {
  const passwords = S.split(/\s+/)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  for (const p of passwords) {
    if (!/^[a-zA-Z0-9]+$/.test(p)) continue;

    let letterCount = 0;
    let digitCount = 0;
    for (const c of p) {
      if (/[a-zA-Z]/.test(c)) {
        letterCount++;
        continue;
      }

      digitCount++;
    }

    const hasEvenLetters = letterCount % 2 === 0;
    const hasOddDigits = digitCount % 2 !== 0;

    if (hasEvenLetters && hasOddDigits) return p.length;
  }

  return -1;
}
