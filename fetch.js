fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    return data.json();
  })
  .then((data1) => {
    console.log(data1);
  })
  .catch((err) => {
    console.log(err);
  });

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is resolved");
//   }, 5000);
// });
// async function getUsers() {
//   let data = await p1;
//   console.log(data);
//   console.log("hello");
// }

// let val = getUsers();
// console.log(val);

// console.log("out of the function");
