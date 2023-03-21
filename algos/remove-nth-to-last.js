/* 
Leetcode problem 19

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

*/


const removeNthFromEnd = (head, n) => {
  if(!head.next) return null;
    let length = 1;
    let currNode = head;
    //find the length of the linked list
    while(currNode.next){
        length++;
        currNode = currNode.next;
    }
    //edge cas is that length IS n. This means we want to remove the head. 
    if(length === n) return head.next;
    //I know I want to remove the n'th to last node
    //so I need figure out how many Moves to make. It's length - n
    let moves = length - n;
    currNode = head;
    for(let i = 1; i < moves; i++){
        currNode = currNode.next;
    }
    currNode.next = currNode.next.next;
    return head;
}

module.exports = {removeNthFromEnd}