//...................API....................
//After requesting, may be in response it become not needed to reload the whole page, only a change of a small part of the page is needed. here comes API. server provides a new site which will be reloaded in response but API gives a change in small part of a page in response.
//earlier API returns its data in xml(very much similar to html format) format but now API returns its response in json format.
//for ex: if we like a post in insta or fb then the like count increases and the heart symbol becomes red , not the whole page needed to be reloaded. it is done by API.
//API helps to interact b/w two s/w .
//Those APIs which uses http protocol means basis of internet provides interaction b/w two s/w
//some normal API don't have key not paid even, those are free to use. some have key & are also paid.
//key is basically a password. To use API of any server we have to be an authenticator user of that server , thats why we are provided key/valid password.
//some API = https://catfact.ninja/fact
//https://dog.ceo/api/breeds/image/random

//json(JavaSript Object Notation) is not a part of js it is a format.it is not true too that json format can only be used in js if our code is in python then also the data which API will return will be in json file which will still be accessable.
//json is very similar to js object but not equal cause 1.in js objects key can't be string but in json key is a string. 2.in js value of a key is acceptable as undefined but in json there is nothing as undefined.
//to check whether a data is in valid json format or not use json validator
//whenever API responses a json data it in in string format. we can't access normal json data, we can access js object .so we use JSON.parse(data) method as below.

let jsonRes = '{"fact":"A group of cats is called a clowder.","length":36}';
console.log(jsonRes);
//console.log(jsonRes.fact); undefined
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

let student = {
  name: "aman",
  marks: 84,
};
console.log(JSON.stringify(student)); //makes json data into string

// https://catfact.ninja/fact ; it is a api (a url) which shows data in raw string format
//hoppscotch.io ;it is a api request testing tool where we send request to api and acc to that it provides response in json format , we can see it in 'raw' string too.

//Ajanx: Asynchronous JavaScript and xml is a process through which we call our API & for which in response we have some data and all this process go asynchronously. even though response is not in xml if it is in json format then also it will be said as Ajax process as it was said earlier not Ajaj.

//Http verbs -->
//GET: whenever we need to have(get) data(json data) in response.
//POST: we want to post some data with API request.
//DELETE: we try to delete something.

//There are many status code . you can go through mdn but 4 status are mostly common; 200,404, 400, 500.

/*url/:id
      :Number
      :q
      {{id}}
      <id>
here all these 2nd parts(:id,:q etc) are variable and can be replaced with some value.*/

//http://unniversities.hipolabs.com -->api which holds list of all universities
//http://unniversities.hipolabs.com/search?name=india -->particularly give list of universities in india.
//http://unniversities.hipolabs.com/search?name=Nigeria&state=Delhi -->it should give 404 status but it will run normally and give result acc to name=nigeria cause whenever such type of key value pair(name=Nigeria&state=Delhi) is set which doen't exist and can't be recognized by API, API will simply ignore that(state=Delhi)and uses the usefull part(name=Nigeria)

/*to provide additional information in url we use two methods: query string and Api routes(inputting value of variables).
API routes: https://api.potterdb.com/v1/movies/406c41c1-babd-4ead-9567-9783c1742d39
query string: http://unniversities.hipolabs.com/search?name=India
*/

/*
headers supplies additional information.
It is two types--> request header and response header.
in hoppscotch headers are of response.
when APIs are called generally we sent our requests with headers and API also give response with some headers(additional information).
*/

let url = "https://catfact.ninja/fact";
//fetch(url);
console.log(fetch(url)); //returns promise
/*Promise {<pending>}
  [[Prototype]]: Promise
  [[PromiseState]]: "fulfilled"
  [[PromiseResult]]: Response */

fetch(url)
  .then((res) => {
    console.log(res);

    //console.log(res.json()); //returns promise which has that fact in result section.
    /*o/p=
Promise {<pending>}
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled"
[[PromiseResult]] : Object
fact : "The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat."
length : 134
[[Prototype]] : Object*/

    res.json().then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log("ERROR = ", err);
  });
/*o/p=
Response {type: 'cors', url: 'https://catfact.ninja/fact', redirected: false, status: 200, ok: true, …}
body: (...)
bodyUsed: true
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://catfact.ninja/fact"
[[Prototype]]: Response

{fact: 'The technical term for a cat’s hairball is a “bezoar.”', length: 54}
*/

/*
let url1 = "https://catfact.ninja/fact1";
fetch(url1)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("ERROR = ", err);
  }); //invalid url */
/* o/p=
ERROR =  TypeError: Failed to fetch
    at app6.js:82:1 */

/* //method chaining form
fetch(url)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.fact);
  })
  .catch((err) => {
    console.log("ERROR - ", err);
  });
*/
