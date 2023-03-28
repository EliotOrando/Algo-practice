const { generateParentheses } = require('../algos/generate-parentheses.js');

describe('generate parentheses tests:', () => {
  let output;
  const sort = results => results.sort();
  it('should handle edge cases of n is zero and n is 1', () => {
    expect(generateParentheses(0)).toEqual(['']);
    expect(generateParentheses(1)).toEqual(['()']);
  });
  it('should handle generating combinmations of parentheses', () => {
    output = ['(())', '()()'];
    expect(sort(generateParentheses(2))).toEqual(sort(output));
    output = ['((()))', '(()())', '(())()', '()(())', '()()()'];
    expect(sort(generateParentheses(3))).toEqual(sort(output));
  })
});