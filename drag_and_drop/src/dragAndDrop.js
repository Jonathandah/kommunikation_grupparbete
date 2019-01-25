let array_item =  document.querySelectorAll("li");
console.log(array_item);
for (let li of array_item){
    li.addEventListener("mouseover", mouseOver);
}

function mouseOver(){
    console.log("mouse over");

}
