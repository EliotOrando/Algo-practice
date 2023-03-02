/*
  Given an array of numbers and a target number,
  return an array containing the indicies of 2 numbers in the array that add up to the target.

  You may assume that each array will have no more than 1 solution, and you should return -1 if a solution is not found. 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> [0,1]
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> -1
  Rational: No elements inside the array sum up to the target number
*/

const twoSum = (nums, target) => {
  //object map holding properties where key = difference and value = index
  const map = {};
  for(let i = 0; i < nums.length; i++){
      //check to see if our number currently exists in the map. if so return an array of the index in the map and the current index
      if(map[nums[i]] || map[nums[i]] === 0) return [map[nums[i]], i];
      else {
        //else we calculate the difference, and then put that into our map object with key being difference and value being the index at which this value is found. 
          let diff = target - nums[i];
          map[diff] = i;
      }
  }
  //return -1 if we don't find a solution. 
  return -1;
};

module.exports = {twoSum}