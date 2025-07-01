//..................this keyword....................
//whichever the object is using the method that is this.
const student = {
  name: "dwip",
  age: 23,
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    //let avg = (eng + math + phy) / 3;//gives error; methods in a object can't use parameters directly.
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks = ${avg}`);
  },
};
console.log(student.getAvg());
//this.name means whatever the object has called the perameter name that object's name is reffered here;here student that is.

function getAvg() {
  console.log(this);
}
getAvg(); //o/p= window object; whenever we make a function in any js file,then in that function the by default value of 'this' is window object.

//.................window object....................
/*window object: whenever we open a index.html file in browser through running a js code then to create the browser window a window object is created.
      in a page/tab the higher level object is window object and all the code is within this object. 
      For ex: alert method; alert("hello");
                            window.alert("hello");
              both gives same result.*/
console.log(window);

function hello() {
  console.log("hello");
}
hello();
window.hello(); //thats why whenever a normal function is called it is the method of window object. so for any normal methods window object acts as 'this'.

//.................try & catch.......................
console.log("hello");
console.log("hello");
//console.log(a); //gives error for which all the remaining right code will not execute;it simply means whenever an error occured in our website our site crashes and for a single error all the remaining next code written in js file will not execute, so handle this we use try & catch.
console.log("hello2");
console.log("hello2");
console.log("hello2");

try {
  console.log(a);
} catch (err) {
  console.log("caught an error... a is not defined");
  console.log(err);
}
//...................................................

//..................Arrow functions..................
/*teses are not stand alone functions.
 This can't be defined separately as function sum(){---}.
 These are nameless functions. 
 These functions are usally used  
      1. to assign value of a variable or 
      2. to pass perameter in higher order function(callback).
  For single argument parenthesis is optional.
  For no argument parenthesis is mandatory.*/

//callback:when a higher order function takes another function as an argument, then that function used as an argument is known as callback.
const sum = (a, b) => {
  console.log(a + b);
};
sum(2, 3);
console.log(sum);

const cube = (n) => {
  return n * n * n;
};
/*const cube = n => { //this is also a valid syntax
  return n * n * n;
};*/
let c = cube(3);
console.log(c);

const pow = (a, b) => {
  return a ** b;
};

const Hello = () => {
  console.log("hello world");
};
Hello();

//when arrow function just only returns a value ;no print or return or no other works then that arrow function can be consised more.
const mul = (a, b) => a * b;
console.log(mul(2, 3));
const square = (n) => n * n;
console.log(square(2));
//implicit means automatically understood previously; explicit means manually tellingn a thing.

//.................Set Timeout......................
/*set Timeout is an inbuild function of window object.
for a set timeout function our flow of execution of the program doesn't stop. set timeout function will execute at its own way but the after works of the set timeout function will execute before concurrently.
First the after code works will execute completely and then that settimeout function will execute after the set time out limit.even if any error occur in the after codework then also the setTimeout function will also execute after the error show.*/

/*console.log("Hi there!");
setTimeout(() => {
  console.log("Apna college");
}, 2000);
for (let i = 1; i <= 100; i++) {
  console.log("welcome to");
}*/

/*o/p= Hi there!
     (100)welcome to
     Apna college*/

//..................setInterval...................

// setInterval function basically executes a proper piece of code after a specific time intervals and will not stop until the id of that setInterval function is given  to 'clearInterval(id)'.

/*console.log("Hi there!");

let id = setInterval(() => {
  console.log("Apna college");
}, 2000);
console.log(id);

let id2 = setInterval(() => {
  console.log("Hello world");
}, 3000);
console.log(id2);*/

/*o/p=
Hi there!
2
3
Apna college
Apna college
Hello world
(2)Apna college
Hello world
Apna college
Hello world
(2)Apna college
Hello world
clearInterval(id)
undefined
(4)Hello world
clearInterval(id2)
undefined */

//write a func that prints "hello world" 5 times at intervals of 2s each.
let id = setInterval(() => {
  console.log("Hello world");
}, 2000);
setTimeout(() => {
  clearInterval(id);
  console.log("clear interval ran");
}, 10000);
//..........this with arrow functions...............
/*
1.for normal function scope depends on calling objects.so this keyword will depend on the calling object that through which calling object that function is called.
   where as this of arrow function has lexical scope,so where normal function checks which obj call it, arrow function checks which obj calls its parent.so arrow function's scope will be same as its parent's scope. if parent's scope is global then arrow function's scope will also be global.
*/
const a = 5; //global scope
const student1 = {
  name: "aman",
  marks: 95,
  prop: this, //global scope, refers to window obj. in js same as for any normal variable is under global scope, student obj also has global scope.
  getName: function () {
    console.log(this);
    return this.name; //here this refers to calling obj due to normal func & getname func is called by student obj; so this under getName is student obj.
  },
  getMarks: () => {
    console.log(this); //for arrow func 'this' refers to parent's scope (not calling obj's scope), parent is 'student1' here & student's scope is global here.so, this refers to window obj not student1 obj.
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //student
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); //window
    }, 2000);
  },
};
console.log(student1);
console.log(student1.prop);
console.log(student1.getName());
console.log(student1.getMarks());
//arrow func makes it's calling obj's this as it's 'this'.
/*in both the cases setTimeout() is called by window obj but in getInfo1 due to arrow func, this refers to it's parent's this. now its parent is function() whose scope(calling obj) is student. so, 'this' is student here.
    in getInfo2,setTimeout is called by window obj.so due to using normal func calling obj is window obj. so this refers to window obj here.
so whenever we want to use setTimeout, setInterval func like inbuilt func of window obj in our obj, we should use arrow functions as callback & reffer to correct this.
for normal func this refers to calling obj;for arrow func this refers to the obj calling its parent not that obj which calling func with 'this'.

in both getInfo1, getInfo2
calling obj: window
parent: function()
obj calling parent: student1
in getInfo1: due to arrow func,this refers to obj calling parent means student1
in getInfo2: due to normla func , this refers to calling obj means window obj.
*/

//................for each method....................
let arr = [1, 2, 3, 4, 5];
let print = function (el) {
  console.log(el);
};
arr.forEach(print); //1
arr.forEach(function (el) {
  console.log(el);
}); //2
arr.forEach((el) => {
  console.log(el);
}); //3
//for-each function can be used for objects too
let arr1 = [
  {
    name: "aman",
    marks: 95,
  },
  {
    name: "shradha",
    marks: 94.5,
  },
  {
    name: "rajat",
    marks: 92,
  },
];
arr1.forEach((student) => {
  console.log(student);
});
arr1.forEach((student) => {
  console.log(student.marks);
});

//................map function....................
let num = [1, 2, 3, 4];
let double = num.map((el) => {
  return el * 2;
}); //here double and map has same size.
console.log(double);
let double1 = num.map((el) => {}); //here still double1 and map has same size.
console.log(double1);

let students = [
  {
    name: "aman",
    marks: 95,
  },
  {
    name: "shradha",
    marks: 94.5,
  },
  {
    name: "rajat",
    marks: 92,
  },
];
let gpa = students.map((el) => {
  return el.marks / 10;
});
console.log(gpa);

//...............FILTER FUNCTION....................
let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
let ans = nums.filter((el) => {
  return el % 2 == 0; //even->true, odd->false
});
console.log(ans);
let ans1 = nums.filter((el) => {
  return el < 5;
});
console.log(ans1);

//...............every funcction....................
console.log([2, 4, 6, 8].every((el) => el % 2 == 0));
console.log([2, 3, 4, 8].every((el) => el % 2 == 0));

//...............some function.....................
console.log([2, 3, 4, 8].some((el) => el % 2 != 0));
//every is like logical AND; some is like logical OR.

//..............reduce function......................
let nums1 = [1, 2, 3, 4];
let finalval = nums1.reduce((res, el) => {
  console.log(res);
  return res + el;
});
console.log(finalval);

let max = nums1.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(max);

//function to create min of an array
function getMin(nums) {
  let min = nums.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return min;
}
let nums2 = [10, 20, 30, 40, 50, -5];
console.log(getMin(nums2));

//..............Default perameter...................
function sum1(a, b = 2) {
  return a + b;
}
console.log(sum1(1, 4));
console.log(sum1(1));
console.log(1, 2);

function sum1(a, b) {
  return a + b;
}
console.log(sum1(1)); /*o/p= NaN */

function sum1(a = 1, b) {
  return a + b;
}
console.log(sum1(1, 4));
console.log(sum1(1)); //a=1, b= undefined; O/P= NaN
//thats why default perameters should always be used at the end of the function arguments section.
function sum2(b, a = 1) {
  return a + b;
}
console.log(sum2(1));

//......................spread......................
let arr3 = [1, 2, 3, 4, 5, 6];
console.log(
  Math.min(arr3[0], arr3[1], arr3[2], arr3[3], arr3[4], arr3[5], arr3[6])
);
console.log(arr3);
console.log(...arr3);
console.log(Math.min(...arr3));
arr3.push(-1);
console.log(Math.min(...arr3));
console.log("apna collge");
console.log(..."apna collge");

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let numbers = [...even, ...odd];
console.log(numbers);

const data = {
  email: "ironman2gmail.com",
  password: "abcd",
};
const dataCopy = { ...data, id: 123 };
console.log(dataCopy);

let arr4 = [1, 2, 3, 4, 5];
let obj1 = { ...arr4 }; //in this object key will be indexees of the elements & value will be elements itself.
let obj2 = { ..."hello" }; //here, key -->indexes of characters; value --> characters of the string
console.log(obj1);
console.log(obj2);

//....................Rest......................
//it is total opposite of the idea of spread.
function sum3(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us: ", args[i]);
  }
  console.log(arguments);
}
sum3(1, 2, 3, 4);

function min1(a, b, c, d) {
  console.log(arguments);
}
function min2() {
  console.log(arguments); //here in min2 function we dont create any argument named variable but still it will not give error cause for every function there is a collection named "arguments" is present which has all the arguments.
  console.log(arguments.length);
  //arguments.push(1); this will give error cause push,pop,shift are array functions but arguments is a collection not an array.
}
min1(12, 23, 34);
min2(5, 6, 7, 8);

/*function sum4(){ //error,arguments is not a array function
  return arguments.reduce((sum,el)=> sum+el);
}*/
//through arguments we can access all the elements, we can fing length butu can't implement array methods
function sum4(...args) {
  //here through rest, all arguments are stored in args and thus array methods can be applicable.
  // Rest collects all the data in array.
  return args.reduce((sum, el) => sum + el);
}
console.log(sum4(1, 2, 3, 4));

function min1(...args) {
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}
console.log(min1(1, 2, 3, 4));

function min2(msg, ...args) {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}
console.log(min2(1, 2, 3, 4)); //here msg=1;elements to find min=2,3,4.
console.log(min2("hello", 2, 3, 1)); //here msg=hello;elements to find min=2,3,1.
//thus extra perameters (here, msg) should be written in the beggining in argument section before REST cause after collecting if the xtra perameter is written then that will show error.

//..............Destructering......................
let names = ["tony", "bruce", "steve", "peter", "abc", "xyz", "pyq"];
let [winner, runnerup, secondrunnerup] = names;
/*let winner = names[0];
let runnerup = names[1];
let secondrunnerup = names[2];*/
console.log(winner, runnerup, secondrunnerup); //tony, bruce
let [winner1, runner1, ...others] = names;
console.log(...others);

const student2 = {
  name: "karan",
  age: 14,
  class: 9,
  subjects: ["hindi", "english", "math", "science"],
  username: "karan@123",
  password: "abcd",
};
let { username, password } = student2; //here "username" variable is matched with the key 'username' of student2.
console.log(username, password);

let { user } = student2;
console.log(user); //undefined cause there is no key named 'user' in student2 object.

//let { username: user, password} = student2;

//let { username: user1, password: pass, city } = student2; here value of the key 'username' of student2 obj is stored in another variable named 'user1'
//console.log(user1, pass, city); o/p= karan@123 abcd undefined

let { username: user2, password: pass2, city = "mumbai" } = student2;
console.log(user2, pass2, city);

const student3 = {
  name: "karan",
  age: 14,
  class: 9,
  subjects: ["hindi", "english", "math", "science"],
  username: "karan@123",
  password: "abcd",
  cityy: "pune",
};
/*let { username: user3, password: pass3, cityy= "mumbai" } = student3;
console.log(cityy); */ //pune
let { username: user3, password: pass3, cityy: place = "mumbai" } = student3;
console.log(place);
