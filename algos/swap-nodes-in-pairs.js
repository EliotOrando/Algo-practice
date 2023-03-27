/*
Leetcode problem 24 - Medium

Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes 
(i.e., only nodes themselves may be changed.)

Example 1:


Input: head = 1 > 2 > 3 > 4 > null
Output: 2 > 1 > 4 > 3 > null

Example 2:

Input: head = null
Output: null

Example 3:

Input: head = 1 > null
Output: 1 > null

*/

const swapNodesInPairs = (head) => {
    //handle edge case where no head or head.next node
    if(!head || !head.next) return head;

    //setting up pointers to utilize throughout the algo. Also reassigning head to be the new head node
    let currNode = head;
    head = head.next;
    let prevNode = null;
    //node array used to hold reference of nodes while I reassign pointers. 
    let nodeArr = [null, null];

    //iterate over the linked list until we don't have a current or next node.
    while(currNode && currNode.next){
        
        //get our two nodes that need to be swapped into our array. 
        nodeArr[0] = currNode;
        nodeArr[1] = currNode.next;
        //reassign pointers and re-hookup pointesr in next direction
        currNode.next = currNode.next.next;
        nodeArr[1].next = currNode;
        currNode = currNode.next;
        if(prevNode) prevNode.next = nodeArr[1];
        prevNode = nodeArr[0];
    }
    return head;
};

module.exports = { swapNodesInPairs }