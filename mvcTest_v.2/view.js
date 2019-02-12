

export default{
    //ulArray: [], // borde nog hämtas i modellen
  

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
        let listinput = document.createElement('input');
        let savebt = document.createElement('button');
        let p = document.createElement('p');
        let addcart = document.createElement('button');
        let delX = document.createElement("btton");
        
        x.innerHTML = "X";
        savebt.innerHTML = "Save";
        delX.innerHTML = "x";
        addcart.textContent= "Add Item"

        div.classList.add("container");
        box.classList.add("save-list-box");
        box.classList.add(object.id) 
        listinput.classList.add("input");
        savebt.classList.add("savebtn");
        x.classList.add("x");
        x.id = object.id;
        delX.classList.add("inputhide", "delX");
        p.classList.add("inputhide");
        addcart.classList.add("inputhide");
        addcart.classList.add("Cartcss");
        addcart.classList.add(object.id);

        div.setAttribute("style", "display: grid");
        listinput.setAttribute("maxlength" , "29");

        addcart.addEventListener("click", addList);

        div.appendChild(box);
        box.appendChild(p);
        box.appendChild(listinput);
        box.appendChild(savebt);
        box.appendChild(x);
        box.appendChild(delX);
        box.appendChild(addcart);
        main.appendChild(div);
      

        savebt.addEventListener("click", function (e) {
            let ul = document.createElement("ul");
            let input = document.createElement("input");
            console.log(listinput.value.length);
            if(listinput.value.length === 0){
                p.textContent = "title missing :(";
                
            }else{
                p.textContent = listinput.value;
            }
            

            listinput.classList.add("inputhide");
            savebt.classList.add("inputhide");
            addcart.classList.remove("inputhide");
            x.classList.add("inputhide");
            delX.classList.remove("inputhide");
            p.classList.remove("inputhide");
            input.classList.add("addItem__input"); 
            input.classList.add(object.id);
            ul.classList.add("itemList");
            ul.classList.add(object.id); 

            ul.setAttribute("style", "list-style: none;");
            input.setAttribute("maxlength", "17");

            ul.addEventListener("dragover", handleDragOver);
            ul.addEventListener("drop", handleDrop);

            box.appendChild(input);
            box.appendChild(ul);
        });
      
        x.addEventListener("click", function (e){
          div.parentElement.removeChild(div);
        });
        x.addEventListener("click", deleteListObj);

        delX.addEventListener("click", function(){
            div.parentElement.removeChild(div);
        });
    },
    renderItem: function(object, target, deleteFunction, handleDragStart, handleDragEnter, handleDragLeave, handleDragEnd, newEdit){ //läger till items
            let li = document.createElement("li");
            let h2 = document.createElement("h2");
            let deleteButton = document.createElement("button");
            let textArea = document.createElement("textarea");

            textArea.setAttribute("rows", "10");

            li.id = object.id;
            deleteButton.id = object.id;
            deleteButton.classList.add("deleteItem");
            deleteButton.classList.add(object.class);
            h2.classList.add("itemTitle");
            h2.classList.add(object.id);
            li.classList.add("item");
            textArea.classList.add("textArea");
            textArea.classList.add(object.class);
            

            h2.textContent = object.title + " - " + object.date;
            deleteButton.textContent = "X";

            li.setAttribute("draggable", "true");

            deleteButton.addEventListener("click", deleteFunction);
            li.addEventListener('dragstart', handleDragStart);
            li.addEventListener('dragenter', handleDragEnter);
            li.addEventListener('dragleave', handleDragLeave);
            li.addEventListener('dragend', handleDragEnd);
            h2.addEventListener("click", newEdit);
            
            li.appendChild(h2);
            li.appendChild(textArea);
            li.appendChild(deleteButton);

            target.parentElement.childNodes[7].appendChild(li); //onice att göra såhär, I know
            
            /*  //detta försökte jag med först, pusahde varje ul jag skapade till en array för att sen loopa igenom och lägga rätt li i rätt ul, fick aldrig det till att funka 

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
    editTitle: function(target, body, targetObj, boolean){
        console.log("edit");
        console.log(boolean);
        
        let background = document.createElement("div");
        let popUp = document.createElement("div");
        let buttons = document.createElement("div")
        let input = document.createElement("input");
        let saveButton = document.createElement("button");
        let cancleButton = document.createElement("button");
        let h1 = document.createElement("h1");
        h1.textContent = "Edit";

        h1.setAttribute("style", "color: #092573; left: 170px;");

        saveButton.textContent ="save";
        cancleButton.textContent ="cancle";

        saveButton.classList.add("popUp-saveButton");
        cancleButton.classList.add("popUp-cancleButton");
        popUp.classList.add("popUp");
        background.classList.add("popUp-background");
        buttons.classList.add("popUp-buttons");
        
        saveButton.addEventListener("click", function(){
            targetObj.title = input.value
            target.textContent = input.value + " - " + targetObj.date; 
            body.removeChild(background);
            boolean = true
        })

        cancleButton.addEventListener("click", function(){
            body.removeChild(background);
            boolean = true;
        })
        if(boolean === true){
            popUp.appendChild(h1);
        popUp.appendChild(input);
        buttons.appendChild(saveButton);
        buttons.appendChild(cancleButton);
        popUp.appendChild(buttons);
        background.appendChild(popUp);
        body.appendChild(background);
        boolean = false;
    }
    },
    deleteItem: function (target){
        target.currentTarget.parentNode.remove();
    }
}