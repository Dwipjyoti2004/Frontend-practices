function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}
three();
//here in call stack ans variable is not accessable outside the three() cause ans variable was build within three() function call and with the ending of three() the ans variable got also finished due to function scope.

//..................callback hell...................
h1 = document.querySelector("h1");
/*
//implementation 1
setTimeout(() => {
  h1.style.color = "red";
}, 1000);

setTimeout(() => {
  h1.style.color = "orange";
}, 2000);

setTimeout(() => {
  h1.style.color = "green";
}, 3000);
*/

/*
//implementation 2
function changeColor(color, delay) {
  setTimeout(() => {
    h1.style.color = color;
  }, delay);
}
changeColor("red", 1000);
changeColor("orange", 2000);
changeColor("green", 3000);
*/
/*
//callback 1
function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("blue", 1000);
      });
    });
  });
});
*/
/*
//callback 2
function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "apna college",
  () => {
    console.log("success: your data was saved.");
    savetoDb(
      "hello world",
      () => {
        console.log("success2: your data was saved.");
        savetoDb(
          "shradha",
          () => {
            console.log("success3: your data was saved.");
          },
          () => {
            console.log("failure3: weak connection, data not saved.");
          }
        );
      },
      () => {
        console.log("failure2: weak connection, data not saved.");
      }
    );
  },
  () => {
    console.log("failure: weak connection, data not saved.");
  }
); */
//these two are example of callback hell.
//callbacks nesting --> callback hell, these are very hard to understand. to avoid callback hell we use: 1.promises , 2.async & await keyword

//.................promises...................
function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved.");
    } else {
      reject("failure: weak connection");
    }
  });
}
/* savetoDb("apna college"); in browser
savetoDb("apna college");
Promise {<fulfilled>: 'success: data was saved.'}    
  [[Prototype]]: Promise
  [[PromiseState]]: "fulfilled"
  [[PromiseResult]]: "success: data was saved."
savetoDb("apna college");
Promise {<rejected>: 'failure: weak connection'}
  [[Prototype]]: Promise
  [[PromiseState]] : "rejected"
  [[PromiseResult]] : "failure: weak connection"
*/
/*
There are 3 states of promises: pending, rejected, fulfilled.
promise is a object.
it has two callbacks: resolve: success callback 
                      reject: failure callback
*/

/*
let request = savetoDb("apna college"); //req = promise obj
request
  .then(() => {
    console.log("promise was resolved");
    console.log(request);
  })
  .catch(() => {
    console.log("promise was rejected.");
    console.log(request);
  }); */

/*
savetoDb("apna college")
  .then(() => {
    console.log("1.promise was resolved");
  })
  .catch(() => {
    console.log("1.promise was rejected.");
  });

savetoDb("apna college")
  .then(() => {
    console.log("2.data 1 saved");
    savetoDb("hello world").then(() => {
      console.log("2.data 1 saved");
    });
  })
  .catch(() => {
    console.log("2.data 2 saved.");
  });

savetoDb("apna college")
  .then(() => {
    console.log("3.data1 saved.");
    return savetoDb("hello world.");
  })
  .then(() => {
    console.log("3.data2 saved.");
  })
  .catch(() => {
    console.log("3.promise was rejected.");
  });
  */
/*
o/p=
1.promise was resolved
3.data1 saved.
2.data2 saved.
3.data2 saved.

3.data1 saved.
1.promise was rejected.
2.data 2 saved.
3.data2 saved.

1.promise was rejected.
2.data 2 saved.
3.promise was rejected.
*/

/*
savetoDb("apna college")
  .then(() => {
    console.log("data1 saved");
    return savetoDb("hello world");
  })
  .then(() => {
    console.log("data2 saved");
    return savetoDb("shradha");
  })
  .then(() => {
    console.log("data3 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
  */
/*
o/p=
data1 saved
promise was rejected

data1 saved
data2 saved
data3 saved

promise was rejected
*/
//here if data 1 will be saved then data 2 will be saved & if data2 will be saved then data 3 will be saved concurrently which works similar to callback hell but more readable.
savetoDb("apna college")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return savetoDb("hello world");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return savetoDb("shradha");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
  });
/*
o/p=
data1 saved
result of promise:  success: data was saved.
data2 saved
result of promise:  success: data was saved.
promise was rejected
error of promise:  failure: weak connection

promise was rejected
error of promise:  failure: weak connection
*/

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
  });
