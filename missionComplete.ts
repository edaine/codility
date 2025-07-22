export function solution(D: number[], X: number): number {
  let minDays = D.length ? 1 : 0;
  let currentDayMissions = [D[0]];
  let minD = D[0];
  let maxD = D[0];

  for (let m = 1; m < D.length; m++) {
    minD = D[m] < minD ? D[m] : minD;
    maxD = D[m] > maxD ? D[m] : maxD;

    if (maxD - minD <= X) {
      currentDayMissions.push(D[m]);
    } else {
      currentDayMissions = [D[m]];
      minD = D[m];
      maxD = D[m];
      minDays++;
    }
  }

  return minDays;
}
