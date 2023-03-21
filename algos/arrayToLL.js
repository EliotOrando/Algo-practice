/* 
Write an algorithm that converts an array to a linked list. Return the head node. 
*/
const { Node } = require('../linkedList')

const arrayToLL = (arr) => {
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