/* 
Leetcode problem 100 - Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
*/

const isSameTree = (p, q) => {
  //BASE CASES 
  //if one is null and the other isn't - return false
  if((!p && q) || (!q && p)) return false;
  //if they're both null - return true.
  if(!p && !q) return true;
  //if their values aren't equal, return false. 
  if(p.val !== q.val) return false; 
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

module.exports = { isSameTree };