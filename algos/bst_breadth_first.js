function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree and a callback function, apply the
callback to the values of the BST in breadth-first order.

Example:

If the tree is

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

then apply the callback on the numbers in the order:
4, 2, 7, 1, 3, 9, 8.

Hint:

Maintain a queue (array) consisting of the nodes we need to operate on.
For each node in the queue, push the left and right children (if applicable) to
the end of the queue. Keep consuming the queue (using the shift method) until
there are no more nodes in the queue.

Utilizing recursion is not necessary, nor recommended.

*/

const bfs = (root, callback) => {
  //initialize a queue with the root as the first element
  const queue = [root];
  //while our queue has length, do the following.
  while(queue.length){
    //shift out one node to look at.
    const currNode = queue.shift();
    //push it's children if they aren't null
    if(currNode.left) queue.push(currNode.left)
    if(currNode.right) queue.push(currNode.right)
    //then perform thej callback on the element. 
    callback(currNode.value);
  }
};

module.exports = {BinarySearchTree, bfs};