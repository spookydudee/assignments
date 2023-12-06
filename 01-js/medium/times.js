/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // Get the current timestamp in milliseconds
    const startTime = new Date().getTime();
  
    // Initialize a variable to store the sum
    let sum = 0;
  
    // Loop from 1 to n and add each number to the sum
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    // Get the current timestamp in milliseconds after the loop completes
    const endTime = new Date().getTime();
  
    // Calculate the time taken in seconds by dividing the time difference by 1000
    const timeTaken = (endTime - startTime) / 1000;
  
    // Return the time taken in seconds
    return timeTaken;
  }
  
  console.log("Sum from 1-100:", calculateTime(100), "seconds");
  console.log("Sum from 1-100000:", calculateTime(100000), "seconds");
  console.log("Sum from 1-1000000000:", calculateTime(1000000000), "seconds");