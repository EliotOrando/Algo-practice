const {maxArea} = require('../algos/container_with_most_water');

describe('container with most water tests:', () => {
  it('should handle arrays with arbitrary length', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
    expect(maxArea([1,1])).toEqual(1);
    expect(maxArea([1, 3, 2, 5])).toEqual(6);
  });
})