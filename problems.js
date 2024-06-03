// //problem 1
// console.log(y);
// y = 1;

// // problem 2
// console.log(y)
// var y =1

// //problem 3
// console.log(y);
// y = 2;
// console.log(y);
// var y;

// //problem 4
// console.log(x)
// let x;
// console.log(x)

// temporal deadzone

// //problem 5
// function x () {
//     console.log("value in local scope", a)
// }
// console.log("value in gloabl scope", a)
// var a = 2;
// x();
// console.log("this is after execution")

// //problem 6
// var y = 10;
// test();
// test1();
// console.log(y);

// function test() {
//   var y = 30;
//   console.log(y);
// }

// function test1() {
//   var y = 80;
//   console.log(y);
// }

// // problem 7
// var a = 5;
// function test() {
//   console.log(a);
// }
// var test = 7;
// console.log(test);
// test();

// //problem 8
// function test1() {
//     var a = 6
//     console.log(a)
// }

// function a() {
//     console.log("this is a new function")
// }
// test1();
// a();

// variable and function same name when scope is different.

/** Closures  **/

//problem 9

// function x() {
//   console.log(a);
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// var a = 10;
// // console.log(a);
// x();
// console.log(a);

// //problem 10
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
//   console.log("Timer10");
// }, 10000);

// setTimeout(() => {
//   console.log("Timer5");
// }, 5000);

// console.log("hello world");

// setTimeout(() => {
//   console.log("Timer3");
// }, 3000);

// console.log("hello world");

// function x() {
//     console.log("this is inside x")
//     y();
// }

// function y() {
//     console.log("this is inside y")
// }
// x();

// // SetTimeOut
// //problem 12
// for (var i = 0; i < 5; i++) {
//     // console.log(i*1000)
//     setTimeout(() => {console.log(i)}, 1000);
// }

// problem 13
// let j = 0;
// for (j = 0; j < 5; j++) {
//     setTimeout(() => console.log(j), 0);
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
