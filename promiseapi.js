// promise.all

let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Promise P1 is resolved");
  }, 1000);
});

let p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise P2 is resolved");
  }, 2000);
});

let p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise P3 is resolved");
  }, 3000);
});

let result = Promise.all([p1, p2, p3]);

result.then((data) => {
  console.log(data);
});
