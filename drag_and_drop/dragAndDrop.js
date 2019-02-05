var dragSrcEl = null;
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
    [].forEach.call(array_item, function (li) {
      li.classList.remove('over'); //tar bort alla klaserna så att dash-bordern försvinner och opacityn återställs
    });
  }

 
  let array_item =  document.querySelectorAll("li");
  let arrray_ul =document.querySelectorAll("ul");
  for (let ul of arrray_ul){
    ul.addEventListener('dragover', handleDragOver);
    ul.addEventListener('drop', handleDrop);
  }

  function ul (){
    console.log(document.querySelectorAll("ul")[1]);
  }
  ul();
  
  
  [].forEach.call(array_item, function(li) {
    li.setAttribute("draggable", "true");
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragenter', handleDragEnter);
    //li.addEventListener('dragover', handleDragOver);
    li.addEventListener('dragleave', handleDragLeave);
    //li.addEventListener('drop', handleDrop, false);
    li.addEventListener('dragend', handleDragEnd);
  });
  