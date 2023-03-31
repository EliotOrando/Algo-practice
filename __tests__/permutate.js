const { permutate } = require('../algos/permutate');

describe('Permute tests:', () => {
  it('should hanlde arrays of length 1', () => {
    expect(permutate([1])).toEqual([[1]]);
    expect(permutate([2])).toEqual([[2]]);
  });
  it('should handle arrays of various lengths', () => {
    expect(permutate([1,2])).toEqual([[1,2],[2,1]]);
    expect(permutate([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
  })
})