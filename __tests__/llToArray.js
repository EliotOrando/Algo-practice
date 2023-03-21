const {LinkedList, Node} = require('../linkedList');
const {llToArray} = require('../algos/llToArray');

describe('linked list to array tests:', () => {
  const ll = new LinkedList();
  it('should handle linked lists of various lengths', () => {
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node (3);
    expect(llToArray(ll.head)).toEqual([1, 2, 3]);
    ll.head = new Node('hi');
    ll.head.next = new Node('12345');
    ll.head.next.next = new Node(false);
    ll.head.next.next.next = new Node(45);
    expect(llToArray(ll.head)).toEqual(['hi', '12345', false, 45])
  });
  it('should handle empty linked lists', () => {
    ll.head = null;
    expect(llToArray(ll.head)).toEqual([]);
  });
})