const { insertionSort } = require("../algos/insertion_sort");

describe("sort an array using the insertion sort method", () => {
  it("should sort in increasing order", () => {
    expect(insertionSort([8, 5, 2, 9, 5, 6, 3])).toBe([2, 3, 5, 5, 6, 8, 9]);
    expect(insertionSort([1])).toBe([1]);
    expect(insertionSort([3, 1, 2])).toBe([1, 2, 3]);
    expect(insertionSort([5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1])).toBe([
      -10, -8, -6, -2, -2, -1, 1, 1, 2, 2, 3, 5, 9,
    ]);
  });
});
