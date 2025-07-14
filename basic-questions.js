// 1.	Print "Hello, JavaScript!" to the console.
// 2.	Declare a variable x, assign 10, change it to 20, and print it.
// 3.	Create an array colors with three colors, add "yellow", and print it.
// 4.	Given let numbers = [5, 10, 15, 20];, print the first and last elements.
// 5.	Write a program that checks if a number is even or odd.
// 6.	Find the largest of three numbers (a, b, c) using if-else.
// 7.	Calculate and print the sum of all numbers in let nums = [3, 7, 2, 8];.
// 8.	Check if "apple" exists in let fruits = ["banana", "cherry", "apple", "grape"]; and print "Found" or "Not Found".
// 9.	Write a grading program that assigns "A", "B", "C", "D", or "F" based on a score.
// 10.	Swap two variables without using a third variable.

let colours = [1, 2, 3, 4, 5];

let colours2 = [6, 7, 8, 9, 10];

let newColour = [...colours, ...colours2];
console.log(newColour);

// ==, ===
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);
