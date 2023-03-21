/* 
Leetcode problem 21
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

*/

const mergeTwoLists = (l1, l2) => {
  //edge cases in case there isn't a node in one of the lists
  if(!l1 && !l2) return l1;
  if(!l1) return l2;
  if(!l2) return l1;
  //Reassign l2 as l1 if needed
  if(l2.val < l1.val) [l1, l2] = [l2, l1];
  let head = l1;
  //iterate over l1 until we hit null. 
  while(l1.next && l2){
    //if l1's next node is less than l2's current node, we just iterate
    if(l1.next.val <= l2.val) l1 = l1.next;
    //so. List 2's node is less than list 1's next. 
    else{
      //creating l1 next so we don't loose reference
      const l1Next = l1.next
      //here we need to reassign l1 next to be l2
      l1.next = l2
      //iterate over l2 until l2's next value is greater than l1's next value
      while(l2.next && l2.next.val < l1Next.val){
        l2 = l2.next
      }
      const l2Next = l2.next;
      l2.next = l1Next;
      l2 = l2Next;
      //assign l1 to l1Next
      l1 = l1Next;
    }
  }
  if(l2) l1.next = l2;
  return head;
}

module.exports = {mergeTwoLists}