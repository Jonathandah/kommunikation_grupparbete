import model from "./model";
import view from "./view";

let main = document.querySelector("main");

view.renderDom(main, handleTest); //test-version

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
    // console.log(e.currentTarget);
    // e = vårt target
    console.log(e.target); //li
 
    this.appendChild(dragSrcEl);// = e.dataTransfer.getData('text/html');
    console.log(e.currentTarget);
  }

  function handleDragEnd(e) {
    e.target.setAttribute("style", "opacity: 1;");
    e.target.classList.remove('over');
  }


function handleTest(e){

    let listObject = {
        id: undefined,
        value: [],
    }

    model.idGenerater(listObject);
    view.renderList(addList, listObject, view.container__input.value, handleDragOver, handleDrop);
    model.array.push(listObject);
}

/*
let inputtButton = document.querySelector(".addItem");
inputtButton.addEventListener("click", addInput);
 */

function addList (e){ // hanterar items
    let itemValue = e.target.nextSibling.value; // borde denna selectas i controllern?
    console.log(itemValue);
    let listId = e.target.classList[1];


    console.log(listId);

    let object = {
        class: listId,
        id: undefined,
        title: itemValue,
        date: undefined,
        value:undefined,
    }
 
    
    model.getDate(object);
    model.idGenerater(object);
    model.sortItems(object);

    console.log("listId i addList-function " + listId);
    //view.renderItem(model.findObj(listId), e.target, eraise); funkar inte längre??
    //view.renderItem(model.findObj(listId), e.target, eraise);

    view.renderItem(object, e.target, eraise, handleDragStart, handleDragEnter, handleDragLeave, handleDragEnd);

}


function eraise (e){
  /*
    model.deleteObj(e.target.id, e.target.classList[1]);
    console.log(e.target.id);
    console.log(model.findObj(e.target.id));
    view.renderItem(model.findObj(e.target.classList[1]), e.target, eraise, handleDragStart, handleDragEnter, handleDragLeave, handleDragEnd);
    //view.deleteItem(e);
    */
   model.deleteObj(e.target.id, e.target.classList[1]);
   console.log(e.currentTarget.parentNode.id);
   //view.renderItem(model.findObj(e.target.id), eraise);
   view.deleteItem(e);
}
