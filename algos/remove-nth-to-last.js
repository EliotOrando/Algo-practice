function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

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

module.exports = {LinkedList, Node, removeNthFromEnd}