/* 
Write a function that takes in the head node of a linked list, and returns out an array of all the values. 
*/

const llToArray = (node) => {
  //solution is to iterate over the LL and add in each value to an output array
  const returnArr = [];
  while(node){
    returnArr.push(node.val);
    node = node.next;
  }
  return returnArr;
}


module.exports = {llToArray};