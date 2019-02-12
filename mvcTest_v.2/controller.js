import model from "./model";
import view from "./view";

let main = document.querySelector("main");
let body = document.querySelector("body");

view.renderDom(main, newList); 

let dragSrcEl = null;
function handleDragStart(e) {
    this.style.opacity = '0.4';  //elementet användaren håller i 
    dragSrcEl = this;
  }
  

function handleDragOver(e) {
    if (e.preventDefault){
      e.preventDefault(); // droppar elementet
    }
  }

  function handleDragEnter(e) {
    //lägger till classen på elementet vi hoovrar över
    this.classList.add('over');

  }

  function handleDragLeave(e) {
    this.classList.remove('over');  // tar bort klassen när vi bytar target
  }

  function handleDrop(e) {
    console.log(e.target); 
    e.target.setAttribute("style", "opacity: 1;");
    e.target.classList.remove('over');
    this.appendChild(dragSrcEl);// = e.dataTransfer.getData('text/html');
    console.log(this.classList[1]); // ulen vi släpper vårt item i
    console.log(dragSrcEl);
    console.log(dragSrcEl.id); // li måste ha sitt förstvarande object id och sen byta object id:et till det den släpps i !!!
    console.log(dragSrcEl.parentNode);
    console.log(e.currentTarget);
    model.findObj(dragSrcEl, this); //fick aldrig denna till att funka
  }


  function handleDragEnd(e) {
    let liArray = document.querySelectorAll(".item");
    for(let li of liArray){
      li.setAttribute("style", "opacity: 1;");
      li.classList.remove('over');
    }
  }


function newList(e){
    let listObject = {
        id: undefined,
        value: [],
    }

    model.idGenerater(listObject);
    view.renderList(main, newItem, listObject, handleDragOver, handleDrop, eraiseListObj);
    model.array.push(listObject);
}

function newItem (e){ // hanterar items
    let itemValue = e.target.nextSibling.value; // borde denna selectas i controllern?
    let listId = e.target.classList[1]; // veet att det är extremt dåligt att andvända detta för ifall man lägger till en klass i elementet sabbas allt /mvh Jonatahan

    let itemObject = {
        class: listId,
        id: undefined,
        title: itemValue,
        date: undefined,
        value:undefined,
    }
 
    model.getDate(itemObject);
    model.idGenerater(itemObject);
    model.sortItems(itemObject);
    view.renderItem(itemObject, e.target, eraise, handleDragStart, handleDragEnter, handleDragLeave, handleDragEnd, newEdit);
}

function newEdit(e){
  console.log("hej");
  view.editTitle(e.target, body, model.editItemObj(e.target), model.boolean);
  
  console.log(model.boolean)
}

function eraiseListObj (e){
  console.log(model.array);
  model.deleteListObj(e.target.id); 
  console.log(model.array);
}


function eraise (e){
   // i detta fallet hade jag gärna velat radera mina items objekt och sen bara använda min render-metod igen, lyckades ej lösa det utan att sabba saker i koden // mvh jonathan

  /*
    model.deleteObj(e.target.id, e.target.classList[1]);
    console.log(e.target.id);
    console.log(model.findObj(e.target.id));
    view.renderItem(model.findObj(e.target.classList[1]), e.target, eraise, handleDragStart, handleDragEnter, handleDragLeave, handleDragEnd);
    //view.deleteItem(e);
    */

   model.deleteItemObj(e.target.id, e.target.classList[1]); //farligt //tar bort itemets objekt i modellen
   view.deleteItem(e); // tar bort itemet i domen
}
