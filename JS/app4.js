/*let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
  console.dir(smallImages[i]);
}
o/p=
img.oldImg //1
img.oldImg //2
img.oldImg //3


let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
  console.dir(smallImages[i].src);
}
o/p=
http://127.0.0.1:5501/JS/assets/creation_1.png
http://127.0.0.1:5501/JS/assets/creation_2.jpeg
http://127.0.0.1:5501/JS/assets/creation_3.jpeg
 */

/*let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].src = "assets/spiderman_img.png";
  console.log(`value of image no ${i} is changed.`);
}*/

/*
console.log(document.getElementsByClassName("abcdef")); 
o/p=
HTMLCollection[]
  length: 0
  [[Prototype]]: HTMLCollection */

console.log(document.getElementsByTagName("span"));

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a")); //  o/p= NodeList(4); every elements are node in tree
console.dir(document.querySelectorAll("p"));

//...............DOM manipulation....................
//here HTML elements will be manupulated.
// if some part of the content is made visibility:hidden or display:none then that part will too be shown in textContent but not shown in innertext.
//textContent borrows its textual data from HTML file whereas innertext borrows its data from the data which is visible on the screen, innerHTML gives whole HTML markup.
/* para.innerText = "hi, i am <b> peter parker</b>"
   o/p=hi, i am <b> peter parker</b>
   para.innerHTML = "hi, i am <b> peter parker</b>"
   o/p= hi, i am peter parker ;peter parker in in bold .*/
let heading = document.querySelector("h1");
//heading.innerHTML = "<u> Spider Man</u>";
heading.innerHTML = `<u>${heading.innerText}</u>`;

//whenever if any changing of the attribute name of any class or id occur then the styling associated with that attribute will not take place to the new attribuute name.

let links = document.querySelectorAll(".box a");
/*for (let i = 0; i < links.length; i++) {
  links[i].style.color = "green";
}*/
for (link of links) {
  link.style.color = "green"; //inline style not saved in css file
}
//style property gives all inline styling properties.
//it doesn't show those css stylings even in js console

let img = document.querySelector("img");
console.log(img.classList);
console.log(heading.classList);

heading.classList.add("green");
console.log(heading.classList);
heading.classList.add("underline");
console.log(heading.classList);
heading.classList.remove("green");
console.log(heading.classList);

heading.setAttribute("class", "green"); //wavy underline will be removed. thats why setattribute is not used to add class cause using setAttribute at a time only one class can be assigned to one attribute. so to add multiple classes to a attribute we will always use classList.seAttribute will reset all old class values to one single class value.
console.log(heading.classList.contains("heading"));

let box = document.querySelector(".box");
console.log(box.classList);
box.classList.add("yellowBg");
//here yellow background will not be added to the the box cause yellowbg class is defined before the box class AND BOX CLASS ITS OWN BG COLOR.

//...............adding element on page.........
let newP = document.createElement("p");
console.dir(newP);
newP.innerText = "hi , i am a new p";
console.dir(newP);
let body = document.querySelector("body");
body.appendChild(newP);
console.log(newP);
box.appendChild(newP);
//appendChild appends elements to the child of a element but append() appends element to the element itself.
let btn = document.createElement("button");
console.dir(btn);
btn.innerText = "click me!";
box.appendChild(btn);
newP.append(" this is new text.");
newP.append(btn);
newP.append("do not click this button");
box.prepend(newP);

let p = document.querySelector("p");
console.dir(p);
p.insertAdjacentElement("beforebegin", btn);
p.insertAdjacentElement("afterbegin", btn);
p.insertAdjacentElement("beforeend", btn);
p.insertAdjacentElement("afterend", btn);

body.removeChild(btn);
p.insertAdjacentElement("afterend", btn);
btn.remove();
//p.remove();
//body.remove();
