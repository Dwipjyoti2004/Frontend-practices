let url = "http://universities.hipolabs.com/search?name=";
//let country = "nepal";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;

  let colArr = await getColleges(country);
  SharedWorker(colArr);
});
function show(colArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArr) {
    console.log(col.name);

    let li = document.createElement("li");
    li.innertext = col.name;
    list.appendChild(li);
  }
}
async function getColleges() {
  try {
    let res = await axios.get(url + country);
    console.log(res);
  } catch (e) {
    console.log("error: ", e);
  }
}
