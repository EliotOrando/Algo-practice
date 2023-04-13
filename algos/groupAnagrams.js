/* 
Leetcode problem 49 - Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

/*
Overall Strategy:

-Utilize an object to map sorted strings to indicies in the output array (key == sorted string, value == index in output array)

-Iterate over the strings array and sort each string. We can compare the sorted strings to see if they are anagrams of eachtoher

-check to see if each sorted string exsits in the map- if it does, add the string to the proper index. 
if not, push a new array ontot he end of output with our string and update our map

-Return output

*/
const groupAnagrams = (strs) => {
  const outputArr = [];
  //this map holds keys of anagram srings (i.e. abt for bat and tab) and values of indicies where those anagrams are held. 
  const gramMap = {};
  strs.forEach(string => {
    //chaining split, sort, and join to create our sorted string. 
    let sortedString = string.split('').sort().join('');
    //checks to see if we've already run into an anagram for this string.
    if(gramMap[sortedString] !== undefined){
      outputArr[gramMap[sortedString]].push(string);
    } 
    //if no anagram yet, make an etnry into the gramMap to check future strings agains and push onto end of output array. 
    else{
      gramMap[sortedString] = outputArr.length;
      outputArr.push([string]);
    }
  });
  return outputArr;
}

module.exports = { groupAnagrams }