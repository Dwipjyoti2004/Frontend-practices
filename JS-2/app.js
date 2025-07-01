//event bubbling: whenever we have nested elements and each element has its own event listener and then if eventListener of any internal elemenet got triggered then automatically it will trigger the eventlistener of outer elements too.

let div = document.querySelector("#container");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
  console.log("div was clicked");
});

ul.addEventListener("click", function (event) {
  //event.stopPropagation();
  //this event.stopPropagation(); is used to stop this event bubbling on further
  console.log("ul was clicked");
});

for (li of lis) {
  li.addEventListener("click", function () {
    console.log("li was clicked");
  });
}

//call Stack refers that all the called functions are stored in a stack orderwise in LIFO manner which tracks the order of calling function execution.
//breakpoints: whenever at the time of execution of long code we want to know how a particular line is being executed then we use breakpoints. generally it is used for debugging. it is done on browser.
