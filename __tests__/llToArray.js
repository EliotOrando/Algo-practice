/* 
Write a function that takes in the head node of a linked list, and returns out an array of all the values. 
*/

const llToArray = (node) => {
  const returnArr = [];
  while(node){
    returnArr.push(node.val);
    node = node.next;
  }
  return returnArr;
}


module.exports = {llToArray};