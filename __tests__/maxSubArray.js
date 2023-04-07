const { maxSubArray } = require('../algos/maxSubArray.js');

describe('maxSubArray tests:', ()=> {
  let nums;
  it('should handle arrays of various lengths', () => {
    nums = [5,4,-1,7,8];
    expect(maxSubArray(nums)).toBe(23);
    nums = [1];
    expect(maxSubArray(nums)).toBe(1);
    nums = [-2,1,-3,4,-1,2,1,-5,4];
    expect(maxSubArray(nums)).toBe(6);
    nums = [-5];
    expect(maxSubArray(nums)).toBe(-5);
    nums = [0,-5, -8];
    expect(maxSubArray(nums)).toBe(0);
  });
});