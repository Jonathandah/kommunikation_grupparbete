import model from "./model";
import view from "./view";

import test from "./test.js"; //test för framtida problem

test.renderDom(handleTest); //test-version
function handleTest(){
    console.log("handletest")
    test.renderList(addInput);
}

function addInput(){ // hanterar add input 
    let div = document.querySelector("div");
    view.renderInput(div, addList);
}

/*
let inputtButton = document.querySelector(".addItem");
inputtButton.addEventListener("click", addInput);
 */

function addList (){ // hanterar items
    let itemValue = view.input.value; // borde denna selectas i controllern?
    view.input
    let object = {
        id: undefined,
        value: itemValue,
        itemDate: undefined,
    }

    model.getDate(object);
    model.idGenerater(object);
    view.renderItem(model.array, eraise);
}


function eraise (e){
    model.deleteObj(e.target.id);
    view.renderItem(model.array, eraise);
}
