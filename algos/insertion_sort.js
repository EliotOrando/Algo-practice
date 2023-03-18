/*
Write a function that takes in an array of integers and returns a sorted version of that array. 
Use the Insertion Sort algorithm to sort the array.

SAMPLE:

array = [ 8, 5, 2, 9, 5, 6, 3]

*/

function insertionSort(array) {
  // nested for loop
  // while front (j) is > 0 && front ele (j) is less than back
  // decrement j until 0 then move to the next element

  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j -= 1;
    }
  }
  return array;
}

module.exports = { insertionSort };
