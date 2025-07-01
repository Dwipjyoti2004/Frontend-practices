/*console.log("Hello world!");
console.log("Apna college");
let a = 5;
let b = 10;
console.log("sum is: ", a + b);*/

let pencilPrice = 10;
let erasorPrice = 5;
console.log("The total price is: ", pencilPrice + erasorPrice, "Rupees."); //1
let output = "The total price is: " + (pencilPrice + erasorPrice) + " Rupees.";
console.log(output); //2
console.log(`The total price is: ${pencilPrice + erasorPrice} Rupees.`);
//means first this template literals ${ } are calculated then that value is embedded in the string; then further after calculating the whole string that is visualized through console.log().
let a = 10;
let b = 5;
console.log(a++); //10
console.log(++a); //12
b = a;
console.log(b); //12
let c = 18;
console.log(c < 18); //false
console.log(c <= 18); //true
console.log(c > 18); //false
console.log(6 < 18); //true
console.log(18 == 18); //true
console.log(c != 18); //false
console.log(5 == "5"); //true
console.log("a" == 97); //false ; 97 is unicode of a

let n = 5;
let str = "5";
console.log(typeof n);
console.log(typeof str);
console.log(n == str); //  == operator just compares the value ignoring the type
console.log(n === str); //  === operator compares the value as well as the type

//conditional statement
let firstName = "aman";
if (firstName == "aman") {
  console.log(`welcome ${firstName}`);
}
console.log("before my if statement");
let age = 23;
if (age >= 18) {
  console.log("you can vote");
}
if (age < 18) {
  console.log("you can drive");
}
console.log("After my if statement");

console.log("Red" == "red"); //Js is a case sensitive language
console.log("Red" === "red");

//Traffic light system
let color = "green";
if (color === "red") {
  console.log("Stop! light colour is red");
}
if (color === "yellow") {
  console.log("Slow down. light colour is yellow");
}
if (color === "green") {
  console.log("Go. light colour is green");
}

let marks = 75;
if (marks >= 80) {
  console.log("A+");
} else if (marks >= 60) {
  console.log("A");
} else if (marks >= 33) {
  console.log("B");
} else if (marks < 33) {
  console.log("C");
}

let age1 = 17;
if (age1 >= 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

let size = "XL";
if (size === "XL") {
  console.log("price is rs. 250");
} else if (size === "L") {
  console.log("price is rs. 200");
} else if (size === "M") {
  console.log("price is rs. 100");
} else if (size === "S") {
  console.log("price is rs. 50");
}

//nested if-else
let marks1 = 32;
if (marks >= 33) {
  console.log("pass");
  if (marks >= 80) {
    console.log("Grade: O");
  } else {
    console.log("Grade: A");
  }
} else {
  console.log("Better luck next time.");
}

//logical operator
let marks2 = 75;
if (!(marks2 < 33)) {
  console.log("pass");
  console.log("A+");
}
console.log(!(5 < 3)); //true
if ((marks2 > 33 && marks2 <= 80) || !false) {
  console.log("pass");
} //whenever there is multiple conditions/logical operators the execution will be from left to right;means here first (marks2 > 33) then (marks2 <= 80) then && operator will be checked then || then ! will be checked.

//A 'good string" is a string that starts with the letter 'a' & has a length >3.
let str1 = "apple";
if (str1[0] === "a" && str1.length > 3) {
  console.log("good string");
} else {
  console.log("Bad string");
}

//truthy , falsy
if (true) {
  //true
  console.log("it has a true value"); //executed
} else {
  console.log("it has a false value");
}

if (false) {
  //false
  console.log("it has a true value");
} else {
  console.log("it has a false value"); //executed
}

if (0) {
  //false
  console.log("it has a true value");
} else {
  console.log("it has a false value"); //executed
}

if ("") {
  //false
  console.log("it has a true value");
} else {
  console.log("it has a false value"); //executed
}

if (" ") {
  //true
  console.log("it has a true value"); //executed
} else {
  console.log("it has a false value");
}

if (1) {
  //true
  console.log("it has a true value"); //executed
} else {
  console.log("it has a false value");
}

if ("Apna college") {
  //true
  console.log("it has a true value"); //executed
} else {
  console.log("it has a false value");
} //here Apnacollege is given as a string;so the value of the string is apnacollege but in context of boolean it is a true value.

if (null) {
  //false
  console.log("it has a true value");
} else {
  console.log("it has a false value"); //executed
}

if (undefined) {
  //false
  console.log("it has a true value");
} else {
  console.log("it has a false value"); //executed
}

if (NaN) {
  //false
  console.log("it has a true value");
} else {
  console.log("it has a false value"); //executed
}

let string = "";
if (string) {
  console.log("string is not empty");
} else {
  console.log("string is empty"); //executed
}

let string1 = " ";
if (string1) {
  console.log("string1 is not empty"); //executed
} else {
  console.log("string1 is empty");
}

let num = 0;
if (num) {
  console.log("num is not equal to zero");
} else {
  console.log("num is equal to zero");
}

let num1 = -10;
if (num1) {
  console.log("num1 is not equal to zero");
} else {
  console.log("num1 is equal to zero");
}

// alert("Your pc is hacked!! pay 10lakh or loose everything");
console.log("This is  a simple log");
console.error("This is an error msg");
console.warn("This is a warning msg");

// let firstName1 = prompt("enter your name");
// console.log(firstName1);

// let fname = prompt("enter your first name: ");
// let lname = prompt("Enter your last name: ");
// console.log(`welcome ${fname} ${lname} !`);
// let msg = `welcome ${fname} ${lname} !`;
// alert(msg);

//...............string methods..................

let str2 = "  Hel lo  ";
str2.trim(); //it doesn't change the str2 string itself; by trimming it just makes a new trimmed string.
console.log(str2);
console.log(str2.trim());
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

// let psswrd = prompt("set your password");
// let newpsswrd = psswrd.trim();
// console.log(psswrd);
// console.log(newpsswrd);

let msg = "   hello    ";
// let newMsg = msg.trim();
// console.log("after trim: " , newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase: ", newMsg);
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

let msg1 = "apnacollege";
console.log(msg1.slice(-2)); //msg1.length() -3 = 11-3=> 9.

let msg2 = "ApnaacollegeApna";
console.log(msg2.replace("Apnaa", "college")); //the first occurance will only be replaced.

//For the stringn -> let name = "ApnaCollege" ; separate the "college" part and replace the 'l' with 't' in it.
let namee = "ApnaCollege";
let newNamee = namee.slice(4).replace("l", "t");
newNamee = newNamee.replace("l", "t");
console.log(newNamee); //cottege
console.log(namee.slice(4).replace("l", "t").replace("l", "t")); //cottege

//................Arrays............................
let nums = [2, 4, 6, 8];
console.log(typeof nums); //object; arrays are object in type in js.

let info = ["aman", 25, 6.1];
console.log(info[0]); //aman
console.log(info[0][0]); //a
console.log(info.length); //3
console.log(info[0].length); //4

let empArr = [];
console.log(empArr[0]); //undefined

console.log([1, 2, 3, 4].length);

let name1 = "rohit";
name1[0] = "m";
console.log(name1); //rohit
let fruits = ["mango", "apple", "litchi"];
fruits[0] = "banana";
console.log(fruits); //['banana', 'apple', 'litchi']
fruits[5] = "guava";
console.log(fruits); //['banana', 'apple', 'litchi', empty × 2, 'guava']
console.log(fruits[4]); //undefined

let cars = ["audi", "bmw", "xuv", "maruti"];
cars.push("toyota");
console.log(cars);
console.log(cars.pop());
console.log(cars);
cars.unshift("ferrari");
console.log(cars);
console.log(cars.shift());
console.log(cars); //['audi', 'bmw', 'xuv', 'maruti']

let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

let primary = [1, 2, 3, 4];
let secondary = [5, 6, 7, 8];
let tertiary = primary.concat(secondary);
let quaternary = secondary.concat(primary);
console.log(primary); //1, 2, 3, 4
console.log(secondary); //5, 6, 7, 8
console.log(tertiary); //1,2,3,4,5,6,7,8
console.log(quaternary); //5,6,7,8,1,2,3,4
console.log(secondary.reverse().concat(primary.reverse())); //8,7,6,5,4,3,2,1
console.log(secondary); //8,7,6,5; concat method doesn't change the actual array but reverse method does.

let primary1 = primary.slice();
console.log(primary1); // slice() without any argument just copies the actual array.

//slice method doesn't change the actual array but splice method change the actual array and return an array as per the given argument.
primary.push(10, 11);
console.log(primary); //[4, 3, 2, 1, 10, 11]
primary.splice(1, 2);
console.log(primary); //[4, 1, 10, 11]
primary.splice(0, 0, 100, 200, 300);
console.log(primary); //[100, 200, 300, 4, 1, 10, 11]
console.log(primary.splice(0, 1, 50));
console.log(primary); //[50, 200, 300, 4, 1, 10, 11]
//so splice method (1)deletes any particular element of an array; (2)deletes any portion from one index to another index of an array; (3)delete and add element simultaneously; (4)replace one/more elements

console.log(cars);
console.log(cars.sort()); //['audi', 'bmw', 'maruti', 'xuv']
console.log(cars); //['audi', 'bmw', 'maruti', 'xuv'] ;sort() changes the actual array.
console.log(primary.sort()); //[1, 10, 11, 200, 300, 4, 50] numbers doesn't get sorted.
//sort() method sorts the strings in an array in ascending order acc to the 1st letters of the strings. but in case of number it first convert those in numbers in string format(UTF16 code) and then further sorted those numbers acc to those codes.thats why numbers oesn't get sorted.
//so we will use this sort() method when we need to sort characters or strings.

let months = ["january", "july", "march", "august"];
months.splice(0, 2, "july", "june");
console.log(months);

let lang = ["c", "c++", "html", "javascript", "python", "java", "c#"];
lang.push("sql");
console.log(lang.reverse().indexOf("javascript"));

//....................Array References..............
console.log("name" == "name"); //value compares here
console.log("name" === "name"); //exact string compares here
//console.log([1] === [1]); //here js is saying that both the arrays are different from each other.
console.log([1] == [1]); //even if we want to compare the value only then also js is saying that the values of both the arrays are different.
//console.log([] === []); //also the exact element(empty array) are different
console.log([] == []); //values of empty arrays are different

let arr = ["a", "b", "c"];
let arrCopy = arr;
console.log(arr == arrCopy); //true; both have same address pointing out to one articular array.
console.log(arr === arrCopy); // also true;
arr.push("d");
console.log(arr); //['a', 'b', 'c', 'd']
console.log(arrCopy); //['a', 'b', 'c', 'd']
arrCopy.pop();
console.log(arrCopy); //['a', 'b', 'c']
console.log(arr); //['a', 'b', 'c']
//but
arrCopy = ["a", "b", "c"];
arr.push("d");
console.log(arr); //['a', 'b', 'c', 'd']
console.log(arrCopy); //['a', 'b', 'c']
//now also the arr , arrCopy has the same values but due to the arrCopy is assigned a new array(externally with the same value);it doesn't matter whether the values in the new array are also same or not but new array means new address, and same changes will only be reflected when addresses will be same.thats why after the push operation the arr and arrCopy are become different.

//................const array........................
const g = 10; //const variable
const arr2 = [1, 2, 3];
console.log(arr2); //[1, 2, 3]
arr2.push(4);
console.log(arr2); //[1, 2, 3, 4]
arr2.pop();
console.log(arr2); //[1, 2, 3]
//arr2 = [1, 2, 3]; //this will give error
//arr2 = cars; //this will also give error
//arr2 = [1, 2, 3]; this means a new array is created which is being tried to pointed out by a constant variable. so any is const it doesn't means that the values of the arrays are constant(here push and pop operations can easily be done with a const array) it means the refernce variable (arr) is constant which stores the address of the array not the values of the array.so the values of the array can be changed but not the starting address. and by arr2 = [1, 2, 3]; here by assigning a new array that stored address in reference variable is tried to change with a new address which can't be done.
//advantage: let in instagram acc, a followers/followings array is created. so while writing code by mistake so that we never assign null to that array of followers thats why that array can be declared const

let nums1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(nums1.length); //3
console.log(nums1[0].length); //2
console.log(nums1[0][0]); //1
console.log(nums1[0][3]); //undefined

console.log([
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
]);
let game = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, "X"],
];
game[0][1] = "O";
console.log(game);

//.............loop....................
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
for (let i = 3; i >= 1; i--) {
  console.log(i);
}
for (let i = 10; i <= 3; i++) {
  console.log(i); //prints nothing,i never enters the loop.
}
//console.log(i); gives error cause variables declared in loop are only in use within the loop
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
for (let i = 1; i % 2 == 0; i++) {
  console.log(i); //never enters the loop i=1 initialization doesn't satisfy the condition i%2==0 first.
}

for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}
/*let x = prompt("enter your number");
x = parseInt(x);*/
// let x = prompt("enter your number") - "0";//also applicable
/*for (let i = x; i <= x * 10; i += x) {
  console.log(i);
}*/

//...........Favourite movie.............
/*const favMovie = "avatar";
let guess = prompt("guess my favourite movie");
while (guess != favMovie) {
  if ((guess = "quit")) {
    console.log("you quit");
    break;
  }
  guess = prompt("wrong guess. please try again");
}
if (guess == favMovie) {
  console.log("congrats!!");
}*/
//...............................................
let fruits1 = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(i, fruits1[i]);
}
//.................................................
for (char of "apnacollege") {
  console.log(char);
}

//...................object literals.................
const students = {
  name: "Dwip",
  age: 21,
  marks: 94.4,
};
/*Object   
age: 21
marks: 94.4
name: "Dwip"
[[Prototype]]: Object
in output of objects: the sequence of properties(key-value pair) can be different as mentioned.
generally objects are defined with const.*/

let students1 = ["Dwip", 21, 94.4];
console.log(students);
console.log(students1);
// in case of o/p of array: the sequence of values are same in the o/p as mentioned in the code. (3) ['Dwip', 21, 94.4]
console.log(students["name"]);
console.log(students.name); //better format to access value

post = {
  username: "Dwipjyoti",
  content: "This is my #firstPost",
  likes: 150,
  reposts: 5,
  tags: ["@apnacollege", "@delta"],
};
console.log(post);
//but something can only be done with [ ] oprator not with . operator
let prop = "reposts";
console.log(post[prop]); //5
console.log(post.prop); //undefined

obj = {
  1: "a", //1 is not a number,is a string
  2: "b",
  null: "d",
  true: "c",
  undefined: "e",
};
console.log(obj[1]); //here 1 is not used as a index,first the 1 string is automatically converted into a string & then that string is compared to the key-styring 1.
//obj[*] ;here * cannot be index,it is automatically converted into string by js.
//console.log(obj.1); //error
console.log(obj.true);
console.log(obj.null);
console.log(obj.undefined);
//with . operator numbers can't be used as key.

const students2 = {
  name: "Dwip",
  age: 21,
  marks: 94.4,
  city: "Delhi",
};
students2.city = "Mumbai";
console.log(students2.city);
students2.gender = "female";
console.log(students2);
students2.marks = "A";
console.log(students2); // a number can be replaced with a string or any data type in the property as key-value pair.
students2.marks = [89, 98, 78];
console.log(students2);
delete students2.city;
console.log(students2);

//................object of objects.................
const classInfo = {
  aman: {
    grade: "A+",
    city: "Delhi",
  },
  shradha: {
    grade: "A",
    city: "pune",
  },
  karan: {
    grade: "O",
    city: "Mumbai",
  },
};
console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo["aman"]);
console.log(classInfo.aman.grade);
classInfo.aman.city = "Gurgaon";
console.log(classInfo.aman.city);

//..............Array of objects.....................
const classInfo1 = [
  { name: "aman", grade: "A+", city: "Delhi" },
  { name: "shradha", grade: "A", city: "pune" },
  { name: "karan", grade: "O", city: "Mumbai" },
];
console.log(classInfo1);
console.log(classInfo1[0]);
console.log(classInfo1[1]);
console.log(classInfo1[0].name);
console.log(classInfo1[1]["grade"]);
classInfo1[0].city = "Gurgaon";
console.log(classInfo1[0].city);
classInfo1[1].gender = "female";
console.log(classInfo1[1]);

//...............math functions....................
console.log(Math);
console.log(Math.E);
console.log(Math.abs(12));
console.log(Math.abs(-12.56));
console.log(Math.pow(2, 3));
console.log(Math.floor(5.5));
console.log(Math.floor(5.99999));
console.log(Math.floor(5.00001));
console.log(Math.floor(-5));
console.log(Math.floor(-5.5));
//Math.floor() gives the rounded off nearest smallest integer value.
console.log(Math.ceil(5.5));
console.log(Math.ceil(5.99999));
console.log(Math.ceil(5.00001));
console.log(Math.ceil(-5));
console.log(Math.ceil(-5.5));
//Math.ceil() gives the rounded off nearest largest integer value.
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

let num2 = Math.random();
console.log(num2);
num2 = num2 * 10; //num2 is multiplied by 10 cause we want to have a random value from 1 to 10; but if we want a value from 1 to 100 then we multiply the value by 100 means by the max value.
console.log(num2);
num2 = Math.floor(num2);
console.log(num2);

console.log(Math.floor(Math.random() * 10));
//Math.random() always gives value 1 to 10 but not 1 so Math.random()*10 also can never be 1*10=10. so, Math.floor(Math.random() * 10) will always be 1 to 9 but not 10.
console.log(Math.floor(Math.random() * 10) + 1); //now the range is from 1 to 10.
console.log(Math.floor(Math.random() * 100) + 1); //range 1 to 100
console.log(Math.floor(Math.random() * 5) + 1); //range 1 to 5
console.log(Math.floor(Math.random() * 5) + 20); //range 20 to 24
console.log(Math.floor(Math.random() * 5) + 21); //range 20 to 25

//................Guessing game.....................
//user enters a max number & then tries to guess a random generated number between 1 to max.
/*let max = prompt("Enter the max number");
let random = Math.floor(Math.random() * max) + 1;
console.log(random);
let guess = prompt("guess the random number from 1 to max");
while (true) {
  if (guess == "quit") {
    console.log("you quit");
    break;
  } else if (guess == random) {
    console.log(`congrats!! random number was ${guess}`);
    break;
  } else {
    console.log(`${guess} is not correct`);
    if (guess < random) {
      guess = prompt(`guess a bigger value than ${guess}`);
    } else {
      guess = prompt(`guess a smaller value than ${guess}`);
    }
  }
}*/
//the fastest way to guess the value is by entering the middle value same as the concept like binary search.
//...................................................

//....................fUNCTIONS............
function hello() {
  console.log("hello");
}
hello();

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
print1to5();

function isAdult() {
  let age = 13;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("not adult");
  }
}
isAdult();

function rollDice() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}
rollDice();
rollDice();
rollDice();
rollDice(); //gives random no in a dice from 1 to 6.

//let Name = prompt("enter youor name");
//let Age = prompt("enter your age");
function printInfo(Name, Age) {
  console.log(`hii ${Name}!! congrats for being ${Age}`);
}
//printInfo(Name, Age);
printInfo("karan"); //hii karan!! congrats for being undefined
printInfo(14); //hii 14!! congrats for being undefined
// whatever the value we will pass that will be stored order wise; if it is like func_name(arg1,arg2) then we cant pass only arg2 directly without passing arg1. thats why here js detect 14 as name not as age. order of arguments shouold be equal to order of passing values.

//let n1 = prompt("enter number");
function prinntTable(n1) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n1} * ${i} = ${n1 * i}`);
  }
  /*for(let i=n;i<=n*10; i+=n){
     console.log(i);
    }*/
}
//prinntTable(n1);

function sum(a, b) {
  console.log("hello1");
  return a + b;
  console.log("hello2"); //no statement is executed after return
}
console.log("sum is " + sum(2, 3));
console.log(sum(sum(1, 2), 3));

//whenever it is needed to return multiple values or set of collections rather than a single value , then we store multiple values into object and represent those values in form of objects else we store them into multiple arrays and show multiple values in form of multiple arrays cause a single array is considered as a single value. thats how we dont return multiple values directly , we return those in form of arrays or objects.

function sumUptoN(n2) {
  let sum = 0;
  for (let i = 1; i <= n2; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log("summation is : " + sumUptoN(5));

//create a function that returns the concatenation of all strings in an array
let Str = ["hi", "hello", "bye", "!"];
function concat(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}
console.log(concat(Str));

//.................scope...................
//global scope: it  means whenever variable is defined wherever in place of the code.

/*Function scope: variables defined inside a function are not accessible (visible) from outside of the function.
    let sum= 54; //Global scope
    function calSum(a,b){
      let sum = a+b; //Function scope
      console.log(sum); //o/p= value of a+b
    }
    console.log(sum); //o/p= 54
 */
/*let sum = 54; //Global scope
function calSum(a, b) {
  let sum = 50;
  console.log(sum); //o/p= 54
}*/
let Sum = 54; //Global scope
function calSum(a, sum) {
  sum = 50; //function scope, call by value
  console.log(sum); //o/p= 50
}
calSum(1, Sum);
console.log(Sum); //o/p=54
// global scope variables can be used within functions,but function scope variables can't be used outside a function.

/*Block scope: variables declared inside a {} block cannot be accessed from outside the block.
After 2015 two new keywords are ProgressEvent; let, const ; so variables declared with let or const have block scope butu before 2015 only var keyword was there which has no block scope.*/
{
  let A = 25;
  const B = 25;
  var C = 25;
}
// console.log(A); gives error
// console.log(B); gives error
console.log(C); //var dont has block scope

for (let i = 0; i <= 5; i++) {
  console.log(i); //block scope
}
// console.log(i); gives error
for (var i = 0; i <= 5; i++) {
  console.log(i);
}
console.log(i); // ✅ i is still accessible here (function scope) (it is not within a particular function with function keyword ,it is within the hole program)
let Age = 25;
if (Age >= 18) {
  let str5 = "adult"; //block scope
}
// console.log(str5); gives error

/*Lexical scope:(--> nested function) a variable defined outside a function can be accessable inside another function defined after a variable declaration.
The opposite is NOT true.
 */
function outerfunc() {
  let x = 5;
  let y = 6;
  function innerFunc() {
    console.log(x);
    console.log(y);
  }
  innerFunc();
}
outerfunc(); //o/p - 5,6 ; lexical scope

function OuterFunc() {
  function innerfunc() {
    console.log(x);
    console.log(y);
  }
  let x = 5;
  let y = 6;
  innerfunc();
}
OuterFunc(); //o/p= 5,6 due to hoisting (also lexical scope), in js variables can be used by functino before variable's declaration.

function OuterFunc() {
  let x = 5; //function scope
  let y = 6; //function scope
  function innerfunc() {
    //function scope
    let a = 10;
    console.log(x);
    console.log(y);
  }
  console.log(a); //value of a will not be printed.
  innerfunc();
}
OuterFunc();
//innerfunc(); //error,not accessable outside the outer function
//variables in outer function can be accessable within inner function but variables declared within inner function can't be accessable in outer function.

//...............practice Qs.................
let greet = "hello"; //global scope
function changeGreet() {
  let greet = "namaste";
  console.log(greet); //function scope
  function innerGreet() {
    console.log(greet); //lexical scope
  }
  innerGreet();
}
console.log(greet);
changeGreet();
/*o/p= hello
     namaste
     namaste*/

let Greet = "hello"; //global scope
function ChangeGreet() {
  let Greet = "namaste";
  console.log(Greet); //function scope
  function InnerGreet() {
    console.log(Greet); //lexical scope
  }
}
console.log(Greet);
ChangeGreet();
/*o/p= hello
     namaste; cause the innergreet() is never called.*/
//when global scope and function scope fights within a function then function scope wins and whenever global scope and function scope fights outside function then global scope wins.
//...................................................

//.................Function expressions............
/* 1.value of Defined function is stored within a variable
   2.nameless function
   3. here a variable is defined which has store a value of function
   4.function is nameless, but function is called with variable name.
   5.same as a normal variable value can be changed, deleted, updated,can be passed as a argument to another function or can be returned from a function can be done with function expressions too.
   6.so basically whatever the work we can do with a variable,if we want to do those works with function then we define function expressions*/
let Sum1 = function (a, b) {
  //function variable
  return a + b;
};
Sum1(1, 2);

let helloo = function () {
  console.log("helloo");
};
helloo = function () {
  console.log("namastee");
};
helloo();
helloo = "Bonjour";
console.log(helloo);
//helloo();//gives error cause helloo doesn't remain as a function anymore now
//...................................................

//............Higher order function..................
//1.
function multipleGreet(func, count) {
  //higher order function
  for (let i = 1; i <= count; i++) {
    func();
  }
}
let greet1 = function () {
  console.log("hello");
};
multipleGreet(greet1, 2);
//multipleGreet(greet1(), 2); //gives error;just name of the function should be passed as argument & here we executes this function. Definition should be passed not the calling statement.
multipleGreet(function () {
  console.log("namaste");
}, 2);

//2.
function oddOrEvenFactory(request) {
  if (request == "odd") {
    let odd = function (n) {
      console.log(!(n % 2 == 0));
    };
    return odd;
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong request");
  }
}
let request = "odd";
let func1 = oddOrEvenFactory(request);
console.log(func1);
let func2 = oddOrEvenFactory("even");
console.log(func2);
func1(5);
func1(10);
func2(5);
func2(10);

//..................................................
//.................Methods.........................
const calculator = {
  num: 55, //used to understand just
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};
console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.add(5, 6));
console.log(calculator.sub(5, 6));
console.log(calculator.mul(5, 6));
//it is just same as math object
console.log(Math.PI); //same as console.log(calculator.num);
console.log(Math.random); // same as console.log(calculator.add);
console.log(Math.random()); //same as console.log(calculator.add(5, 6));

//in JS we have seen many methods of array and string, cause in js arrays, strings are also object internally.
console.log(typeof [1, 2, 3]);
console.log([1, 2, 3].push(4)); //here [1,2,3] is a object(array) where .push method is used.

const calculator1 = {
  //shorthand
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};
console.log(calculator1.add(5, 6));
console.log(calculator1.sub(5, 6));
console.log(calculator1.mul(5, 6));
