const {groupAnagrams} = require('../algos/groupAnagrams');

describe('group anagrams tests:', () => {
  it('should handle an empty array', () => {
    expect(groupAnagrams([])).toEqual([]);
  });
  it('should handle an array with one string:', () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
    expect(groupAnagrams(['hello'])).toEqual([['hello']]);
  });
  it('should handle an array with multiple strings', () => {
    const stringArray = ["eat","tea","tan","ate","nat","bat"];
    const solution = [["bat"],["nat","tan"],["ate","eat","tea"]];
    const output = groupAnagrams(stringArray);
    output.forEach(arr => arr.sort());
    output.sort();
    solution.forEach(arr => arr.sort());
    solution.sort();
    expect(output.length).toEqual(solution.length);
    expect(output).toEqual(solution);
  });
})