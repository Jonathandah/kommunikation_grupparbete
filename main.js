let container = document.getElementsByClassName('.container');
let addlist = document.getElementById('add-a-list-btn');
let listbox = document.getElementById('save-listbox');
let main = document.querySelector('main');
let p = document.querySelector('.inputhide');
let savebutn = document.querySelector('.savebtn')
let inputhide = document.querySelector(".input");

function createlist(){
  let div = document.createElement("div");
  let box = document.createElement('div');
  let listinput = document.createElement('input');
  let savebt = document.createElement('button');
  let addlist = document.createElement('button');
  let p = document.createElement('p');
  savebt.innerHTML = "Save";


  div.classList.add("container");
  box.classList.add("save-list-box");
  listinput.classList.add("input");
  savebt.classList.add("savebtn");
  p.classList.add("inputhide");
  console.log(div);

  div.setAttribute("style", "display: grid");
  div.appendChild(box);
  box.appendChild(p);
  box.appendChild(listinput);
  box.appendChild(savebt);
  main.appendChild(div);


  //adda din eventlistener
  let addcart = document.createElement('button');
  addcart.classList.add("savebtn");
  addcart.classList.add("inputhide");
  addcart.innerHTML = "AddCart"
  box.appendChild(addcart);

  savebt.addEventListener("click", function (e) {
    console.log(p);
    p.classList.remove("inputhide");
    p.textContent = listinput.value;
    listinput.classList.add("inputhide");
    savebt.classList.add("inputhide");
    addcart.classList.remove("inputhide");
    console.log(listinput.value);
    console.log(p);
    console.log(e);
  });


}


savebutn.addEventListener("click", function () {
  p.style.display = 'block';
  p.textContent = inputhide.value;
  console.log(inputhide.value);
  console.log(p);
});
