const { BinaryTree, nodeDepths } = require("../algos/bst_node_depths");


describe('depth first search', () => {
    let depthCount = 0;
    let bst;

  

beforeEach(() => {
    depthCount = 0;
})

it('performs a depth first sesarch on a bst:', () => {
  bst = new BinaryTree(1);
  bst.left = new BinaryTree(2);
  bst.left.left = new BinaryTree(4);
  bst.left.right = new BinaryTree(5);
  bst.right = new BinaryTree(3);
  bst.right.left = new BinaryTree(6);
  bst.right.right = new BinaryTree(7);
  bst.left.left.left = new BinaryTree(8);
  bst.left.left.right = new BinaryTree(9);
  depthCount = nodeDepths(bst);
  expect(depthCount).toEqual(16);
});

it('returns 0 when root has no children', () => {
  bst = new BinaryTree(1);
  depthCount = nodeDepths(bst);
  expect(depthCount).toEqual(0);
});

it('returns 1 if root only has 1 child', () => {
  bst = new BinaryTree(1);
  bst.left = new BinaryTree(2);
  depthCount = nodeDepths(bst);
  expect(depthCount).toEqual(1);
})

})