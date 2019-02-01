(function () {
    'use strict';

    var model = {
        array:[],

        getDate: function(object){ //sätter datum
            let setDate = new Date;
            let date = setDate.toLocaleDateString;

            object.itemDate = date;
            console.log(object.itemDate);
            this.array.push(object);
        }
    };

    var view = {

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
            addItem.setAttribute("style", "border-radios: 4px;");

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
    };

    function addInput(){ // hanterar add input 
        let div = document.querySelector("div");
        view.renderInput(div, addList);
    }

    let inputtButton = document.querySelector(".addList");
    inputtButton.addEventListener("click", addInput);


    function addList (){ // hanterar items
        let object = {
            value: view.inputValue,
            itemDate: undefined,
        };
        model.getDate(object);
    }

}());
