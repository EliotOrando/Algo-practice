/* 
Leetcode 13:
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. I
nstead, the number four is written as IV. Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

//iterative solution

const romanValue = {
  'I' : 1,
  'V' : 5,
  'X' : 10,
  'L' : 50,
  'C' : 100,
  'D' : 500,
  'M' : 1000,
}

const romanToInt = (string) => {
  //solution for iterative is to iterate over all characters in the string and add in their values to the total.
  let total = 0;
    for(let i = 0; i < string.length -1 ; i++){
        let currVal = romanValue[string[i]], nextVal = romanValue[string[i+1]];
        //this is where the magic happens. If the current value is LESS than the next element, we subtract it's value from total
        //instead of adding it in (i.e. IV  = 4 --> 5 (from the V) MINUS 1 (from the I))
        currVal < nextVal ? total -= currVal : total += currVal;
    }
    //return out the total plus the last char's value in the string (we didn't get to it in for loob b/c we needed next values)
    return total + romanValue[string[string.length-1]];
}

//recursive solution (less optimal in both time and space. )

/* const romanToInt = (string) => {
  const exception = {
    'IV' : 4,
    'IX' : 9,
    'XL' : 40,
    'XC' : 90,
    'CD' : 400,
    'CM' : 900,
  }

  if(string.length === 0) return 0;
  //alternate base case is that string length is 1
  if(string.length === 1) return romanValue[string];
  //recurse case
  //1. first check to make sure the first char isn't an exception 
  if(exception[string.slice(0,2)]) return exception[string.slice(0,2)] + romanToInt(string.slice(2));
  //2. return the curent value plus the rest of the string if it is not an exception
  else return romanValue[string[0]] + romanToInt(string.slice(1));
} */

module.exports = { romanToInt };