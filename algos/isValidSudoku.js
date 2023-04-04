/*
Leetcode problem 36

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. 
Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

const isValidSudoku = (board) => {
  //nums is an object I'll use repeatedly to keep track of the appearneces of numbers in each row, column, or 3X3 box
  const nums = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false
  }
  //This helper function will reset all the properties in num to false so I can re-use nums over and over again
  const setAllPropsToFalse = (obj) => {
      for(let num in obj){
          obj[num] = false
      }
  }

  //ROW CHECK -> This logic checks every row to make sure there aren't any repeats 
  for(let row = 0; row < 9; row++){
      for(let col = 0; col < 9; col++){
          let currentSquare = board[row][col];
          if(currentSquare === ".") continue;
          if(nums[currentSquare]) return false;
          nums[currentSquare] = true;
      }
      setAllPropsToFalse(nums);
  }

  //COLUMN CHECK --> This logic checks every column to make sure there aren't any repeats 
  for(let col = 0; col < 9; col++){
      for(let row = 0; row < 9; row++){
          let currentSquare = board[row][col];
          if(currentSquare === ".") continue;
          if(nums[currentSquare]) return false;
          nums[currentSquare] = true;
      }
      setAllPropsToFalse(nums);
  }

  //3X3 BOX CHECK --> A bit verbose but does the trick. I create arrays to hold all the 3X3 box elements, then check each one.
  const topLeft = [...board[0].slice(0,3), ...board[1].slice(0,3), ...board[2].slice(0,3)];
  const topMid = [...board[0].slice(3,6), ...board[1].slice(3,6), ...board[2].slice(3,6)];
  const topRight = [...board[0].slice(6), ...board[1].slice(6), ...board[2].slice(6)];

  const midLeft = [...board[3].slice(0,3), ...board[4].slice(0,3), ...board[5].slice(0,3)];
  const midMid = [...board[3].slice(3,6), ...board[4].slice(3,6), ...board[5].slice(3,6)];
  const midRight = [...board[3].slice(6), ...board[4].slice(6), ...board[5].slice(6)];

  const botLeft = [...board[6].slice(0,3), ...board[7].slice(0,3), ...board[8].slice(0,3)];
  const botMid = [...board[6].slice(3,6), ...board[7].slice(3,6), ...board[8].slice(3,6)];
  const botRight = [...board[6].slice(6), ...board[7].slice(6), ...board[8].slice(6)];

  const squareArrs = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight];

  //This helper function takes in an array and returns true if each number doesn't appear more than once. 
  const check3by3 = (items) => {
      for(let i = 0; i < items.length; i++){
          let currentSquare = items[i];
          if(currentSquare === ".") continue;
          if(nums[currentSquare]) return false;
          nums[currentSquare] = true;
      }
      setAllPropsToFalse(nums);
      return true;
  }
  //this loop checks all the 3x3 boxes
  for(let i = 0; i < squareArrs.length; i++){
      if(!check3by3(squareArrs[i])) return false;
  }

  //if we haven't returned false by now, the board is valid. 
  return true;
};


module.exports = { isValidSudoku };