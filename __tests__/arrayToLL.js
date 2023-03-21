const { arrayToLL } = require('../algos/arrayToLL');
const { llToArray } = require('../algos/llToArray');

describe('array to linked list tests:', () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = ['hi', '12345', false, 45];
  const arr3 = [];
  it('should handle empty arrays', () => {
    expect(llToArray(arrayToLL(arr3))).toEqual(arr3);
  });
  it('should handle array\'s of various lengths', () => {
    expect(llToArray(arrayToLL(arr2))).toEqual(arr2);
    expect(llToArray(arrayToLL(arr1))).toEqual(arr1);
  });
});