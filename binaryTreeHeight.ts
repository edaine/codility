export class Tree {
  x: number | null;
  l: Tree | null;
  r: Tree | null;

  constructor(
    x: number | null = 0,
    l: Tree | null = null,
    r: Tree | null = null
  ) {
    this.x = x;
    this.l = l;
    this.r = r;
  }
}

function findLastLeaf(T: Tree | null, height: number): number {
  if (T === null) return height;

  return Math.max(findLastLeaf(T.l, height + 1), findLastLeaf(T.r, height + 1));
}

export function solution(T: Tree): number {
  if (T.x === null) return -1;
  if (T.l === null && T.r === null) return 0;

  const maxHeight = Math.max(findLastLeaf(T.l, 0), findLastLeaf(T.r, 0));

  return maxHeight;
}
