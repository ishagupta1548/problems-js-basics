const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The promise p1 is resolved");
  }, 1000);
});

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("The promise p2 is resolved")
//     }, 10000)
// })

async function resolvePromise() {
  console.log("Hello");

  const data1 = await p1;

  console.log(data1);

  //   p1.then((data) => {
  //     console.log(data);
  //   });

  console.log("world");
}

resolvePromise();

console.log("this is after the calling of the funtion");
