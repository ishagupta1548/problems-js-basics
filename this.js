console.log(this);
// function test() {
//   let obj = {
//     a: "name",
//     x: function () {
//       console.log(this);
//     },
//   };

//   obj.x();
// }

let obj = {
  name: "Abv",
  test: function () {
    console.log(this);
  },
};

obj.test();

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
