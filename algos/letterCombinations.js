/* 
Leetcode problem 17

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

1:            2: a b c    3: d e f

4: g h i      5: j k l    6: m n o

7: p q r s    8: t u v    9: w x y z
 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

const map = {
  2 : ['a','b','c'],
  3 : ['d','e','f'],
  4 : ['g','h','i'],
  5 : ['j','k','l'],
  6 : ['m','n','o'],
  7 : ['p','q','r','s'],
  8 : ['t','u','v'],
  9 : ['w','x','y','z'],
}

const letterCombinations = digits => {
  //edge case in that digits is empty
  if(digits.length === 0) return [];

  //base case is that digits has a length of 1 --> just return out what the digit maps to
  if(digits.length === 1) return map[digits[0]];

  //Recurse:

  //get current letters array from first digit, recursivly call function on the rest of string, and setup an empty return array
  const currLetters = map[digits[0]];
  const outcomes = letterCombinations(digits.slice(1))
  const returnArr = [];
  //here I access each comboString within the outcomes array
  outcomes.forEach(comboString => {
    //then access each letter within the current letter array
      currLetters.forEach(letter => {
          //and push each combo of letter and comob string into the returnArr
          returnArr.push(letter + comboString);
      })
  })
  
    return returnArr;
}
console.log(letterCombinations('259'));
module.exports = { letterCombinations }