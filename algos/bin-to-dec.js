/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

1 -> 1
10 -> 2
100 -> 4
1000 -> 8
10000 -> 16


For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

//each character that is a 1 represents 2 ^ x power where x is the length of the string - 1. 
function binToDec(binString){
  //base case is that the string's length is 1
  if(binString.length === 1) return Number(binString);

  //else we need to retrun the  binary's digit representation as a number plus the recursive call of the slice
  else{
    //calculate the value of the current digit
    const currentDigitNumber = binString[0] * (2**(binString.length-1));
    //slice that digit off the string
    const slicedBinString = binString.slice(1);
    //recursivly call the function with the new shortened string length
    return currentDigitNumber + binToDec(slicedBinString);
  }
}



module.exports = {binToDec};