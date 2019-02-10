export default{
    container__listbox: undefined,
    container__input:undefined,
    obj:undefined,
    ulArray: [],
     // osöker på om den ska få sitt värde från modellen eller controllern !!

    renderDom: function (main, testFunction){
    
        let container = document.createElement("div");
    
        let container__listbox = document.createElement("div");
    
        let container__toolbox = document.createElement("div");
    
        let container__button = document.createElement("button");

        let container__input = document.createElement("input");
    
        container.classList.add("container");
        container__listbox.classList.add("container__listbox");
        container__toolbox.classList.add("container__toolbox");
        container__button.classList.add("listContainer__button");
        container__input.classList.add("container__input");
    
        container__button.textContent = "Add List";
        container__button.addEventListener("click", testFunction);

        this.container__listbox = container__listbox;
        this.container__input = container__input;

        container__toolbox.appendChild(container__input);
        container__toolbox.appendChild(container__button);
        container.appendChild(container__toolbox);
        container.appendChild(container__listbox);
        main.appendChild(container);  
    },

    renderList: function (addList , object, title, handleDragOver, handleDrop ){
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
            

            h2.textContent = object.title + " - " + object.date;
            deleteButton.textContent = "X";


            deleteButton.addEventListener("click", deleteFunction);
            li.setAttribute("draggable", "true");
            li.addEventListener('dragstart', handleDragStart);
            li.addEventListener('dragenter', handleDragEnter);
            //li.addEventListener('dragover', handleDragOver);
            li.addEventListener('dragleave', handleDragLeave);
            //li.addEventListener('drop', handleDrop, false);
            li.addEventListener('dragend', handleDragEnd);
            
            li.appendChild(h2);
            li.appendChild(textArea);
            li.appendChild(deleteButton);
            console.log(target.parentElement);
            console.log(target.parentElement.childNodes[3]);
            target.parentElement.childNodes[3].childNodes[0].appendChild(li);
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