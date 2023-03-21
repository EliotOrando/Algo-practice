/* 
Write an algorithm that converts an array to a linked list. Return the head node. 
*/
const { Node } = require('../linkedList')

const arrayToLL = (arr) => {
  //solution is to iterate over each element in the array and add it into a node, linking them as I go
  if(!arr.length) return null;
  const head = new Node(arr[0]);
  let currentNode = head;
  for(let i = 1; i < arr.length; i++){
    currentNode.next = new Node(arr[i]);
    currentNode = currentNode.next;
  }
  return head;
}

module.exports = { arrayToLL }