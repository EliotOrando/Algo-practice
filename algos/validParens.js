/* 
Leetcode problem 20
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

const validParens = (s) => {
  const brackets = {
    '[' : ']',
    '{' : '}',
    '(' : ')'
  };

  const stack = [];
  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    //if it's an open bracket, we push it into the stack
    if(brackets[char]) stack.push(char);
    //else it's a closing bracket and we can see if it's closed.
    else{
      if(stack.length === 0) return false;
      const popped = stack.pop();
      if(char !== brackets[popped]) return false;
    }
  }
  if(stack.length !== 0) return false;
  return true;
}

module.exports = {validParens};