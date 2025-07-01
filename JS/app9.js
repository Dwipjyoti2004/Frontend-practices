/*
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

let user = document.querySelector("#user");
user.addEventListener("change", function () {
  console.log("change event");
  console.log("final value = ", this.value);
});
//chenge event tracks the difference between initial and final state not tracks the small changes of each element.
user.addEventListener("input", function () {
  console.log("input changed");
  console.log("final value = ", this.value);
});
//non character keys like shift, arrow key, ctrl etc don't trigger input event. input event tracks the small changes of each element.
let pass = document.querySelector("#pass");
pass.addEventListener("change", function () {
  console.log("change event");
  console.log("final value = ", this.value);
});
pass.addEventListener("input", function () {
  console.log("input changed");
  console.log("final value = ", this.value);
});
*/

//.............text editor.............
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
  console.log(inp.value);
  p.innerText = inp.value;
});
