/*
Leetcode problem 8

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.

Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. 
This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.

Read in next the characters until the next non-digit character or the end of the input is reached. 
****The rest of the string is ignored****

Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).

If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. 
Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.

Return the integer as the final result.

Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/

const stringToInt = (s) => {
  //This regex matches leading whitespaces and any numbers (including a '-' or '+' sign before the numbers)
  const digitRegex = /^\s*-\d+|^\s*\d+|^\s*\+\d+/;
  //matching the number from string with regex
  let match = s.match(digitRegex);
  //if a match isn't found, return 0.
  if(!match) return 0;
  //the match method returns an array with some metadata- the actual match is found at index 0. 
  let numberString = match[0];
  //remove any leading whitespaces
  numberString = numberString.replaceAll(' ', '');
  //check the next character to see if it is - or +
  let isPositive = true;
  if(numberString[0] === '-' || numberString[0] === '+'){
      if(numberString[0] === '-') isPositive = false;
      numberString = numberString.slice(1);
  }
  //convert the digits into an integer 
  let output = parseInt(numberString);
  //change sign as necessary
  if(!isPositive) output = output * -1;
  //clamp if necessary 
  if(output > (2 ** 31) - 1) output = (2 ** 31) - 1;
  if(output < (-2) ** 31 ) output = (-2) ** 31;
  //return output
  return output;
}

module.exports = {stringToInt};