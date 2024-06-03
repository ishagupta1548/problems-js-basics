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
//Question: Create a function which can be invoked like this
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// solution
function createBase(baseNumber) {
    return function(N) {
      // we are referencing baseNumber here even though it was declared
      // outside of this function. Closures allow us to do this in JavaScript
      return baseNumber + N;
    }
  }

//   var addSix = createBase(6);
//   const result = addSix(10);
//   console.log(result)
//   addSix(21);
