// //problem 1
// y = 1;
// console.log(y);

// // problem 2
// console.log(a);
// let a = 1;
// console.log(a);

// //problem 3
// console.log(a);
// var a = "hello";
// a = 3;
// a = 2;
// console.log(a);

// // problem 4
// console.log(a);
// let x;
// console.log(x);
// console.log(y);
// var y = 1;
// console.log(y);

// // problem

// var x = 4;
// if (x == 4) {
//   console.log(x);
//   let a;
//   console.log(a);
// }
// console.log(x);
// console.log(a);

// temporal deadzone

// //problem 5
// function b() {
//   console.log("This is inside function", a);
//   var a = 5;
//   console.log("value in local scope", a);
// }
// console.log("value in gloabl scope", a);
// var a = 2;
// console.log("Value of a after calling the function", a);
// b();
// console.log("this is after execution");

// // problem

// function test() {
//   console.log("Before declaration: ", x);
//  var x = 10;
//   console.log("After declaration: ", x);
// }
// console.log("Outside function: ", x);
// var x = 20;
// test();
// console.log("Outside after function call: ", x);

// // problem
// function first() {
//   console.log("Inside first");
//   second();
// }
// function second() {
//   console.log("Inside second");
// }
// first();
// console.log("End of script");

// //problem 6
// let y = 10;
// test();
// test1();
// console.log(y);

// function test() {
//   let y = 30;
//   console.log(y);
// }

// function test1() {
//   let y = 80;
//   console.log(y);
// }

// //problem 7
// var a = 5;
// function test() {
//   console.log(a);
// }
// var test = 7;
// console.log(test);
// test();

// //problem 8
// function test1() {
//   var a = 6;
//   console.log(a);
// }

// function a() {
//   console.log("this is a new function");
// }
// test1();
// a();

/** Closures  **/

// //problem 9

// function x() {
//   console.log(a);
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// console.log(a);
// var a = 10;
// x();
// console.log(a);

// //problem 10
// // var a = 14
// function x() {
//     var a = 10;
//     // console.log(a)
//     function y() {
//         console.log(a)
//     }
//     y();
// }
// // console.log(a)
// x();
// console.log(a)

// // problem 11
// console.log("before setTimeout");

// setTimeout(() => {
//   console.log("Timer3");
// }, 3000);

// setTimeout(() => {
//   console.log("Timer7");
// }, 7000);

// console.log("hello world1");

// setTimeout(() => {
//   console.log("Timer5");
// }, 5000);

// console.log("hello world2");

// // Problem
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// setTimeout(() => {
//   console.log("C");
// }, 0);

// console.log("D");

// //problem
// console.log("Hello");
// setTimeout(() => {
//   console.log("X");
//   setTimeout(() => {
//     console.log("Z");
//   }, 1000);

//   console.log("XY");
// }, 1000);
// setTimeout(() => {
//   console.log("A");
// }, 1500);
// console.log("Universe");

// // Problem
// setTimeout(() => console.log("1"), 1000);

// setTimeout(() => console.log("2"), 500);

// setTimeout(() => console.log("3"), 1500);

// setTimeout(() => console.log("4"), 0);

// console.log("5");

// SetTimeOut
//problem 12
// function counter() {
//   for (var i = 0; i < 5; i++) {
//     // console.log(i*1000)
//     function counter1(a) {
//       setTimeout(() => {
//         console.log(a);
//       }, a * 1000);
//     }
//     counter1(i);
//   }
// }
// counter();

// //problem 13
// let j = 0;
// for (j = 0; j < 5; j++) {
//   setTimeout(() => console.log(j), 0);
// }

// //problem 14
// for (var k = 0; k < 5; k++) {
//     setTimeout(() => console.log(k), 0);
// }

// // Event listener

// document.getElementById('clickme').addEventListener('click', function click() {
//     console.log("The button is clicked.")
// })

// // create a counter using closure.

// function countMe() {
//     let count = 0
//     console.log("here")
//     document.getElementById('clickme').addEventListener('click', function click() {
//         console.log("The button is clicked.", ++count)
//     })

// }
// console.log("after memory")
// countMe();

// let x = 6

// let y = 10

// if(x == '6') {
//   console.log("X")
// }

// if(y=== '10') {
//   console.log("Y")
// }

// console.log("hello");

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 3000);

// console.log("world");

// function counter() {
//   for (var i = 1; i <= 4; i++) {
//     function counter1(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }

//     counter1(i);
//   }
// }
// counter();
// setTimeout(() => {
//   console.log("Hello world");
// }, 3000);
// counter();
// console.log("Hello universe");

// function counter() {
//   for (let i = 1; i <= 4; i++) {
//     function counter1(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     counter1();
//   }
// }
// counter();

// let count = 0;
// setTimeout(() => {
//   count += 1;
//   console.log("Timeout 1:", count);
// }, 1000);
// setTimeout(() => {
//   count += 1;
//   console.log("Timeout 2:", count);
// }, 500);
// console.log("Final:", count);

// console.log("hello");

// setTimeout(() => {
//   console.log("Inside setTimeout");
// }, 2000);

// console.log("world");

// let p1 = new Promise((res, rej) => {
//   res(() => {
//     console.log("This promise is resolved.");
//   });
// });

// // console.log(typeof p1);
// isOdd(3);
// function isOdd(a) {
//   if (a % 2 != 0) {
//     // some logic
//     return true;
//   }
// }
// var numb = 3
// isOdd(numb)
// var isEven = (a) => {
//     if (a % 2 == 0) return true;
// };
// isEven(2);

// const pi = 3.14;

console.log("a");
console.log("b");
console.log("c");
