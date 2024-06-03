// Example of high order functions

function x() {
  console.log("hello");
}

function y(x) {
  x();
}

// Calculate the area of array of radius of circles

const radius = [4, 3, 2, 5];

// optimised way

// create a logic

const area = function (radius) {
  return Math.PI * radius * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i <= radius.length; i++) {
    output.push(logic(radius));
  }
};

console.log(calculate(radius, area));

const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Randomly decide whether to resolve or reject
    const shouldResolve = Math.random() > 0.5;

    if (shouldResolve) {
      resolve("Hello World");
    } else {
      reject("Error occurred");
    }
  }, 2000);
});

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
