export default{

    inputValue: undefined,
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

        addItem.textContent = "Add Item";

        addItem.addEventListener("click", addList);

        this.inputValue = textfield.value;

        inputArea.appendChild(ul);
        inputArea.appendChild(textfield);
        inputArea.appendChild(addItem);
        card.appendChild(inputArea);
    }, 

    renderList: function(ul){ //läger till items
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");

        li.textContent = "";
    },
}