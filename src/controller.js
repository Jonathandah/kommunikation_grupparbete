import model from "./model";
import view from "./view";


function addInput(){ // hanterar add input 
    let div = document.querySelector("div");
    view.renderInput(div, addList);
}

function addList (){ // hanterar items

}

let listButton = document.querySelector(".addList");
listButton.addEventListener("click", addList);