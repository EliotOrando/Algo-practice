const { isSameTree } = require('../algos/isSameTree.js');
const { BinarySearchTree } = require('../BinarySearchTree');
describe('isSameTree tests:', () => {
  const p = new BinarySearchTree(1);
  const q = new BinarySearchTree(1);


  it('should handle evaluating BSTs whose heads are null', () => {
    expect(isSameTree(null, null)).toBe(true);
    
    expect(isSameTree(null, q)).toBe(false);
    expect(isSameTree(p, null)).toBe(false);
  });

  it('should handle evaluating BSTs of various sizes ', () => {
    p.left = new BinarySearchTree(2);
    q.left = new BinarySearchTree(2);
    p.right = new BinarySearchTree(3);
    q.right = new BinarySearchTree(3);
    expect(isSameTree(p, q)).toBe(true);
    p.right = null;
    q.right = q.left;
    q.left = null;
    expect(isSameTree(p,q)).toBe(false);
  });
});