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
  if(numRows === 1) return s;
  //setup a 2D array with array's representing rows - Initalize this array to have numRows number of arrays
  const zigZagArr = [];
  for(let i = 0; i < numRows; i++){
      zigZagArr.push([]);
  }
  let row = 0;
  let goingDown = true;

  //iterate over the string, accessing each character in the string
  for(let char of s){
      if(row === 0) goingDown = true;
      if(goingDown){
          //we will push the current element into the next array (vertical down logic)
          zigZagArr[row].push(char);
          //increment our row
          row++;
      }
   
      else if(numRows > 2){
          //do the logic to add in our ascending diagnol characters 
          zigZagArr.forEach((array, index) => {
              index === row ? array.push(char) : array.push('');
          });
          row--;
      }
      //handle if we are switching directions. 
      //there are 2 cases that we need to consider
      //first case is that we've gone down a whole row - our row === numRows 
      if(row === numRows){
          //reassign goingDown to false
          goingDown = false;
          //reassign the row to be 1 less than the zigzagarrs final elment indicies 
          row = zigZagArr.length - 2;
      }
        //second case is that we've gone diagonally UP all our rows - our row === 0. 
      else if(row === 0){
           //reassign going Down to true
           goingDown = true;
      }
      // console.log('new iteration completed. going Down:', goingDown);
      // console.log('2d Arr:', zigZagArr);
      // console.log('***************');
  }
  // console.log('finished 2D arr:', zigZagArr);

  //when our 2d array is finished - we can join the sub-array's into strings, and concat them to return our final string value. 
  const outputString = zigZagArr.reduce((accumulatedString, nextArr) => {
      const currString = nextArr.join('');
      return accumulatedString + currString;
  }, '');
  // console.log('outputString:', outputString);
  return outputString;
};

module.exports = {convert};