const longestNonRepeatingSubString = (s) => {
  const chars = new Set();
  let longest = 0;
  let i = 0, j = 0;
  while(j < s.length){
      if(chars.has(s[j])){
          chars.delete(s[i]);
          i++;
      }
      else{
          chars.add(s[j]);
          longest = Math.max(longest, chars.size);
          j++;
      }
  }
  return longest;
};

module.exports = {longestNonRepeatingSubString}