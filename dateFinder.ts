export function solution(datePattern: string): string {
  let validDate = "xx-xx";
  const fullFormattedPattern = datePattern.replaceAll("?", "\\d");
  const monthPattern = new RegExp(fullFormattedPattern.split("-")[0], "g");

  const dateTable = [
    { month: "01", days: "31" },
    { month: "02", days: "28" },
    { month: "03", days: "31" },
    { month: "04", days: "30" },
    { month: "05", days: "31" },
    { month: "06", days: "30" },
    { month: "07", days: "31" },
    { month: "08", days: "31" },
    { month: "09", days: "30" },
    { month: "10", days: "31" },
    { month: "11", days: "30" },
    { month: "12", days: "31" },
  ];

  const monthMatches = dateTable.filter(
    (v: { month: string }) => v.month.match(monthPattern) !== null
  );

  for (const monthMatch of monthMatches.reverse()) {
    const fullDateMatch = Object.values(monthMatch).join("-");

    if (
      (fullDateMatch.match(new RegExp(fullFormattedPattern, "g")) || []).length
    ) {
      validDate = fullDateMatch;
      break;
    }

    const day = datePattern.split("-")[1];
    let fullDay = 0;
    if (day.match(/\\?[0-9]$/)) {
      //MM-?X
      fullDay = Number(day.replace("?", "2"));
    } else if (day.match(/^[0-2]\\?/)) {
      //MM-X?
      fullDay = Number(day.replace("?", "9"));
    } else if (day.match(/^[3]\\?/)) {
      //MM-X?
      fullDay = Number(day.replace("?", "0"));
    }

    if (fullDay > 0 && fullDay <= Number(monthMatch.days)) {
      // validDate = fullDateMatch;
      validDate = `${monthMatch.month}-${fullDay}`;
      break;
    }
  }

  return validDate;
}
