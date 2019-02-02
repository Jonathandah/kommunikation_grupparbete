import model from "./model";
import view from "./view";


function addInput(){ // hanterar add input 
    let div = document.querySelector("div");
    view.renderInput(div, addList);
}

let inputtButton = document.querySelector(".addList");
inputtButton.addEventListener("click", addInput);


function addList (){ // hanterar items
    let itemValue = document.querySelector(".addItem__input").value; // borde denna selectas i controllern?
    let object = {
        value: itemValue,
        itemDate: undefined,
    }
    model.getDate(object);
    view.renderList(model.array);
}
