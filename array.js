// Create an array
// const hobbies = ["Walking", "cycling", "sleeping", "Watching movies"];

// const hobbies1 = new Array(4);
// console.log(hobbies);

// hobbies[7] = "Shopping";
// console.log(hobbies);

// Array methods

// const ele = hobbies.pop();
// console.log(hobbies);
// console.log(ele);

// hobbies.shift();
// console.log(hobbies);

// splice

// const removed = hobbies.splice(2, 1, "Watching movies");
// console.log(hobbies);
// console.log(removed);

// // slice
// const arr1 = hobbies.slice(1, 3);
// console.log(arr1);

// sort
// let arr = [10.34, 3.44, 5.66, 7, 9.9];
// let arr1 = [10, 5, 7, 3, 9];
let arr1 = [2, 6, 3, 10, 8];
// arr1.sort();
// console.log(arr1);

// // arr.sort();

// arr1.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else return -1;
// });
// console.log(arr1);

/**
 * 
 * a
The first element for comparison. Will never be undefined.

b
The second element for comparison. Will never be undefined.

It should return a number where:

A negative value indicates that a should come before b.
A positive value indicates that a should come after b.
Zero or NaN indicates that a and b are considered equal.
 */

// reverse an array

let returnValue = arr1.reverse();
// console.log(returnValue);

// console.log(arr);

// filter method

let sortedPrice = arr1.filter((element, index, arr1) => {
  if (element > 6) {
    return true;
  }
});

console.log(sortedPrice);
// lets say prices only greater than 6
// returns true or false
// concat method
