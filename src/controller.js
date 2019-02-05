import model from "./model";
import view from "./view";

import test from "./test.js"; //test för framtida problem

test.renderDom(handleTest); //test-version
function handleTest(){

    let listObject = {
        id: undefined,
        value: [],
    }

    model.idGenerater(listObject);
    test.renderList(addInput, listObject);
    model.array.push(listObject);
}

function addInput(e){ // hanterar add input 
    view.renderInput(e.target, addList);
}

/*
let inputtButton = document.querySelector(".addItem");
inputtButton.addEventListener("click", addInput);
 */

function addList (e){ // hanterar items
    let itemValue = view.input.value; // borde denna selectas i controllern?
    let listId = e.target.classList[0];

    let object = {
        class: listId,
        id: undefined,
        value: itemValue,
        itemDate: undefined,
    }
 
    
    model.getDate(object);
    model.idGenerater(object);
    model.sortItems(object);
    
    view.renderItem(model.findObj(listId), e.target, eraise);
}


function eraise (e){
    model.deleteObj(e.target.id);
    view.renderItem(model.array, eraise);
}
