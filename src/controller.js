import model from "./model";
import view from "./view";


function addList(){
    let div = document.querySelector("div");
    view.renderList(div);
}

let listButton = document.querySelector(".addList");
listButton.addEventListener("click", addList);