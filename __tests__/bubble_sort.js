const { bubble_sort } = require("../algos/bubble_sort");

describe("bubble sort tests:", () => {
  it("should return empty array", () => {
    expect(bubble_sort([])).toEqual([]);
  });
  it("should return single character", () => {
    expect(bubble_sort([1])).toEqual([1]);
  });
  it("should return sorted array", () => {
    expect(bubble_sort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9]);
    expect(bubble_sort([2, 1])).toEqual([1, 2]);
    expect(bubble_sort([1, 3, 2])).toEqual([1, 2, 3]);
    expect(
      bubble_sort([
        -4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7,
        8,
      ])
    ).toEqual([
      -10, -7, -7, -6, -6, -5, -5, -4, -4, -4, -2, -1, 1, 3, 5, 5, 6, 8, 8, 10,
    ]);
    expect(
      bubble_sort([
        -7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8,
      ])
    ).toEqual([-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]);
    expect(
      bubble_sort([
        8, -6, 7, 10, 8, -1, 6, 2, 4, -5, 1, 10, 8, -10, -9, -10, 8, 9, -2, 7,
        -2, 4,
      ])
    ).toEqual([
      -10, -10, -9, -6, -5, -2, -2, -1, 1, 2, 4, 4, 6, 7, 7, 8, 8, 8, 8, 9, 10,
      10,
    ]);
  });
});
