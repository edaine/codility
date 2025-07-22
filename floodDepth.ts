// export function solution(A: number[]): number {
//   let maxDepth = 0;
//   let groupStart = 0;
//   let groupMin = 0;

//   for (let index = 0; index < A.length; index++) {
//     const floor = A[index];

//     if (!groupStart) {
//       groupStart = floor;
//     } else {
//       if (!groupMin || groupMin > floor) {
//         groupMin = floor;
//       }

//       if (groupStart < floor) {
//         if (maxDepth < groupStart - groupMin) {
//           maxDepth = groupStart - groupMin;
//         }
//         groupStart = floor;
//         groupMin = 0;
//       } else {
//         if (maxDepth < floor - groupMin) {
//           maxDepth = floor - groupMin;
//         }
//       }
//     }
//   }

//   return maxDepth;
// }

export function solution(A: number[]): number {
  let maxDepth = 0;

  if (A.length > 2) {
    let valleyStart = -1;
    let valleyEnd = -1;
    let valleyMin = 0;

    for (let index = 0; index < A.length; index++) {
      const floor = A[index];
      if (valleyStart === -1) {
        valleyStart = index;
        continue;
      }

      if (!valleyMin || valleyMin > floor) {
        valleyMin = floor;
      }

      if (floor > A[valleyStart] || index + 1 === A.length) {
        valleyEnd = index;

        if (valleyStart + 1 !== valleyEnd)
          maxDepth = Math.max(
            maxDepth,
            Math.min(A[valleyStart], A[valleyEnd]) - valleyMin
          );
        valleyStart = index;
        valleyEnd = -1;
        valleyMin = 0;
      } else {
        maxDepth = Math.max(maxDepth, floor - valleyMin);
      }
    }
  }

  return maxDepth;
}
