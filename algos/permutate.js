/*
Leetcode problem 46 - Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
*/

const permutate = nums => {
  //base case- return when nums has lenght 1
  if(nums.length === 1) return [nums];
  //recursive case is that we need to permute on every element in nums

  const output = [];
  //iterate over nums, gettting access to each element 
  for(let i = 0; i < nums.length; i++){
    let curEle = nums[i];
    //slicedArr is an array holding every element EXCEPT curEle
    let slicedArr = nums.slice(0, i).concat(nums.slice(i+1));
    //recursivly call permute on the remaining elements in the array
    let comboArr = permutate(slicedArr);
    //add into output the element concated on the front of each possible returned array
    comboArr.forEach(arr => output.push([curEle,...arr]));
  }
  return output;
}

module.exports = {permutate};