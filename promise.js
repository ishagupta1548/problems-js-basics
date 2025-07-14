// let food = ["pizza", "burger"];

// let promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let data = {
//       firstName: "Isha",
//       lastName: "Gupta",
//     };
//     res(data);
//   }, 3000);
// });

// promise1.then((data) => {
//   console.log(data);
// });

// let arr = ["pizza", "burger"];
// function createOrder(foodArray) {
//   return new Promise((resolve, reject) => {
//     if (foodArray.length > 0) {
//       let orderID = 35;
//       resolve(orderID);
//     } else {
//       reject("No food order");
//     }
//   });
// }

// let promiseFoodOrder = createOrder(arr);

// function payment(orderID) {
//   return new Promise((resolve, reject) => {
//     let paymentID = 346;
//     resolve("Payment done", paymentID);
//   });
// }

// createOrder(food)
//   .then((orderID) => {
//     console.log(orderID);
//     return payment(orderID);
//   })
//   .then((paymentID) => {
//     console.log(paymentID);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// washCar()
//   .then((value) => {
//     console.log(value);

//     return driveCar();
//   })
//   .then((value) => {
//     console.log(value);
//   });

// pipe the data
// return a promise from a promise

// fetch("").then((data) => {

// })

// let value = false;

// let p1 = new Promise((resolve, reject) => {
//   resolve("This promise is resolved!");
// });

// console.log(p1);

//1 --> Fetch 100 users from db --> lets say it takes 30 seconds
//2 --> Displat the data fetched from the user --> 10 seconds

// sync --> line by line execution!
// example setTimeout() --> example of async behaviour

// Async
//1 --> Fetch 100 users from db --> lets say it takes 30 seconds --> callback or promise
//2 --> Display the data fetched from the user --> 10 seconds
//------------------------------------------------------------------------------//
// let p1 = new Promise((resolve, reject) => {
//   // async operation

//   setTimeout(() => {
//     let randomVal = Math.random();

//     if (randomVal > 0.5) {
//       resolve(randomVal);
//     } else {
//       reject("Invalid number");
//     }
//   }, 2000);
// });
// console.log(p1);
// p1.then((data) => {
//   console.log("promise fulfilled", data);
// }).catch((err) => {
//   console.log(err);
// });

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let randomNumb = Math.random();
//     if (randomNumb > 0.5) {
//       resolve(randomNumb);
//     } else {
//       reject("Number is less than 0.5");
//     }
//   }, 2000);
// });

// p1.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// console.log("hello");

// let p1 = new Promise((res, rej) => {
//   let numb = Math.random();
//   setTimeout(() => {
//     if (numb > 0.5) {
//       // promise resolve
//       res(numb);
//     } else {
//       // promise reject
//       rej("Number is less than 0.5");
//     }
//   }, 2000);
// });

// console.log(p1);

// p1.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// function add(num1, num2) {
//   return num1 + num2;
// }

// let sum = add(2,3)

// let p2 = fetch("https://jsonplaceholder.typicode.com/sers");
// console.log("hellos1");

// p2.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });
// console.log("hellos");

// let result = fetch("https://jsonplaceholder.typicode.com/users");

// result
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Resolved!"), 2000);
// });
// promise2.then((result) => {
//   console.log(result);
// });
// console.log("Immediate log");
