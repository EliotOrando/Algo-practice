const {reverseInt} = require('../algos/reverse_int');

describe('Reverse integer tests:', () => {
  it('should handle positive numbers', () => {
    expect(reverseInt(5297)).toBe(7925);
    expect(reverseInt(334)).toBe(433);
  });
  it('should handle negative numbers', () => {
    expect(reverseInt(-553)).toBe(-355);
    expect(reverseInt(-102)).toBe(-201)
  });
  it('should handle numbers with zeros at the end (i.e. 2000 -> 2)', () => {
    expect(reverseInt(2000)).toBe(2);
    expect(reverseInt(59270)).toBe(7295);
    expect(reverseInt(-6290)).toBe(-926);
  })
})