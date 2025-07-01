//..........onclick, onmouseenter.................
/*
let btn = document.querySelector("button");
console.dir(btn);

//for single button technique 1
//  btn.onclick = function () {
//    console.log("button was clicked");
//  }; 

//for single button technique 2
function sayHello() { 
  alert("hello!");
}
btn.onclick = sayHello; */

//for single/more than 1 button another technique was inline way.
/*
  //for more than 1 button
let btns = document.querySelectorAll("button");
for (btn of btns) {
  btn.onclick = sayHello;
  btn.onmouseenter = function () {
    console.log("you entered a button");
  }; //just hovering mouse pointer on buttons it will print "you entered a button" on console.
  console.dir(btn);
}
function sayHello() {
  alert("hello");
}*/
/*for (btn of btns) { //this is not done
  btn.onclick = sayHello();
}
  */

//................Event listeners..................
//by clicking buttons if we want execution of multiple functions then event listeners is used.
// we can't execute multiple value of onclick property but we can create multiple eventlisteners for single object.

let btns = document.querySelectorAll("button");
for (btn of btns) {
  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);
  btn.addEventListener("dbclick", function () {
    console.log("you double clicked me!"); //single click need to be comment outed.
  });
}
function sayHello() {
  alert("hello");
}
function sayName() {
  alert("Apna college");
}
/*for (btn of btns) {
  btn.onclick(sayHello);
  btn.onclick(sayName); //any one will be executed.
}
function sayHello() {
  alert("hello");
}
function sayName() {
  alert("Apna college");
}*/

//...................................................
let p = document.querySelector("p");
p.addEventListener("click", function () {
  console.log("para was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
  console.log("mouse inside box");
});
/*o/p=
(3) para was clicked
(2) mouse inside box
para was clicked
mouse inside box*/
