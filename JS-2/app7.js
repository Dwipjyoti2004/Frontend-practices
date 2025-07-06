//fetch() returns promises which need to be passed through json further to get the data but axios directly give the data,not needed to further pass on json
let btn = document.querySelector("#cat");

btn.addEventListener("click", async () => {
  let fact = await getFacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;

    // let res2 = await axios.get(url);
    // console.log(res2.data.fact);
  } catch (e) {
    console.log("error - ", e);
    return "no data found";
  }
}

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#dog");
btn2.addEventListener("click", async () => {
  let link = await getImage();
  console.log(link);
  let img = document.querySelector("#result2");
  img.setAttribute("src", link);
});
async function getImage() {
  try {
    let res1 = await axios.get(url2);
    return res1.data.message;
  } catch (e) {
    console.log("error - ", e);
    return "no image found";
  }
}
//there is a limit of using free APIs. so don't use loops in using such kind of APIs, free usage may be closed during running loops.

const url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res2 = await axios.get(url3, config);
    console.log(res2.data);
  } catch (err) {
    console.log(err);
  }
}
getJokes();
