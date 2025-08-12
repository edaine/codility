export function solution(visits: string[]): number {
  let count = 0;
  let currentMaxDay = -1;
  enum DaysOfWeek {
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun,
  }

  visits.forEach((d) => {
    const dayValue = Object.values(DaysOfWeek).indexOf(d);
    if (currentMaxDay === -1 || dayValue <= currentMaxDay) {
      currentMaxDay = dayValue;
      count++;
    } else {
      currentMaxDay = dayValue;
    }
  });

  return count;
}
