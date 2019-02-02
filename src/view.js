export default{
    ul: undefined,

    inputValue: undefined, // osöker på om den ska få sitt värde från modellen eller controllern !!

    renderDom: function(value){ //render dom, behövs den ens?

    },

    renderInput: function(card, addList){ //renderar input fieldet för att lägga till items.
        let inputArea = document.createElement("div");
        let ul = document.createElement("ul");
        let textfield = document.createElement("input");
        let addItem = document.createElement("button");

        ul.setAttribute("style", "");
        textfield.setAttribute("style", "");
        addItem.setAttribute("style", "border-radios: 4px;")

        textfield.classList.add("addItem__input");
        ul.classList.add("itemList");

        addItem.textContent = "Add Item";

        addItem.addEventListener("click", addList);

        this.ul = ul;
        //this.inputValue = textfield.value; //tror att jag vill ha något liknande i renderList-funktionen istället

        inputArea.appendChild(ul);
        inputArea.appendChild(textfield);
        inputArea.appendChild(addItem);
        card.appendChild(inputArea);
    }, 

    renderList: function(array){ //läger till items
        console.log(this.ul);
        console.log(array);

        for(let obj of array){
            let li = document.createElement("li");  //styling för items 
            let h2 = document.createElement("h2");
            let deleteButton = document.createElement("button");
            let textArea = document.createElement("textarea");
            deleteButton.textContent = "X";

            li.appendChild(deleteButton);


            for(let key in obj){
                li.textContent = "";
            }
        }
        
        

        
    },
}