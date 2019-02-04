/*
let array_item =  document.querySelectorAll("li");

console.log(array_item);
for (let li of array_item){
    li.setAttribute("draggable", "true");
    li.addEventListener("dragstart", dragStart);
    li.addEventListener("mouseover", mouseOver, false);
    li.addEventListener("dragenter", dragEnter);
    li.addEventListener("dragleave", dragLeave);
    li.addEventListener("drop", drop);
}

function dragStart(e){
    console.log("mouse start");
    e.target.setAttribute("style", "opacity: 0.4;");
}
function mouseOver(e){
    console.log("mouse over");
    if(e.preventDefault){
        e.preventDefault();  // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';
    return false;
}

function dragEnter(e){
    console.log("drag enter")
    // this / e.target is the current hover target.
    e.target.classList.add('over');
}

function dragLeave(e){
    console.log("drag leave")
    e.target.classList.remove("over");
}

function drop(e){
    console.log("drop");
    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
    
      // See the section on the DataTransfer object.
    
      return false;
}


function dragEnd(e) {
    // this/e.target is the source node.
    console.log("drag end")
    for(let li in array_item){
        li.classList.remove("over");
    }    
  }
*/


var dragSrcEl = null;
function handleDragStart(e) {
    this.style.opacity = '0.4';  //elementet användaren håller i 
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  
  function handleDragOver(e) {
    if (e.preventDefault) {
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
// e = vårt target
  if (dragSrcEl != this) {
    // byter innerhtml med elemetet vi droppar på
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
  }
  
  function handleDragEnd(e) {
    e.target.setAttribute("style", "opacity: 1;");
    [].forEach.call(array_item, function (li) {
      li.classList.remove('over'); //tar bort alla klaserna så att dash-bordern försvinner och opacityn återställs
    });
  }
  
  let array_item =  document.querySelectorAll("li");
  [].forEach.call(array_item, function(li) {
    li.setAttribute("draggable", "true");
    li.addEventListener('dragstart', handleDragStart, false);
    li.addEventListener('dragenter', handleDragEnter, false);
    li.addEventListener('dragover', handleDragOver, false);
    li.addEventListener('dragleave', handleDragLeave, false);
    li.addEventListener('drop', handleDrop, false);
    li.addEventListener('dragend', handleDragEnd, false);
  });
  