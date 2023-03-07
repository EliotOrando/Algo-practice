/*
Given an integer x, return x with it's digits reversed. 

i.e. 

reverseInt(592) --> 295

reverseInt(-12) --> -21
*/

function reverseInt(x){
  //check if it's negative
  let isNegative = false;
  //if so, set isNegative bool to true, and reset number to positive
  if(x < 0){
      isNegative = true;
      x = Math.abs(x);
  }
  //turn num into string
  let numStr = x.toString();
  //turn string into arr
  let strArr = numStr.split('');
  //reverse arr
  strArr.reverse();
  //join into string
  numStr = strArr.join('');
  //turn back into num
  const returnNum = Number(numStr);
  //this line has to do with leetcode's restriction: If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
  if(returnNum > 2 ** 31 - 1 || returnNum < (-2) ** 31) return 0;
  if(isNegative) return -1 * returnNum;
  return returnNum;

};

module.exports = {reverseInt};