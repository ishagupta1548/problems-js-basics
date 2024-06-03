let input = document.getElementById("input").value;

console.log(h1);

h1.innerHTML = "hello world";

// query selector

let h1 = document.querySelector("h1");

// console.log(document.querySelector("h1"));

// it replaces all the previous nodes with this new html structure with new content

// h1.innerHTML = "Hello universe";

// // To append the item in the list and to keep origin content

// const list = document.querySelector("ul");

// list.innerHTML = list.innerHTML + "<li>Item 5</li>";

// // it renders again

// list.insertAdjacentHTML()

let btn = document.getElementById("clickme");
function clickHandler() {
  alert("clicked");
}

btn.addEventListener("click", clickHandler);
