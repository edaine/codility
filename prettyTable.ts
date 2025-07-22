function printEdge(maxLength: number): string {
  return new Array(maxLength).fill("-").join("");
}

function padLeft(value: string, maxLength: number): string {
  const spaces = new Array(maxLength - value.length).fill(" ");

  return `${spaces.join("")}${value}`;
}

export function solution(A: number[], K: number): void {
  const maxValueLength = Math.max(...A).toString().length;
  const formattedValues = A.map((v) => padLeft(`${v}`, maxValueLength));

  let outputString = "";
  let digitsInRow = 0;
  let printIndex = 0;
  for (let i = 0; i < A.length; i = printIndex) {
    outputString +=
      "+" +
      new Array(Math.min(A.length, K))
        .fill(printEdge(maxValueLength) + "+")
        .join("") +
      "\n" +
      "|";

    digitsInRow = 0;
    while (digitsInRow !== K && i + digitsInRow < A.length) {
      outputString += formattedValues[i + digitsInRow] + "|";
      digitsInRow++;
    }

    outputString += "\n";
    printIndex += digitsInRow;
  }

  if (A.length)
    outputString +=
      "+" +
      new Array(digitsInRow).fill(printEdge(maxValueLength) + "+").join("") +
      "\n";

  console.log(outputString);
}
