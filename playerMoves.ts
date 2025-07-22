export function solution(S: string): number {
  let minMoves = 0;
  const moveList = S.split("");
  let field: string[][] = new Array(3)
    .fill("")
    .map(() => new Array(S.length + 2).fill(""));

  moveList.forEach((move, index) => {
    field[1][index + 1] = move;
  });

  field[1].forEach((direction, index) => {
    let newColumn = -1;
    let newRow = -1;

    switch (direction) {
      case ">":
        newColumn = index + 1;
        break;
      case "<":
        newColumn = index - 1;
        break;
      case "^":
        newRow = 0;
        break;
      case "v":
        newRow = 2;
        break;
    }

    if (newColumn !== -1 && field[1][newColumn] === "") {
      field[1][newColumn] = "o";
      field[1][index] = "";
      minMoves++;
    }

    if (newRow !== -1 && field[newRow][index] === "") {
      field[newRow][index] = "o";
      field[1][index] = "";
      minMoves++;
    }
  });

  minMoves = field.flatMap((r) => r.filter((p) => p === "o")).length;
  return minMoves;
}
