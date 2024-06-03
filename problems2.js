// problem 1
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Success!"), 1000);
// });

// promise.then((result) => {
//   console.log(result);
// });
// console.log("Waiting for the promise...");

// problem 2

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Failed!"), 1000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("Waiting for the promise...");

// problem 3
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 500);
// });

// promise
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 3;
//   })
//   .then((result) => {
//     console.log(result);
//   });

// problem 4
// Convert the following callback-based function to return a promise.

// function getData(callback) {
//   setTimeout(() => {
//     callback(null, "Data received");
//   }, 1000);
// }

// getData((error, data) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//   }
// });

// sol:

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 1000);
//   });
// }

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// problem 5
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Step 1"), 500);
// });

// promise
//   .then((result) => {
//     console.log(result);
//     throw new Error("Something went wrong");
//     return result;
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// problem 6
// Perform a series of asynchronous operations where each operation depends on the result of the previous one. Use these three functions and log the final result.
// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: 1, name: "John Doe" }), 200);
//   });
// }

// function getOrders(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(["Order1", "Order2"]), 300);
//   });
// }

// function getOrderDetails(orderId) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ orderId, details: "Order details" }), 100);
//   });
// }

// // solution

// getUser()
//   .then((user) => {
//     console.log("User:", user);
//     return getOrders(user.id);
//   })
//   .then((orders) => {
//     console.log("Orders:", orders);
//     return getOrderDetails(orders[0]);
//   })
//   .then((orderDetails) => {
//     console.log("Order Details:", orderDetails);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

// problem 7
// new Promise((resolve, reject) => {
//   reject("Error occurred");
// })
//   .catch((error) => {
//     console.error("Caught error:", error);
//     return "value 1";
//   })
//   .then((result) => {
//     console.log(result);
//   });

// problem 8
// new Promise((resolve, reject) => {
//   reject("initial error");
// })
//   .catch((error) => {
//     console.error("Caught:", error);
//     throw new Error("second error");
//   })
//   .catch((error) => {
//     console.error("Caught:", error.message);
//   })
//   .then(() => {
//     console.log("Finished error handling");
//   });

// problem 9
// Create a promise that resolves with "step 1". Chain a then block that throws an error "step 2 error". Handle this error in a catch block and return "recovered step 2". Chain another then block to log the final result.

//Solution:
// new Promise((resolve, reject) => {
//   resolve("start");
// })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       reject("mid error");
//     });
//   })
//   .catch((error) => {
//     console.error("Caught:", error);
//     return "recovered from mid error";
//   })
//   .then((result) => {
//     console.log("Final result:", result);
//   });
