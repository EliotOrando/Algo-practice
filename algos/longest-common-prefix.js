/*  Leetcode problem 14 - Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

function should handle 0 <= strs.length
*/

const longestCommonPrefix = (strs) => {
  if(!strs.length) return '';
  
  let prefix = strs[0];

  //iterate over strs, getting access to each string in str
  for(let i = 1; i < strs.length; i++){

    //iterate over the characters of the prefix we're looking at
    for(let j = 0; j < prefix.length; j++){

      //first check to make sure we haven't exceeded strs[i] length
      if(j >= strs[i].length){
        prefix = prefix.slice(0,j)
        break;
      }

      //compare the characters - if match, continue
      if(prefix[j] === strs[i][j]) continue;
  
      //if no match, slice the prefix and reassign
      //break outta loop
      else{
        prefix = prefix.slice(0,j);
        break;
      }
      
    }
  }
  return prefix;
}

module.exports = {longestCommonPrefix};