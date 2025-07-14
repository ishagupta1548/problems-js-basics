// var newA = 3;
// var newB = 4;
// sum(newA, newB);

// var sum = (a, b) => {
//   console.log(a + b);
// };

// function sum(a, b) {
//   console.log(a + b);
// }

// define
function sum(a, b, cb) {
  var result = a + b;
  cb(result);
}

function power(n) {
  console.log(2 * n);
}

sum(2, 3, power);
