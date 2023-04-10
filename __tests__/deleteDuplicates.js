const {arrayToLL} = require('../algos/arrayToLL');
const {llToArray} = require('../algos/llToArray');
const {deleteDuplicates} = require('../algos/deleteDuplicates');

describe('deleteDuplicates tests:', () => {  
  let ll, newLL;
  it('should handle a ll of null', () => {
    expect(deleteDuplicates(null)).toEqual(null);
  });
  it('should handle a linked list of length 1', () => {
    ll = arrayToLL([1]);
    newLL = deleteDuplicates(ll);
    expect(llToArray(newLL)).toEqual([1]);
    ll = arrayToLL([-5]);
    newLL = deleteDuplicates(ll);
    expect(llToArray(newLL)).toEqual([-5]);
  });
  it('should handle linked lists of various lengths, with various duplicates', () => {
    ll = arrayToLL([1,2,3,4,5]);
    newLL = deleteDuplicates(ll);
    expect(llToArray(newLL)).toEqual([1,2,3,4,5]);
    ll = arrayToLL([1,1,2]);
    newLL = deleteDuplicates(ll);
    expect(llToArray(newLL)).toEqual([1,2]);
    ll = arrayToLL([1,1,2,3,3]);
    newLL = deleteDuplicates(ll);
    expect(llToArray(newLL)).toEqual([1,2,3]);
    ll = arrayToLL([1,2,2,2,2,2]);
    newLL = deleteDuplicates(ll);
    expect(llToArray(newLL)).toEqual([1,2]);
  });
});