/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {

  if(str1.length!=str2.length)return false;

  const lw1 = str1.toLowerCase();
  const lw2 = str2.toLowerCase();

  const ar1 = lw1.split('').sort();
  const ar2 = lw2.split('').sort();

  // for(let i=0;i<ar1.length;++i){
  //   for(let j=i+1;j<ar1.length;++j){
  //     if(ar1[i]>ar1[j]){
  //       let temp = ar1[i];
  //       ar1[i]=ar1[j];
  //       ar1[j]=temp;
  //     }
  //   }
  // }

  // for(let i=0;i<ar2.length;++i){
  //   for(let j=i+1;j<ar2.length;++j){
  //     if(ar2[i]>ar2[j]){
  //       let temp = ar2[i];
  //       ar2[i]=ar2[j];
  //       ar2[j]=temp;
  //     }
  //   }
  // }

  for(let i=0;i<str1.length;++i){
    if(ar1[i]!=ar2[i])return false;
  }
  
  return true;
  // return ar1.join('')===ar2.join('');
}

module.exports = isAnagram;
