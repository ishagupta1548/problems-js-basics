// let person = {
//   "first name": "Amit",
//   age: 30,
//   hobbies: ["bike riding", "working out"],
//   greet: function () {
//     alert("hey! I am Amit");
//   },
// };

let rest = {
  name: "dominos",
  location: {
    lat: 23.45,
    long: 34.35
  }
}
// // A new property can be added
// person.rollNumber = undefined;

// delete person.age;

// console.log(person);

// console.log(person["first name"]);

function getLocation() {
  // alert("clicked");
  let val = navigator.geolocation.getCurrentPosition((posData, error) => {
    console.log(posData);
    console.log(error);
  });

  console.log("value", val);
}

let btn = document.getElementById("clickme");

btn.addEventListener("click", getLocation);
