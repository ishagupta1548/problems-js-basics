// let person2 = {
//   firstname: "Amit",
//   age: 30,
//   hobbies: ["bike riding", "working out"],
//   greet: function () {
//     alert("hey! I am Amit");
//   },
// };

// console.log(person2.greet());

// console.log(person.hobbies);
// console.log(person["first name"]);
// let rest = {
//   name: "dominos",
//   location: {
//     lat: 23.45,
//     long: 34.35,
//   },
// };

// let newObj = [...person, ...rest];
// console.log(newObj);
// // // A new property can be added
// // person.rollNumber = undefined;

// // delete person.age;

// // console.log(person);

// // console.log(person["first name"]);

// function getLocation() {
//   // alert("clicked");
//   let val = navigator.geolocation.getCurrentPosition((posData, error) => {
//     console.log(posData);
//     console.log(error);
//   });

//   console.log("value", val);
// }

// let btn = document.getElementById("clickme");

// btn.addEventListener("click", getLocation);

let person = {
  firstname: "Isha",
  lastname: "Gupta",
};
let person1 = {
  firstname: "Ishika",
};

let newObj = { ...person, ...person1 };
console.log(newObj);

// let arr1 = ["isha", "gupta"];
// let a = 3;
// let b = "hello";
// console.log(typeof arr1);
