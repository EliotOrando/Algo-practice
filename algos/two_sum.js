//linear time complexit, linear space complexity 
const twoSum = (nums, target) => {
  //object map holding properties where key = difference and value = index
  const map = {};
  for(let i = 0; i < nums.length; i++){
      //check to see if our number currently exists in the map
      if(map[nums[i]] || map[nums[i]] === 0) return [map[nums[i]], i];
      else {
          let diff = target - nums[i];
          map[diff] = i;
      }
  }
  return -1;
};

module.exports = {twoSum}