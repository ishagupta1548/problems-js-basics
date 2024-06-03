// console.log(window);
function test() {
  let obj = {
    a: "name",
    x: function () {
      console.log(this);
    },
  };

  obj.x();
}

test();

// function test() {
//   let obj = {
//     a: "name",
//     x: () => {
//       console.log(this);
//     },
//   };

//   obj.x();
// }

// test();
