// export function solution(A: number[]): number {
//   let inversions = 0;
//   const length = A.length;
//   for (let p = 0; p < length; p++) {
//     if (inversions > 1_000_000_000) return -1;

//     for (let q = p + 1; q < length; q++) {
//       if (A[q] < A[p]) inversions++;
//       if (inversions > 1_000_000_000) break;
//     }
//   }

//   return inversions;
// }

/**
 * A Fenwick Tree (or Binary Indexed Tree) is a data structure that can
 * efficiently update element values and calculate prefix sums in a table of numbers.
 */
class FenwickTree {
  private tree: number[];
  private size: number;

  constructor(size: number) {
    this.size = size + 1;
    this.tree = new Array(this.size).fill(0);
  }

  /**
   * Adds a value to the element at a given index.
   * @param index The 1-based index to update.
   * @param value The value to add.
   */
  update(index: number, value: number): void {
    // Traverse all ancestors of the index in the tree.
    while (index < this.size) {
      this.tree[index] += value;
      // The next ancestor is found by adding the last set bit.
      index += index & -index;
    }
  }

  /**
   * Calculates the cumulative sum of frequencies up to a given index.
   * @param index The 1-based index.
   * @returns The prefix sum up to the index.
   */
  query(index: number): number {
    let sum = 0;
    // Traverse all ancestors of the index.
    while (index > 0) {
      sum += this.tree[index];
      // The next ancestor is found by removing the last set bit.
      index -= index & -index;
    }
    return sum;
  }
}

/**
 * Computes the number of inversions in array A using a Fenwick Tree.
 * An inversion is a pair of indexes (P, Q) such that P < Q and A[Q] < A[P].
 *
 * @param A The input array of integers.
 * @returns The number of inversions, or -1 if it exceeds 1,000,000,000.
 */
export function solution(A: number[]): number {
  const limit = 1_000_000_000;
  if (A.length === 0) {
    return 0;
  }

  // --- Step 1: Coordinate Compression ---
  // A Fenwick Tree works on a compact range of indices (e.g., 1 to N).
  // The numbers in A can be very large, so we map them to smaller, consecutive
  // integers (ranks) while preserving their relative order.
  const sortedUnique = Array.from(new Set(A)).sort((a, b) => a - b);
  const ranks = new Map<number, number>();
  // We use 1-based indexing for the Fenwick Tree.
  for (let i = 0; i < sortedUnique.length; i++) {
    ranks.set(sortedUnique[i], i + 1);
  }

  // --- Step 2: Initialize Fenwick Tree and Count Inversions ---
  const fenwickTree = new FenwickTree(sortedUnique.length);
  let inversions = 0;

  // --- Step 3: Iterate and Count ---
  // We iterate through the array from RIGHT to LEFT.
  for (let i = A.length - 1; i >= 0; i--) {
    const value = A[i];
    const rank = ranks.get(value)!;

    // **KEY INSIGHT**: For the current element A[i], an inversion is formed
    // with any element A[j] where j > i (i.e., to its right) and A[j] < A[i].
    // Since we are iterating from right to left, we have already processed all
    // elements to the right of A[i]. We need to count how many of them are smaller.
    // This is equivalent to querying the sum of frequencies of elements with a
    // rank smaller than the current element's rank.
    const smallerElementsToTheRight = fenwickTree.query(rank - 1);
    inversions += smallerElementsToTheRight;

    if (inversions > limit) {
      return -1;
    }

    // After processing A[i], we mark its presence in the Fenwick Tree
    // by updating the frequency at its rank.
    fenwickTree.update(rank, 1);
  }

  return inversions;
}
/** */
