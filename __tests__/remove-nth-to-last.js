const { removeNthFromEnd, LinkedList, Node } = require('../algos/remove-Nth-to-last');

describe('remove nth to last tests', () => {
  const ll = new LinkedList();
  beforeEach(() => {
    const nodeList = new Node(1);
    nodeList.next = new Node(2);
    nodeList.next.next = new Node(3);
    nodeList.next.next.next = new Node(4);
    nodeList.next.next.next.next = new Node(5);
    ll.head = nodeList;
  });
  const llToArr = (node) => {
    const returnArr = [];
    while(node){
      returnArr.push(node.val);
      node = node.next;
    }
    return returnArr;
  }
  it('shold delete the nth node', () => {
    removeNthFromEnd(ll.head, 2);
    expect(llToArr(ll.head)).toEqual([1,2,3,5]);
  });
})