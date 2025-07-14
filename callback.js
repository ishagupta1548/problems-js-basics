// let foodOrder = ["pizza", "garlic bread", "pepsi"];

// // create order

// // function createOrderID(callback) {
// //   let orderID = 89767;
// //   console.log(orderID);
// //   callback(orderID);
// // }
// function createOrder(foodArray, callback) {
//   if (foodArray.length > 0) {
//     setTimeout(() => {
//       let orderID = 89767;

//       callback(orderID);
//     }, 4000);
//   }

//   // return orderID
// }

// // proceed to payment function
// function payment(orderId, callback) {
//   if (orderId) {
//     setTimeout(() => {
//       let paymentID = 897;
//       console.log(paymentID);
//       callback(paymentID);
//     }, 6000);
//   }
//   // returns paymentId
// }

// // order summary

// function showOrderSummary(paymentid) {
//   if (paymentid) {
//     console.log("Your order is created successfully!");
//   } // returns bool
// }

// createOrder(foodOrder, (orderID) => {
//   payment(orderID, (pid) => {
//     showOrderSummary(pid);
//   });
// });

// let orderID = createOrder(foodOrder);
// let paymentId = payment(orderID);
// let summary = showOrderSummary(paymentId);

// callback hell!

function sendEmail() {
  console.log("email sent");
}

function createBooking(data, cb) {
  console.log(data);
  cb();
}

createBooking({ name: "Isha" }, () => {
  sendEmail();
});
