//............this in event listeners................
// whenever we try to imply a single eventListener on multiple objects then this keyword is used.
/*
let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
  console.log(this);
  console.dir(this);
  console.dir(this.innerText);
  console.log(this.innerText);
  this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
*/
/*
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(event);
  // this 'event' is also written as e,ev,evt.
  console.log("button clicked");
});
btn.addEventListener("dbclick", function () {
  console.log(event);
  console.log("button  double clicked");
});*/

//................keyboards events...................
/*
let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
  console.log(event);
  console.log("key = ", event.key);
  console.log("code = ", event.code);
  console.log("key was pressed");
  // keydown counts normal spaces,each delete using backspace every press.
  if (event.code == "ArrowUp" || event.code == "KeyU") {
    console.log("character moves forward");
  } else if (event.code == "ArrowDown" || event.code == "KeyD") {
    console.log("character moves backward");
  } else if (event.code == "ArrowLeft" || event.code == "KeyL") {
    console.log("character moves left");
  } else if (event.code == "ArrowRight" || event.code == "KeyR") {
    console.log("character moves right");
  }
});
inp.addEventListener("keyup", function () {
  console.log("key was released");
});
*/
//event obj has two imp properties. 1.'key' which shows what is visible in the input on the screen and 2.'code' shows what is the ode of at particular character
//for ex. code= 'semicolon' , key = ';' & code = "space", code = " ".

//..................form events.....................

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // by this event.preventDefault(); all the actions will be performed which are written in the callback and action="/action" URL in html will not be performed and this page will not be redirected to further any page.
  alert("form submitted");

  let inp = document.querySelector("input");
  console.dir(inp);
  console.log(inp.value);
});

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

// });
