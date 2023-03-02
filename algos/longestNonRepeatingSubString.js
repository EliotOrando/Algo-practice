/* Given a string s, find the length of the longest substring without repeating characters.

*** Example 1 ***
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*** Example 2 ***
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

*** Example 3 ***
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const longestNonRepeatingSubString = (s) => {
  //creating a set to hold the characters in my substring
  const chars = new Set();
  //create longest variable to find the length of my nonRepeating substring
  let longest = 0;
  //initialize i and j (two pointers moving through my string)
  let i = 0, j = 0;
  //iterate over the string
  while(j < s.length){
      //This conditional checks to see if the set has the character we are currently looking at s[j]
      if(chars.has(s[j])){
        //if so, we delete s[i] (NOT s[j]) from the set, and increment i.
        chars.delete(s[i]);
        i++;
      }
      else{
        //else we don't have this character yet, so we add the character ingo the set
        chars.add(s[j]);
        //reassign longest to the max of longest and our set's size
        longest = Math.max(longest, chars.size);
        //and increment j
        j++;
      }
  }
  //return the length of the longest substring when we're done with our loop. 
  return longest;
};

module.exports = {longestNonRepeatingSubString}