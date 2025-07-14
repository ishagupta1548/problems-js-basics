// function isOdd(a) {
//   if (a % 2 != 0) {
//     // some logic
//     return true;
//   }
// }

// let isEven = (a) => {
//   if (a % 2 == 0) return true;
// };
var num = 10;

var isEven = (num) => {
  if (num % 2 == 0) {
    console.log("Number is an even numbers");
  } else {
    console.log("Number is an odd number");
  }
};

isEven(num);
