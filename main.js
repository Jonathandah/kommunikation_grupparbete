let container = document.getElementsByClassName('.container');
let addlist = document.getElementById('add-a-list-btn');
let listbox = document.getElementById('save-listbox');




function createlist(){
  let div = document.createElement("div");
  let box = document.createElement('div');
  let listinput = document.createElement('input');
  let savebt = document.createElement('button');
  let addlist = document.createElement('button');
  savebt.innerHTML = "Save";


  div.classList.add("container");
  box.classList.add("save-list-box");
  listinput.classList.add("input");
  savebt.classList.add("savebtn");
  console.log(div);

  div.setAttribute("style", "display: grid");
  div.appendChild(box);
  box.appendChild(listinput);
  box.appendChild(savebt);
  main.appendChild(div);/* den reggar inte eller så skrev jag fel */


  savebt.addEventListener("click", function () {
    let inputhide = document.getElementsByClassName("input").value;
    let div = document.getElementsByClassName('.input__hide').value;
    console.log("hej");
  });
}
