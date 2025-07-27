// export function solution(N: number) {
//   let enable_print: number = N % 10;
//   while (N > 0) {
//     if (enable_print == 0 && N % 10 != 0) {
//       enable_print = 1;
//     } else if (enable_print !== 0) {
//       process.stdout.write((N % 10).toString());
//     }

//     N = Math.floor(N / 10);
//   }
// }

export function solution(N: number): string {
  let output = "";
  let enable_print: number = N % 10;
  while (N > 0) {
    if (enable_print != 0 || N % 10 != 0) {
      output += (N % 10).toString();
    }

    N = Math.floor(N / 10);
  }

  return output;
}
