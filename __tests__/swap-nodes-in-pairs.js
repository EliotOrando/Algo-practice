const { LinkedList, Node } = require('../linkedList');
const { arrayToLL } = require('../algos/arrayToLL');
const { llToArray } = require('../algos/llToArray');
const { swapNodesInPairs } = require('../algos/swap-nodes-in-pairs');

describe('swap nodes in pairs tests:', () => {
  const ll = new LinkedList();
  let output;
  beforeEach(() => {
    ll.head = null;
    output = null;
  });

  it('should handle null being passed in', () => {
    expect(swapNodesInPairs(ll.head)).toBe(null);
  })
  it('should handle a linked list of length 1 being passed in', () => {
    ll.head = new Node(5);
    output = swapNodesInPairs(ll.head);
    expect(llToArray(output)).toEqual([5]);
    ll.head = new Node(1);
    output = swapNodesInPairs(ll.head);
    expect(llToArray(output)).toEqual([1]);
  });
  it('should handle linked lists of various lengths', () => {
    ll.head = arrayToLL([1,2,3]);
    output = swapNodesInPairs(ll.head);
    expect(llToArray(output)).toEqual([2,1,3]);
    ll.head = arrayToLL([1,2,3,4]);
    output = swapNodesInPairs(ll.head);
    expect(llToArray(output)).toEqual([2,1,4,3]);
  });
});