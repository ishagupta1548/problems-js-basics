"use strict";
console.log(this);
// value of this in global will be globalObject

// this in a function
function sum() {
  console.log(this);
}
sum();

// function test() {
//   let obj = {
//     a: "name",
//     x: function () {
//       console.log(this);
//     },
//   };

//   obj.x();
// }

// let obj = {
//   name: "Abv",
//   test: function () {
//     console.log(this);
//   },
// };

// obj.test();

// test();

// // function test() {
// //   let obj = {
// //     a: "name",
// //     x: () => {
// //       console.log(this);
// //     },
// //   };

// //   obj.x();
// // }

// // test();
