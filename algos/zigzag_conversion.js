/* 
Leetcode problem 6:

Write the code that will take a string and make a conversion given a number of rows --> string convert(string s, int numRows);

The conversion pattern follows the zigzag pattern going down first, then diagonally up and to the right. 

i.e. convert("PAYPALISHIRING", 4) --> "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I


*/

const convert = (s, numRows) => {
  //edge case if numRows is 1. 
  if(numRows === 1) return s;

  //setup a 2D array with array's representing rows - Initalize this array to have numRows number of arrays
  const zigZagArr = [];
  //add in numRows number of empty arrays
  for(let i = 0; i < numRows; i++){
      zigZagArr.push([]);
  }

  //initalize our row tracker to zero and goingDown to true. 
  let row = 0;
  let goingDown = true;

  //iterate over the string, accessing each character in the string
  for(let char of s){
      //if we're at row of zero- we need to start going down again. 
      if(row === 0) goingDown = true;
      //if we're going down, we do logic speficit to that movement direction. 
      if(goingDown){
          //we will push the current element into the next array (vertical down logic)
          zigZagArr[row].push(char);
          //increment our row
          row++;
      }
      //if we're going up, we do logic speific to that direction -- edge case happends when numRows is 2, so we handle that with a simple conditional
      else if(numRows > 2){
          //do the logic to add in our ascending diagnol characters 
          zigZagArr.forEach((array, index) => {
            //add in the character at the row we're add, add in am empty string for the other characters. 
              index === row ? array.push(char) : array.push('');
          });
          row--;
      }
      //handle if we are switching directions. 2 cases to consider
      //first case is that we've made it to then end of the rows. --> our row === numRows 
      if(row === numRows){
          //reassign goingDown to false
          goingDown = false;
          //reassign the row to be 1 less than the zigzagarrs final elment indicies (to get the row BEFORE the ending row).
          row = zigZagArr.length - 2;
      }
        //second case is that we've gone diagonally UP all our rows & row is now 0, we reassign it to true
      else if(row === 0) goingDown = true;
  }

  //when our 2d  array is finished- we can join the sub-array's into strings, and concat them to return our final string value. 
  return zigZagArr.reduce((accumulatedString, nextArr) => {
      const currString = nextArr.join('');
      return accumulatedString + currString;
  }, '');
};

module.exports = {convert};