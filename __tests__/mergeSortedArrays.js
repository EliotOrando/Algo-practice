const { mergeSortedArrays } = require('../algos/mergeSortedArrays');

describe('merge sorted arrays tests', () => {
  let nums1;
  let nums2;
  it('should handle being passed in an empty array', () => {
    nums1 = [0], nums2 = [1];
    mergeSortedArrays(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
    nums1 = [1], nums2 = [];
    mergeSortedArrays(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });
  it('should handle merging arrays of various lengths', () => {
    nums1 = [1,2,3,0,0,0], nums2 = [4,5,6];
    mergeSortedArrays(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1,2,3,4,5,6]);
    
    nums1 = [4,5,6,0,0,0], nums2 = [1,2,3];
    mergeSortedArrays(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1,2,3,4,5,6]);

    nums1 = [2,5,8,9,0,0], nums2 = [1,35];
    mergeSortedArrays(nums1, 4, nums2, 2);
    expect(nums1).toEqual([1, 2, 5, 8, 9, 35]);
  })
});