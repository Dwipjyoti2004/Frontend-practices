//..................async.....................
/*
async function greet() {}
console.log(greet());

async function greet1() {
  return "hello";
}
console.log(greet1());

async function greet2() {
  abc.abc();
  return "hello";
}
console.log(greet2());

async function greet3() {
  throw "weak connection";
  return "hello";
}
console.log(greet3());

greet1()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was: ", result);
  })
  .catch((err) => {
    console.log("promise was rejected with err: ", err);
  });

greet3()
  .then((result) => {
    console.log("promise was resolved");
    console.log("result was: ", result);
  })
  .catch((err) => {
    console.log("promise was rejected with err: ", err);
  });

let demo = async () => {
  return 5;
};
console.log(demo());
*/

//..................await.....................
//await keyword can only be used in async function.
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}
async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}
demo();

/*
h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed!");
    }, delay);
  });
}
async function color() {
  await changeColor("red", 1000);
  await changeColor("orange", 1000);
  await changeColor("green", 1000);
  changeColor("blue", 1000);
}
color(); //here no rejection issue can be present; so await keyword can be used by this time. */

/*
h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed!");
    }, delay);
  });
}
async function colors() {
  await changeColor("red", 1000);
  await changeColor("orange", 1000);
  await changeColor("green", 1000);
  changeColor("blue", 1000);

  let a = 5;
  console.log(a);
  console.log("new number = ", a + 3);
}
colors(); */
/*
color changed to red
color changed to orange
color changed to green
Uncaught (in promise) promise rejected
due to this uncaught error the remaining part of the code which was not even dependend of the promise has not run too(console.log(a))*/

//solution to handle promises
h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed!");
    }, delay);
  });
}
async function colors() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    changeColor("blue", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }

  let a = 5;
  console.log(a);
  console.log("new number = ", a + 3);
}
colors();
