const { longestCommonPrefix } = require('../algos/longest-common-prefix');

describe('longest common prefix tests:', () => {
  let input;
  let expectedOutput;
  it('should handle an empty array', () => {
    input = [];
    expectedOutput = '';
    expect(longestCommonPrefix(input)).toBe(expectedOutput)
  });
  it('should handle an array with no common prefixes', () => {
    input = ['no', 'common', 'prefix', 'here', 'sad'];
    expect(longestCommonPrefix(input)).toBe(expectedOutput);
  });
  it('should handle identical strings', () => {
    input = ['mine', 'mine', 'mine', 'mine'];
    expectedOutput = 'mine';
    expect(longestCommonPrefix(input)).toBe(expectedOutput);
  });
  it('should handle an array with only one string', () => {
    input = ['singular'];
    expectedOutput = 'singular';
    expect(longestCommonPrefix(input)).toBe(expectedOutput);
  });
  it('should handle calculating the common prefexis between many strings', () => {
    input = ["flower","flow","flight"],
    expectedOutput = 'fl';
    expect(longestCommonPrefix(input)).toBe(expectedOutput);
  });
});