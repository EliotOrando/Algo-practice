/*
The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either by BinaryTree nodes themselves or None / null.

SAMPLE:

tree =    1
        /   \
      2       3
    /   \    /   \
  4     5   6     7
/   \
8   9

SAMPLE OUTPUT
16
The depth of the node with value 2 is 1.
The depth of the node with value 3 is 1.
The depth of the node with value 4 is 2.
The depth of the node with value 5 is 2.
Etc...
Summing all the depths yields 16.

*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// ITERATIVE SOLUTION

function nodeDepths(root) {
  // we need to determine depths of each level, and sum all of them
  let depthCount = 0;
  const stack = [{ node: root, depth: 0 }];

  while (stack.length) {
    const curr = stack.pop();
    const { node, depth } = curr;

    depthCount += depth;
    if (node.left) {
      stack.push({ node: node.left, depth: depth + 1 });
    }
    if (node.right) {
      stack.push({ node: node.right, depth: depth + 1 });
    }
  }
  return depthCount;
}

// RECURSIVE SOLUTION

// function nodeDepths(root) {
//   return sumDepths(root, 0)
// }

// function sumDepths(node, level) {
//   if (!node) return 0;
//   return level + sumDepths(node.left, level + 1) + sumDepths(node.right, level + 1)
// }

module.exports = { nodeDepths };
