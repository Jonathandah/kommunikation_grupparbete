export default{
    renderDom: function(value){

    },

    renderList: function(card){
        let inputArea = document.createElement("div");
        let ul = document.createElement("ul");
        let textfield = document.createElement("input");
        let addItem = document.createElement("button");

        ul.setAttribute("style", "");
        textfield.setAttribute("style", "");
        addItem.setAttribute("style", "border-radios: 4px;")

        addItem.textContent = "Add Item";

        inputArea.appendChild(ul);
        inputArea.appendChild(textfield);
        inputArea.appendChild(addItem);
        card.appendChild(inputArea);
    }
}