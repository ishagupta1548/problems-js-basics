// // problem1
// function x() {
//     var i = 1;
//     setTimeout(()=>{
//         console.log(i)
//     }, 1000)

//     console.log("hello!")
// }

// x();

// // problem2
// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

//problem 3
// //Question: Create a function which can be invoked like this
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27




// // solution
// function createBase(baseNumber) {
//     return function(N) {
//       // we are referencing baseNumber here even though it was declared
//       // outside of this function. Closures allow us to do this in JavaScript
//       return baseNumber + N;
//     }
//   }

//   var addSix = createBase(6);
//   const result = addSix(10);
//   console.log(result)
//   addSix(21);

// // problem:
// async function asyncFunc() {
//   console.log("Start");
//   const data = await Promise.resolve("Data");
//   console.log(data);
//   console.log("End");
// }

// asyncFunc();
// console.log("After calling asyncFunc");

// // problem
// async function f() {
//   await Promise.reject("Error occurred");
//   console.log("After await");
// }

// f().catch((err) => console.log("Caught:", err));

// // problem:
// async function f() {
//   try {
//     let result1 = await Promise.resolve("First result");
//     let result2 = await Promise.reject("Second error");
//     console.log(result1, result2);
//   } catch (error) {
//     console.log("Caught:", error);
//   }
// }

// f();

// // problem:
// let p = new Promise((resolve, reject) => {
//   resolve("Resolved");
// });

// p.then((res) => {
//   console.log(res);
//   return new Promise((resolve, reject) => {
//     reject("Rejected");
//   });
// })
//   .then((res) => {
//     console.log("Second then:", res);
//   })
//   .catch((err) => {
//     console.log("Caught:", err);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

// problem:
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function sequential() {
//   console.log("Start");
//   await delay(1000);
//   console.log("After 1 second");
//   await delay(2000);
//   console.log("After 3 seconds");
// }
// async function parallel() {
//   console.log("Start");
//   await Promise.all([delay(1000), delay(2000)]);
//   console.log("After 2 seconds");
// }
// sequential();
// parallel();
