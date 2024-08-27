let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolved!");
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolved!");
  }, 7000);
});

async function resolvePromise() {
  console.log("Entered function");
  let val = await p2;
  console.log(val);
  console.log("hello");

  let val2 = await p1;

  console.log(val2);
  console.log("hello after p2");
}

resolvePromise();

console.log("after function!");
