const { bfs } = require('../algos/bst_breadth_first');
const { BinarySearchTree } = require('../BinarySearchTree');
describe('breadth first search', () => {
  let results = [];
  let bst;
  const callback = (ele) => {
    results.push(ele);
  }

  beforeEach(() => {
    results = [];
  })

  it('performs a breadth first sesarch on a bst:', () => {
    bst = new BinarySearchTree(5);
    bst.left = new BinarySearchTree(2);
    bst.left.left = new BinarySearchTree(1);
    bst.left.right = new BinarySearchTree(3);
    bst.right = new BinarySearchTree(7);
    bst.right.left = new BinarySearchTree(6);
    bst.right.right = new BinarySearchTree(10);
    bfs(bst, callback);
    expect(results).toEqual([5,2,7,1,3,6,10]);
  });

  it('handles non-balanced trees', () => {
    bst = new BinarySearchTree (5);
    bst.right = new BinarySearchTree(8);
    bst.right.left = new BinarySearchTree(6);
    bst.right.left.right = new BinarySearchTree(7);
    bst.right.right = new BinarySearchTree(10);
    bfs(bst, callback);
    expect(results).toEqual([5, 8, 6, 10, 7]);
  })

});