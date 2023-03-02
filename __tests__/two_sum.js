const {twoSum} = require('../algos/two_sum');

describe('TwoSum tests', () => {
  it('should handle cases arrays of length 0 and 1', () => {
    expect(twoSum([], 5)).toBe(-1);
    expect(twoSum([], 5)).toBe(-1);
  });
  it('should handle cases where there is no solution', () => {
    expect(twoSum([1, 6, 2, 7], 5)).toBe(-1);
  });
  it('should find the indicies of values that add up to target', () => {
    expect(JSON.stringify(twoSum([1, 2, 3, 5], 5))).toBe('[1,2]');
    expect(JSON.stringify(twoSum([10, 15, 20, 4, 1], 5))).toBe('[3,4]');
  });
});