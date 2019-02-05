export default{
    ul: undefined,

    input: undefined, // osöker på om den ska få sitt värde från modellen eller controllern !!

    renderInput: function(target, addList){ //renderar input fieldet för att lägga till items.
        let objId = target.parentElement.classList[1]; //list id

        let inputArea = document.createElement("div");
        let ul = document.createElement("ul");
        let input = document.createElement("input");
        let addItem = document.createElement("button");

        ul.setAttribute("style", "list-style: none;");
        addItem.setAttribute("style", "border-radios: 4px;")
      
        input.classList.add("addItem__input");
        addItem.classList.add(objId);
        ul.classList.add("itemList");

        addItem.textContent = "Add Item";

        addItem.addEventListener("click", addList);
        
        this.input = input;
        this.ul = ul;
        //this.inputValue = input.value; //tror att jag vill ha något liknande i renderList-funktionen istället

        inputArea.appendChild(input);
        inputArea.appendChild(addItem);
        inputArea.appendChild(ul);
        target.parentElement.appendChild(inputArea);
    }, 

    renderItem: function(listObj, target, deleteFunction){ //läger till items
        console.log(this.ul);
        console.log(listObj);
        console.log(target);
        this.ul.innerHTML = "";
        for(let obj in listObj.value){
            let x = listObj.value[obj];
            let li = document.createElement("li");  //styling för items 
            let h2 = document.createElement("h2");
            let deleteButton = document.createElement("button");
            let textArea = document.createElement("textarea");

            textArea.setAttribute("rows", "10");

            h2.textContent = x.value + " - " + x.itemDate;
            deleteButton.textContent = "X";

            deleteButton.id = obj.id;

            deleteButton.addEventListener("click", deleteFunction);
        
            li.appendChild(h2);
            li.appendChild(textArea);
            li.appendChild(deleteButton);
            target.parentElement.appendChild(li);
        }
    },
}