const {mergeTwoLists} = require('../algos/mergeTwoLists');
const {LinkedList, Node} = require('../linkedList');

const llToArr = (node) => {
  const returnArr = [];
  while(node){
    returnArr.push(node.val);
    node = node.next;
  }
  return returnArr;
}

describe('Merge Two Lists tests:', () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();
  beforeEach(() => {
    ll1.head = null;
    ll2.head = null;
  });
  it('should handle merging two null lists', () => {
    expect(mergeTwoLists(ll1.head, ll2.head)).toBe(null);
  });
  it('should handle merging one null list with another list of various length', () => {
   
    const node = new Node(1);
    node.next = new Node(2);
    node.next.next = new Node(3);
    ll1.head = node;
    expect(llToArr(mergeTwoLists(ll1.head, ll2.head))).toEqual([1,2,3]);
    ll2.head = node;
    ll1.head = null;
    expect(llToArr(mergeTwoLists(ll1.head, ll2.head))).toEqual([1,2,3]);
  });
  it('should handle merging lists equal length', () => {
    const node1 = new Node(1);
    node1.next = new Node(5);
    node1.next.next = new Node(6);
    const node2 = new Node(1);
    node2.next = new Node(2);
    node2.next.next = new Node(3);
    ll1.head = node1;
    ll2.head = node2;
    expect(llToArr(mergeTwoLists(ll1.head, ll2.head))).toEqual([1, 1, 2, 3, 5, 6]);
  });
  it('should handle merging lists of various length', () => {
    const node1 = new Node(10);
    const node2 = new Node(1);
    node2.next = new Node(3);
    ll1.head = node1;
    ll2.head = node2;
    expect(llToArr(mergeTwoLists(ll1.head, ll2.head))).toEqual([1, 3, 10]);
  })
  
  
})