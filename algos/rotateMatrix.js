/* 
Leetcode problem 48
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

*/

/*
My solution: this problem was pretty difficult to figure out without using a scond matrix to write to. My approach is broken down into 2 steps.

STEP 1: first flip it symetrically along the diagonal

1 2 3
4 5 6
7 8 9

becomes

1 4 7
2 5 8
3 6 9

this means that the first row is now the first column. and the last row is now the last column. 

STEP 2: reverse each array

final arr:
7 4 1
8 5 2
9 6 3

This is the desired output so it works!
*/


//helper function that accepts an array and reverses it in place
const reverseArr = (arr) => {
  let left = 0, right = arr.length - 1 ;
  while(left < right){
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++;
      right--;
  }
}


const rotateMatrix = (matrix) => {
  //STEP 1: rotate along diagonal
  for(let row = 0; row < matrix.length; row++){
    //get access to "top half" of diagonal. we start col at row+1 because we don't need access to diagonal itself
      for(let col = row+1; col < matrix[row].length; col++){
          //swapping the matrix at row, col for matrix at col, row
          [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
      }
  }
  //STEP 2: reverse each array
  matrix.forEach(array => reverseArr(array));
};

module.exports = { rotateMatrix };