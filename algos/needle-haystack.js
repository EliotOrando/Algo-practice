/*
Leetcode problem 28
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

const needleHaystack = (haystack, needle) => {
  //edge case in cas the needle is the haystack
  if(haystack === needle) return 0;
    //iterate over the haystac, checking each substring at the index to see if it occurs. 
    for(let i = 0; i <= (haystack.length - needle.length); i++){
        console.log('current slice', haystack.slice(i, i + needle.length));
        if(needle === haystack.slice(i, i + needle.length)) return i;
    }
    return -1;
}

module.exports = { needleHaystack }