/* 
Leetcode problem 9:

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

*/

const numPalindrome = (x) => {
  if(x < 0) return false;
  const numString = x.toString();
  console.log('numString:', numString);
  let left = 0, right = numString.length -1;
  while(left < right){
      if(numString[left] !== numString[right]) return false;
      left++;
      right--;
  }
  return true;
}

module.exports = {numPalindrome}