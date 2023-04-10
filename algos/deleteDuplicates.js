/*
Leetcode Problem 83 - Remove Duplicates from a sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.


Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

const deleteDuplicates = (head) => {
  //edge case is that the head passed in was null.
  if(!head) return null;
  //we will recieve the head of a linked list & declare a currNode variable to hold curr place in the LL
  let currNode = head;
  //we want to iterate over the linked list until we reach a node that DOESN'T have the same value as head
  while(currNode.val === head.val){
      currNode = currNode.next;
      //this check will see if we've reached the NULL value. (base case)
      if(!currNode) {
          //assign head.next to null (it's the new end of the LL)
          head.next = null;
          //return the head.
          return head;
      }
  }
  //then we recursivly call deleteDuplicates with the unique node as the head value
  const newLL = deleteDuplicates(currNode);
  head.next = newLL;
  //and return the current head with it's head.next property as the evaluated result of the recursive call.
  return head;
};

module.exports = { deleteDuplicates };