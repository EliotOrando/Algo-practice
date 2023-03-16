const { letterCombinations } = require('../algos/letterCombinations');

describe('letterCombinations tests:', () => {
  it('should handle empty strings', () => {
    expect(letterCombinations('')).toEqual([]);
  });
  it('should handle single number stirngs', () => {
    expect(letterCombinations('2')).toEqual(['a','b','c']);
    expect(letterCombinations('3')).toEqual(['d','e','f']);
    expect(letterCombinations('4')).toEqual(['g','h','i']);
    expect(letterCombinations('5')).toEqual(['j','k','l']);
    expect(letterCombinations('6')).toEqual(['m','n','o']);
    expect(letterCombinations('7')).toEqual(['p','q','r','s']);
    expect(letterCombinations('8')).toEqual(['t','u','v']);
    expect(letterCombinations('9')).toEqual(['w','x','y','z']);
  });
  it('should handle strings of various length', () => {
    expect(letterCombinations('22')).toEqual(['aa','ba','ca', 'ab', 'bb', 'cb', 'ac', 'bc', 'cc']);
    expect(letterCombinations('23')).toEqual((['ad','bd','cd','ae','be','ce','af','bf','cf']));
    expect(letterCombinations('259')).toEqual(([
      'ajw', 'bjw', 'cjw', 'akw', 'bkw',
      'ckw', 'alw', 'blw', 'clw', 'ajx',
      'bjx', 'cjx', 'akx', 'bkx', 'ckx',
      'alx', 'blx', 'clx', 'ajy', 'bjy',
      'cjy', 'aky', 'bky', 'cky', 'aly',
      'bly', 'cly', 'ajz', 'bjz', 'cjz',
      'akz', 'bkz', 'ckz', 'alz', 'blz',
      'clz'
    ]))
  })
})