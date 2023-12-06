/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  const punctuation = /[^\w\s]/g;
  str = str.replace(punctuation, '');
  const arr = str.split('');
  let ar = [];
  for(let i=0;i<arr.length;++i){
    if(arr[i]!=" "){
      ar.push(arr[i]);
    }
  }
  for(let i=0;i<=ar.length/2;++i){
    if(ar[i]!== ar[ar.length-i-1]){return false;}
  }
  return true;
}

module.exports = isPalindrome;
