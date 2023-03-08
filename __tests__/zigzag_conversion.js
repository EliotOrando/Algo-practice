const {convert} = require('../algos/zigzag_conversion');

describe('zigzag converstion tests:', () => {
  it('should handle num rows of 1', () => {
    expect(convert('A', 1)).toBe('A');
    expect(convert('ABCDEFG', 1)).toBe('ABCDEFG');
  });
  it('should handle num rows of 2', () => {
    expect(convert('TESTSTRING', 2)).toBe('TSSRNETTIG');
    expect(convert('TESTINGISFUN', 2)).toBe('TSIGSUETNIFN');
  });
  it('should handle num rows of various lengths', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  });
})