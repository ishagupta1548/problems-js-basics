let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is resolved P1");
  }, 3000);
});
console.log(p1);
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is resolved P2");
//   }, 7000);
// });

// async function test() {
//   try {
//     console.log("1");
//     // let data = await p2;
//     // console.log(data);

//     let data1 = await p1;
//     throw new Error("Rejected");
//     console.log(data1);
//   } catch (err) {
//     console.log(err);
//   }
// }

// test();
// p1.then((data) => {
//   console.log(data);
// });
// console.log("hello universe!");

// async function resolvePromise() {
//   let val = await p1;

//   console.log("Hello world");
//   console.log(val);
// }
// resolvePromise();
// async function resolvePromise() {
//   let val = await p1;
//   console.log("Hello world");
//   console.log(val);

//   // let val1 = await p1;
//   // console.log("Hello world");
//   // console.log(val1);
// }
// resolvePromise();

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is resolved!");
//   }, 7000);
// });

// async function resolvePromise() {
//   console.log("Entered function");
//   let val = await p2;
//   console.log(val);
//   console.log("hello");

//   let val2 = await p1;

//   console.log(val2);
//   console.log("hello after p2");
// }

// resolvePromise();

// console.log("after function!");

// async function getUserDetail() {
//   let data = await fetch("https://api.github.com/users/ishagupta1548");
//   // console.log(data);

//   let jsonData = await data.json();

//   console.log(jsonData);
// }

// getUserDetail();

async function test() {
  console.log("Inside test");
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("After await");
  console.log(data);
}
test();
console.log("outside the test function");

// let projection = {
//   jsmonId: 1,
//   url: 1,
//   fileId: 1,
//   domainName: 1,
//   createdAt: 1,
//   userId: 1,
//   isScanned: 1,
//   orgId: 1,
//   _id: 0,
// };

// function createObj(projection, val) {
//   projection[val] = 1;
//   return projection;
// }
// let final = createObj(projection, "clientSideVulnerability.setTimeoutCalls");

// console.log(final);

// let str = "vulnerab";

// if (str.split("vulnerabilities.")[1]) {
//   console.log("here");
// }
// console.log("2");
