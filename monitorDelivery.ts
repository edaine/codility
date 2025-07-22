export function solution(D: number[], C: number[], P: number): number {
  let minDeliveries = 0;

  const sortedDistanceList = D.map((distance, index) => {
    return { distance, count: C[index] };
  }).sort(
    (a: { distance: number }, b: { distance: number }) =>
      a.distance - b.distance
  );

  let totalCount = 0;
  do {
    const { count } = sortedDistanceList[minDeliveries];
    if (totalCount + count <= P) {
      totalCount += count;
      minDeliveries++;
    } else break;
  } while (totalCount < P && minDeliveries < sortedDistanceList.length);

  return minDeliveries;
}
