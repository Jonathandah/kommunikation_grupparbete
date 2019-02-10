
let main = document.querySelector('main');
let p = document.querySelector('.inputhide');
let savebutn = document.querySelector('.savebtn')
let inputhide = document.querySelector(".input");



function createlist(){
  let div = document.createElement("div");
  let box = document.createElement('div');
  let x = document.createElement('button');
  x.innerHTML = "X";
  let listinput = document.createElement('input');
  let savebt = document.createElement('button');
  let addlist = document.createElement('button');
  let p = document.createElement('p');
  savebt.innerHTML = "Save";



  div.classList.add("container");
  box.classList.add("save-list-box");
  listinput.classList.add("input");
  savebt.classList.add("savebtn");
  x.classList.add("inputhide");
  p.classList.add("inputhide");
  console.log(div);

  div.setAttribute("style", "display: grid");
  div.appendChild(box);
  box.appendChild(p);
  box.appendChild(listinput);
  box.appendChild(savebt);
  box.appendChild(x);
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
    x.classList.remove("inputhide");
    console.log(listinput.value);
    console.log(p);
    console.log(e);
  });

  x.addEventListener("click", function (e){
    div.parentElement.removeChild(div);
  })
}


  let newlist = document.querySelector(".newlist");
  newlist.addEventListener('click', createlist);
