/*
Leetcode problem 23

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

*/

const generateParentheses = (n) => {
  const output = []
  const genParens = (string, numLeftParens, numRightParens) =>{
      if(string.length / 2 === n) output.push(string);
      else{
          //if we don't have enough left parens, we recursivly call gen parens with the string + a left parens
          if (numLeftParens < n) genParens(string + '(', numLeftParens + 1, numRightParens);
          //if we don't have enough right parens, we recursilvy call gen parens with the string + a right parns
          if (numRightParens < numLeftParens) genParens(string + ')', numLeftParens , numRightParens + 1)
      }
  }
  genParens('', 0, 0);
  return output;
}

module.exports = { generateParentheses }