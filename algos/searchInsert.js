/*
Leetcode problem 35

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

const searchInsert = (nums, target) => {
  //edge case is that target needs to be inserted at the beginning or the end of nums
  if(target < nums[0]) return 0;
  if(target > nums[nums.length - 1]) return nums.length;

  //else we need to do the spliting to find the index. 
  const findInsertIndex = (numsArr, priorIndicies = 0) => {
    //base case is that the target is at the beginning of the numsArr. 
    if(numsArr[0] === target) return priorIndicies;

    //split the arr in half (to achieve O(log(n)) time complexity)
    const leftArr = numsArr.slice(0, numsArr.length/2);
    const rightArr = numsArr.slice(numsArr.length/2);
    //if the target is in between the two array's return the index
    if(leftArr[leftArr.length -1] < target && target < rightArr[0]) return priorIndicies + leftArr.length;

    //else we do recursion
    //if the target is greater than or equal to right arr
    if(target >= rightArr[0]) return findInsertIndex(rightArr, priorIndicies+leftArr.length);
    else return findInsertIndex(leftArr, priorIndicies);
  }

  return findInsertIndex(nums);
};

module.exports = { searchInsert };