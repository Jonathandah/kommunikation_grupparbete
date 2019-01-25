let array_item =  document.querySelectorAll("li");
console.log(array_item);
for (let li of array_item){
    li.setAttribute("draggable", "true");
    li.addEventListener("dragstart", dragStart);
    li.addEventListener("mouseover", mouseOver);
}

function dragStart(e){
    console.log("mouse start");
    e.target.setAttribute("style", "opacity: 0.4;");
}
function mouseOver(){
    console.log("mouse over");

}
