/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    const ar = str.split('');
    let ct = 0;
    for(let i=0;i<ar.length;++i){
      if(ar[i]==='a')ct++;
      if(ar[i]==='e')ct++;
      if(ar[i]==='i')ct++;
      if(ar[i]==='o')ct++;
      if(ar[i]==='u')ct++;
    }
    return ct;
}

module.exports = countVowels;