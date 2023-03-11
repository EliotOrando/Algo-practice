const { BinaryTree, nodeDepths } = require("../algos/bst_node_depths");


describe('depth first search', () => {
  let results;
  let bst;
  const callback = (ele) => {
    results.push(ele);
  }
