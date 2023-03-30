const { searchInsert } = require('../algos/searchInsert');

describe('search insert tests:', () => {
  it('should handle finding a target that is less than the initial value in nums', () => {
    expect(searchInsert([2, 3, 4], 1)).toBe(0);
    expect(searchInsert([6, 10, 22], 5)).toBe(0);
  });
  it('should handle finding a target that is greater than the last value in nums', () => {
    expect(searchInsert([2, 3, 4], 5)).toBe(3);
    expect(searchInsert([6, 10, 22], 54)).toBe(3);
  });
  it('should handle finding the index of a target that exists in nums', () => {
    expect(searchInsert([1], 1)).toBe(0);
    expect(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toBe(8);
    expect(searchInsert([4, 8, 33, 654, 2234], 33)).toBe(2);
  });
  it('should handle finding the index of a target that DOES NOT exist in nums', () => {
    expect(searchInsert([1, 4, 6, 8], 5)).toBe(2);
    expect(searchInsert([5, 23, 55], 30)).toBe(2);
  })
});