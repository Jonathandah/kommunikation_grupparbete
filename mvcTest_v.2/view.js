export default{
    container__listbox: undefined,
    container__input:undefined,
    obj:undefined,
    ulArray: [],
     // osöker på om den ska få sitt värde från modellen eller controllern !!

    renderDom: function (main, testFunction){    
        let addListButton = document.createElement("button");
        addListButton.classList.add("newlist");
        addListButton.addEventListener("click", testFunction);
        addListButton.textContent = "new List";
        main.appendChild(addListButton);  
    },

    renderList: function (main, addList , object, handleDragOver, handleDrop, deleteListObj){
        let div = document.createElement("div");
        let box = document.createElement('div');
        let x = document.createElement('button');
        x.innerHTML = "X";
        let listinput = document.createElement('input');
        let savebt = document.createElement('button');
        let p = document.createElement('p');
        //let ul = document.createElement("ul"); // fixa allt fix
        //let input = document.createElement("input"); // fixa allt fix
        let addcart = document.createElement('button');
        savebt.innerHTML = "Save";
        let delX = document.createElement("btton");
        delX.textContent = "x";
        
      
        //input.classList.add("addItem__input"); //mins
        //input.classList.add(object.id); //mina
        //ul.classList.add("itemList"); // mina
        //ul.classList.add(object.id) //mina


        div.classList.add("container");
        box.classList.add("save-list-box");
        box.classList.add(object.id) //min
        listinput.classList.add("input");
        savebt.classList.add("savebtn");
        x.classList.add("x");
        delX.classList.add("inputhide", "delX");
        x.id = object.id;
        p.classList.add("inputhide");
        console.log(div);
      
        div.setAttribute("style", "display: grid");
        listinput.setAttribute("maxlength" , "29");
        //ul.setAttribute("style", "list-style: none;");

        //this.ulArray.push(ul); // min

        addcart.addEventListener("click", addList);
        //ul.addEventListener("dragover", handleDragOver);
        //ul.addEventListener("drop", handleDrop);

        addcart.classList.add("inputhide");
        addcart.classList.add("Cartcss");
        addcart.classList.add(object.id);
        addcart.textContent= "Add Item"

        div.appendChild(box);
        box.appendChild(p);
        box.appendChild(listinput);
        box.appendChild(savebt);
        box.appendChild(x);
        box.appendChild(delX);
        box.appendChild(addcart);
        //box.appendChild(ul);
        main.appendChild(div);
      
      
        savebt.addEventListener("click", function (e) {
          console.log(p);
          p.classList.remove("inputhide");
          p.textContent = listinput.value;
          listinput.classList.add("inputhide");
          savebt.classList.add("inputhide");
          addcart.classList.remove("inputhide");
          x.classList.add("inputhide");
          delX.classList.remove("inputhide");


          let ul = document.createElement("ul");
          let input = document.createElement("input");

          input.classList.add("addItem__input"); //mins
          input.classList.add(object.id); //mina // fixa allt fix
          ul.classList.add("itemList"); // mina
          ul.classList.add(object.id) //mina  

          ul.setAttribute("style", "list-style: none;");
          input.setAttribute("maxlength", "17");

          ul.addEventListener("dragover", handleDragOver);
          ul.addEventListener("drop", handleDrop);

          box.appendChild(input);
          box.appendChild(ul);
          console.log(listinput.value);
          console.log(p);
          console.log(e);
        });
      
        x.addEventListener("click", function (e){
          div.parentElement.removeChild(div);
        });
        x.addEventListener("click", deleteListObj);

        delX.addEventListener("click", function(){
            div.parentElement.removeChild(div);
        });
      
        /*
        //let objId = target.parentElement.classList[1]; //list id
        let h3 = document.createElement("h3");
        let listArea = document.createElement("div");
        let addItem = document.createElement("button");
        let input = document.createElement("input");
        let list = document.createElement("div");
        let ul = document.createElement("ul");

        ul.setAttribute("style", "list-style: none;");

        addItem.textContent = "+";
        h3.textContent = title

        input.classList.add("addItem__input");
        input.classList.add(object.id);
        listArea.classList.add("listArea");
        listArea.classList.add(object.id);
        addItem.classList.add("addItem");
        addItem.classList.add(object.id);
        list.classList.add("list");
        ul.classList.add("itemList");
        ul.classList.add(object.id)
        
        this.currentListArea = listArea
        this.ulArray.push(ul);

        addItem.addEventListener("click", addList);

        ul.addEventListener("dragover", handleDragOver);
        ul.addEventListener("drop", handleDrop);

        list.appendChild(ul);
        listArea.appendChild(h3);
        listArea.appendChild(addItem);
        listArea.appendChild(input);
        listArea.appendChild(list);

    
        this.container__listbox.appendChild(listArea);
        */
    },
    renderItem: function(object, target, deleteFunction, handleDragStart, handleDragEnter, handleDragLeave, handleDragEnd){ //läger till items
            console.log(object);
            let li = document.createElement("li");  //styling för items 
            let h2 = document.createElement("h2");
            let deleteButton = document.createElement("button");
            let textArea = document.createElement("textarea");

            textArea.setAttribute("rows", "10");

            li.id = object.id;
            deleteButton.id = object.id;
            deleteButton.classList.add("deleteItem");
            deleteButton.classList.add(object.class);
            h2.classList.add("itemTitle");
            li.classList.add("item");
            textArea.classList.add("textArea");
            textArea.classList.add(object.class);
            

            h2.textContent = object.title + " - " + object.date;
            deleteButton.textContent = "X";


            deleteButton.addEventListener("click", deleteFunction);
            li.setAttribute("draggable", "true");
            li.addEventListener('dragstart', handleDragStart);
            li.addEventListener('dragenter', handleDragEnter);
            li.addEventListener('dragleave', handleDragLeave);
            li.addEventListener('dragend', handleDragEnd);
            
            li.appendChild(h2);
            li.appendChild(textArea);
            li.appendChild(deleteButton);
            console.log(target.parentElement);
            console.log(target.parentElement.childNodes[3]);
            target.parentElement.childNodes[7].appendChild(li);
            /*
            console.log(this.ulArray);
            for(let ul of this.ulArray){
                console.log(target.classList);
                console.log(ul.classList)
                if(target.classList[1] === ul.classList[1]){
                    ul.appendChild(li);
                }
            }
            */
    },

    deleteItem: function (target){
        target.currentTarget.parentNode.remove();
    }
}