const { Node } = require('../linkedList');
const { reverseKGroup } = require('../algos/reverse-nodes-in-k-groups');
const { arrayToLL } = require('../algos/arrayToLL');
const { llToArray } = require('../algos/llToArray')
describe('reverse nodes in k groups tests', () => {
  it('should handle linked lists of single length', () => {
    const input = arrayToLL([5]);
    const output = reverseKGroup(input, 3);
    expect(llToArray(output)).toEqual([5]);
  });
  it('should handle linked lists of various lengths with various values for k', () => {
    const LL1 = arrayToLL([1,2,3,4,5]);
    const output1 = reverseKGroup(LL1, 2);
    expect(llToArray(output1)).toEqual([2,1,4,3,5]);
    const LL2 = arrayToLL([1,2,3,4,5]);
    const output2 = reverseKGroup(LL2, 3);
    expect(llToArray(output2)).toEqual([3,2,1,4,5]);
    const LL3 = arrayToLL([1,2]);
    const output3 = reverseKGroup(LL3, 2);
    expect(llToArray(output3)).toEqual([2,1]);
    const LL4 = arrayToLL([1,2,3,4,5]);
    const output4 = reverseKGroup(LL4,10);
    expect(llToArray(output4)).toEqual([1,2,3,4,5])
  });
});