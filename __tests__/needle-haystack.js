const { needleHaystack } = require('../algos/needle-haystack');

describe('needle-haystack tests:', () => {
  it('should return a number', () => {
    expect(typeof needleHaystack('hi','i')).toBe('number');
    expect(typeof needleHaystack('hello', 'riot')).toBe('number');
  });
  it('should find the first index of the needle in the haystack', () => {
    expect(needleHaystack("sadbutsad","sad")).toBe(0);
    expect(needleHaystack("please", "ease")).toBe(2);
    expect(needleHaystack("fired", "r")).toBe(2);
    expect(needleHaystack('hello', 'll')).toBe(2);
    expect(needleHaystack('hello', 'o')).toBe(4);
  });
  it('should return -1 if it does not find a match', () => {
    expect(needleHaystack('noMatch', 'red')).toBe(-1);
  });
});