/*
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the Bubble Sort algorithm to sort the array in place.

SAMPLE:
array = [8, 2, 9, 5, 6, 3]

output: [2, 3, 5, 5, 6, 8, 9]
*/

function bubble_sort(array) {
  if (array.length === 0) return [];
  let sort = false;
  let count = 0;

  while (!sort) {
    sort = true;
    for (let i = 0; i < array.length - 1 - count; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sort = false;
      }
    }
    count++;
  }
  return array;
}

module.exports = { bubble_sort };
