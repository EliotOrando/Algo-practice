const { mergeKLists } = require('../algos/mergeKLists');
const { llToArray } = require('../algos/llToArray');
const { arrayToLL } = require('../algos/arrayToLL');
const { LinkedList, Node } = require('../linkedList');

describe('MergeKLists tests', () => {
  it('should hanlde an empty array', () => {
    expect(mergeKLists([])).toEqual(null);
  });
  it('should handle merging various linkedLists', () => {
    const ll1 = arrayToLL([1, 4, 5]);
    const ll2 = arrayToLL([1, 3, 4]);
    const ll3 = arrayToLL([2, 6]);
    const ll4 = arrayToLL([55, 333]);
    const ll5 = arrayToLL([3]);
    const ll6 = arrayToLL([3, 6, 33]);
    expect(llToArray(mergeKLists([ll1, ll2, ll3]))).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    expect(llToArray(mergeKLists([ll4, ll5]))).toEqual([3, 55, 333]);
    expect(llToArray(mergeKLists([ll6]))).toEqual([3, 6, 33]);
  })
})
