const {  nodeDepths } = require("../algos/bst_node_depths");
const { BinarySearchTree } = require('../BinarySearchTree');

describe('depth first search', () => {
    let depthCount = 0;
    let bst;

  

beforeEach(() => {
    depthCount = 0;
})

it('performs a depth first sesarch on a bst:', () => {
  bst = new BinarySearchTree(1);
  bst.left = new BinarySearchTree(2);
  bst.left.left = new BinarySearchTree(4);
  bst.left.right = new BinarySearchTree(5);
  bst.right = new BinarySearchTree(3);
  bst.right.left = new BinarySearchTree(6);
  bst.right.right = new BinarySearchTree(7);
  bst.left.left.left = new BinarySearchTree(8);
  bst.left.left.right = new BinarySearchTree(9);
  depthCount = nodeDepths(bst);
  expect(depthCount).toEqual(16);
});

it('returns 0 when root has no children', () => {
  bst = new BinarySearchTree(1);
  depthCount = nodeDepths(bst);
  expect(depthCount).toEqual(0);
});

it('returns 1 if root only has 1 child', () => {
  bst = new BinarySearchTree(1);
  bst.left = new BinarySearchTree(2);
  depthCount = nodeDepths(bst);
  expect(depthCount).toEqual(1);
})

})