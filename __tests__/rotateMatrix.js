const { rotateMatrix } = require('../algos/rotateMatrix');

describe('rotate Matrix tests: ', () => {
  let matrix = null;
  it('should handle an empty matrix:', () => {
    matrix = [[]];
    expect(rotateMatrix(matrix)).toBe(undefined);
    expect(matrix).toEqual([[]]);
  });
  it('should not return anything as we are changing the array in place:', () => {
    expect(rotateMatrix([[1]])).toBe(undefined);
  });
  it('should rotate a matrix in place:', () => {
    matrix = [[1,2,3],[4,5,6],[7,8,9]];
    rotateMatrix(matrix);
    expect(matrix).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
    matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
    rotateMatrix(matrix);
    expect(matrix).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]);
  });
});