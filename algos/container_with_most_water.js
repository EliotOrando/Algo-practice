/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Picture: https://dev.to/alisabaj/the-container-with-the-most-water-solving-an-algorithm-about-areas-kkl

Example: 
height: [1, 3, 2, 5]
return value of 6 b/c maximum area made by the heights is a rectangle of height 3, with a width of 2. (the rectangle formed by connecting the 3 and the 5 heights) - see example graph

*****Example graph******
^
|
|               |  
|        _______|
|       |       |
|       |   |   | 
|   |   |   |   |
------------------------>
    1   3   2   5
*/

function maxArea (height) {
  //initialize maxArea to -Infinity (to be reassigned), left pointer to index 0, and right pointer to index at the end of the array
  let maxArea = -Infinity, left = 0, right = height.length - 1;
  //iterate over array as long as the left and right pointers aren't equal
  while(left != right){
    //calculate area of rectangle that is made with current pointers
      let area = Math.min(height[left], height[right]) * (right - left);
      //reassign maxArea if needed
      if(area > maxArea) maxArea = area;
      //increment left pointer if the left height is lower than right, else decrement right pointer
      height[left] < height[right] ? left ++ : right --;
  }
  //return result. 
  return maxArea;
}

module.exports = {maxArea}