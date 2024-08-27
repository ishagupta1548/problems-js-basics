// function x() {
//     var a = 1
//     function y() {
//         console.log("inside y")
//         function z() {
//             console.log("inside z", a)
//         }
//         z()
//     }
//     y()
// }

// x();

// // problem 2: closure corner case
// function x() {
//   var a = 8;
//   function y() {
//     console.log(a);
//   }

//   a = 20;
//   return y;
// }

// let b = x();
// console.log(b);
// b();

/**

reference of the function is returned. Hence a will be 20.

**/


// // setTimeout intro
// console.log("Start");

// setTimeout(() => {
//     console.log("Inside setTimeout")
// }, 4000)

// console.log("End line")

/** SET TIMEOUT */
// function x() {
//     var i = 10;
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)

//     console.log("This is after setTimeout")
// }

// x();

// problem print 1,2,3,4 after 1,2,3,4 seconds

// function y() {
//   for (var i = 0; i <= 4; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("this is after for loop");
// }

// y();

// // // To execute using var

// function y() {
//   for (var i = 0; i <= 4; i++) {
//     function z(a) {
//       setTimeout(() => {
//         console.log(a);
//       }, i * 1000);
//     }
//     z(i);
//   }
//   console.log("this is after for loop");
// }
