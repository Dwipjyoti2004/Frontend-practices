let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  /*
  //accessing form element using id
  let user = document.querySelector("#user");
  let pass = document.querySelector("#pass");
  console.dir(user);
  console.log(user.value);
  console.dir(pass);
  console.log(pass.value);
  alert(`hi ${user.value}, your password is set to ${pass.value}`); */

  //accessing form element using form object itself
  console.dir(form);
  console.log(form.elements);
  console.log(form.elements[0]);
  console.log(form.elements[1]);
  console.log(form.elements[2]);
  let user = this.elements[0]; //form.elements[0]
  let pass = this.elements[1];

  console.log(user.value);
  console.log(pass.value);
  alert(`hi ${user.value}, your password is set to ${pass.value}`);
});
