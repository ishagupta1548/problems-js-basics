// var x = 10;
// var x = 20;
// console.log(x);

// let y = 10;
// let y = 20;
// console.log(y);

// const z = 10;
// z = 20;
// console.log(z);

// var a = 1;
// {
//   var a = 2;
//   let b = 5;
//   console.log(b);
// }
// console.log(a);

// let a = 1;
// {
//   let a = 2;
// }
// console.log(a);

// function foo() {
//   var a = 1;
//   {
//     var a = 2;
//   }
//   return a;
// }
// console.log(foo());

// var a = 1;
// function foo() {
//   var a = 2;
//   return a;
// }
// console.log(foo());
// console.log(a);

// function foo() {
//   if (true) {
//     let a = 1;
//   }
//   return a;
// }
// console.log(foo());

// let a = 1;
// function first() {
//   a = 2;
//   function second() {
//     let a = 3;
//   }
//   second();
//   return a;
// }
// console.log(first());
// console.log(a);

// var a = 1;
// function first() {
//   a = 2;
//   function second() {
//     var a = 3;
//   }
//   second();
//   return a;
// }
// console.log(first());
// console.log(a);

let a = 1;
{
  a = 2;
  {
    a = 3;
    console.log(a);
  }
  console.log(a);
}
console.log(a);

// let a = 1;
// function foo() {
//   let a = a + 1;
//   return a;
// }
// console.log(foo());

// for (const i = 0; i < 3; i++) {
//   console.log(i);
// }

// // problem

// {
//   let d;
//   console.log(d);
//   d = 40;
// }

// var g = 80;
// {
//   let g = 90;
//   console.log(g);
// }
// console.log(g);

// var h = 100;
// {
//   var h = 110;
//   console.log(h);
// }
// console.log(h);

// // problem
// var j = 130;
// {
//   let j = 140;
//   {
//     var j = 150;
//     console.log(j);
//   }
//   console.log(j);
// }
// console.log(j);
