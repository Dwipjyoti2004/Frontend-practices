let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

/*
let delBtns = document.querySelectorAll(".delete");
for (delBtn of delBtns) {
  delBtn.addEventListener("click", function () {
    let par = this.parentElement;
    console.log(par);
    par.remove();
  });
}
//but eventListener only works on existing elements on page,not on new further added elements ; thats how this will not delete the new added elements it will only delete the existing ones
//so if we want that existing one elements's event listener also work on new added elements ,in that case we apply Event Delegation.
*/

//Event Delegation is done using Event bubbling. whenever we want that anything got triggered for our new child element then we write that same EventListener for our parent element.thats how when a new child element will be created and a EventListener got triggered then automatically parent element's EventListener will be triggered.
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
