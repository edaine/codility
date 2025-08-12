// export function solution(S: string, T: string): number {
//   if (S === T) return 0;

//   const N = S.length;
//   let moves = -1;
//   let targetS = S.split("");
//   const targetT = T.split("");

//   let k = 0;
//   let mismatchFound = false;
//   while (targetS.join("") !== targetT.join("")) {
//     if (k <= N - 2) {
//       mismatchFound = false;
//       if (targetS[k] !== targetT[k] && targetS[k + 1] !== targetT[k + 1]) {
//         mismatchFound = true;
//         const sK = Number(targetS[k]) + 1 <= 9 ? Number(targetS[k]) + 1 : 0;
//         const sKplus1 =
//           Number(targetS[k + 1]) + 1 <= 9 ? Number(targetS[k + 1]) + 1 : 0;

//         moves++;
//         targetS[k] = `${sK}`;
//         targetS[k + 1] = `${sKplus1}`;
//         if (targetS.join("") === targetT.join("")) break;
//       }
//     }

//     if (!mismatchFound) break;

//     k++;
//     if (k > N - 2) k = 0;
//   }

//   return moves;
// }

export function solution(S: string, T: string): number {
  if (S === T) return 0;

  const N = S.length;
  let sArray = S.split("").map((c) => Number(c));
  let tArray = T.split("").map((c) => Number(c));
  let totalMoves = 0;
  let moves = 0;

  for (let k = 0; k < N; k++) {
    if (k === N - 1) {
      if (tArray[k] !== sArray[k]) {
        totalMoves = -1;
        break;
      }
    }

    const currentSk = sArray[k];
    const currentSkp1 = sArray[k + 1];
    moves = (tArray[k] + 10 - currentSk) % 10;
    totalMoves += moves;

    sArray[k] = (currentSk + moves) % 10;
    sArray[k + 1] = (currentSkp1 + moves) % 10;
  }

  return totalMoves;
}
