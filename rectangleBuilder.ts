/*
export function solution(A: number[], X: number): number {
  let unique = 0;
  const pieceCount = new Map<number, number>();
  for (const length of A) {
    pieceCount.set(length, (pieceCount.get(length) ?? 0) + 1);
  }

  const validLengths = Array.from(pieceCount.keys())
    .filter((l) => (pieceCount.get(l) ?? 0) >= 2)
    .sort((a, b) => a - b);

  const permutations = new Map<string, number>();
  for (let l = 0; l < validLengths.length; l++) {
    const side1 = validLengths[l];

    validLengths.slice(l).forEach((side2) => {
      if (
        permutations.get(`${side1} * ${side2}`) === undefined &&
        permutations.get(`${side2} * ${side1}`) === undefined
      ) {
        if (side2 >= Math.ceil(X / side1)) {
          if (
            (side1 === side2 && pieceCount[`${side2}`] >= 4) ||
            side1 !== side2
          ) {
            permutations.set(`${side1} * ${side2}`, side1 * side2);
            unique++;
            if (unique > 1_000_000_000) return -1;
          }
        }
      }
    });
  }

  return unique;
}
/** */

/*
export function solution(A: number[], X: number): number {
  let unique = 0;

  type tplotOptions = {
    [key: string]: number;
  };

  // const pieceCount = new Map<number, number>();
  // for (const length of A) {
  //   pieceCount.set(length, (pieceCount.get(length) ?? 0) + 1);
  // }

  // const validSizes = Array.from(pieceCount.keys())
  //   .filter((s) => pieceCount.get(s) >= 2)
  //   .map((s) => Number(s))
  //   .sort((a, b) => a - b);

  const pieceCount: tplotOptions = {};
  for (const size of A) {
    pieceCount[`${size}`] = (pieceCount[`${size}`] ?? 0) + 1;
  }

  const validSizes = Object.keys(pieceCount)
    .filter((s) => pieceCount[`${s}`] >= 2)
    .map((s) => Number(s))
    .sort((a, b) => a - b);

  console.log(validSizes, validSizes.length);

  const permutations: tplotOptions = {};
  for (let l = 0; l < validSizes.length; l++) {
    const side1 = validSizes[l];

    validSizes.slice(l).forEach((side2) => {
      if (side2 >= X / side1) {
        if (
          (side1 === side2 && pieceCount[`${side2}`] >= 4) ||
          side1 !== side2
        ) {
          permutations[`${side1} * ${side2}`] = side1 * side2;
          unique++;

          if (unique > 1_000_000_000) return -1;
        }
      }
    });
  }

  return unique;
}
/** */

export function solution(A: number[], X: number): number {
  let uniquePairs = 0;

  const pieceCount = new Map<number, number>();
  for (const length of A) {
    pieceCount.set(length, (pieceCount.get(length) ?? 0) + 1);
  }

  const validLengths = Array.from(pieceCount.keys())
    .filter((l) => (pieceCount.get(l) ?? 0) >= 2)
    .sort((a, b) => a - b);

  for (let i = 0; i < validLengths.length; i++) {
    const side1 = validLengths[i];

    if (side1 * side1 >= X && (pieceCount.get(side1) ?? 0) >= 4) {
      uniquePairs++;
      if (uniquePairs > 1_000_000_000) return -1;
    }

    const minSide2 = Math.ceil(X / side1);
    let floor = i + 1;
    let ceil = validLengths.length - 1;
    let firstValidIndex = -1;

    while (floor <= ceil) {
      const mid = Math.floor((floor + ceil) / 2);
      if (validLengths[mid] >= minSide2) {
        firstValidIndex = mid;
        ceil = mid - 1;
      } else {
        floor = mid + 1;
      }
    }

    if (firstValidIndex !== -1) {
      for (let j = firstValidIndex; j < validLengths.length; j++) {
        uniquePairs++;
        if (uniquePairs > 1_000_000_000) return -1;
      }
    }
  }

  return uniquePairs;
}
/** */
