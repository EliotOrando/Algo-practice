/* 
Leetcode problem 25 - HARD

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
k is a positive integer and is less than or equal to the length of the linked list. 
If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
*/

const reverseKGroup = (head, k) => {
  //edge case in case k is 1 - we don't need to do anything
  if(k === 1) {
      return head
  }
  let nodeBeforeChunk = null;
  let currNode = head;
  let headOfChunk = head;
  let nodeIndex = 0;
  //iterate over the linked list
  while(currNode){
      //Check to see is the nodeIndex isn't zero, and if we've reached the next chunk
      if(nodeIndex !== 0 && nodeIndex % k === 0){
          //we need to get the new head and new tail of the previous chunk
          [newHead, newTail] = reverseLL(headOfChunk, k);
          //re-link the list to the new head and new tail
          if(!nodeBeforeChunk) head = newHead;
          else nodeBeforeChunk.next = newHead;
          nodeBeforeChunk = newTail;
          newTail.next = currNode;
          //reassign headOfChunk to be the current node
          headOfChunk = currNode;
      }
      currNode = currNode.next;
      nodeIndex++;
  }   
  //edge case to catch that there is a perfect number of nodes so that we need to reverse the final chunk with nothing left over
  if(nodeIndex !== 0 && nodeIndex % k === 0){
      [newHead, newTail] = reverseLL(headOfChunk, k);
       if(!nodeBeforeChunk) head = newHead;
          else nodeBeforeChunk.next = newHead;
          nodeBeforeChunk = newTail;
          newTail.next = currNode;
          //reassign headOfChunk to be the current node
          headOfChunk = currNode;
  }

  return head;
  
};

//takes in a head node, reverses the LL, and then returns out the new head node
const reverseLL = (head, k) => {
  const newTail = head;
  let curr = head;
  let prev = null
  let next = head.next;
  while(k > 0 && next){
      curr.next = prev;
      prev = curr;
      curr = next;
      if(next.next) next = next.next
      k--;
  }
  return[prev, newTail]
}

module.exports = { reverseKGroup }