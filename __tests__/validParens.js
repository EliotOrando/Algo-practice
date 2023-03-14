const { validParens } = require("../algos/validParens")

describe('validParens test', () => {
  it('should handle strings with various types of parens and of various length', () => {
    expect(validParens('()[]{}')).toBe(true);
    expect(validParens('(]')).toBe(false);
    expect(validParens('(){}[]{')).toBe(false);
    expect(validParens('([{}])')).toBe(true);
  });
})