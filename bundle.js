(function () {
    'use strict';

    var model = {
        array:[],

        getDate: function(object){ //sätter datum
           let today = new Date();
           let dd = today.getDate();
           let mm = today.getMonth() + 1; //January is 0!
           let yyyy = today.getFullYear();

           let date = yyyy + "/" + mm + "/" + dd;

           object.itemDate = date;

           this.array.push(object); // vill man att nycklar ska vara beroende av varandra??
        },

        idGenerater: function(object){
            let number = Math.floor(Math.random() * 1000);
            object.id = object.value + number;
        },

        deleteObj: function(target){
            for(let obj in this.array){
                if(target === this.array[obj].id){
                    console.log(this.array[obj].id);
                    console.log(obj);
                    this.array.splice(obj, 1);
                    //kolla igenom sen; fixes?
                }
            }
        }

    };

    var view = {
        ul: undefined,

        input: undefined, // osöker på om den ska få sitt värde från modellen eller controllern !!

        renderInput: function(card, addList){ //renderar input fieldet för att lägga till items.
            let inputArea = document.createElement("div");
            let ul = document.createElement("ul");
            let input = document.createElement("input");
            let addItem = document.createElement("button");

            ul.setAttribute("style", "list-style: none;");
            input.setAttribute("style", "");
            addItem.setAttribute("style", "border-radios: 4px;");

            input.classList.add("addItem__input");
            ul.classList.add("itemList");

            addItem.textContent = "Add Item";

            addItem.addEventListener("click", addList);
            
            this.input = input;
            this.ul = ul;
            //this.inputValue = input.value; //tror att jag vill ha något liknande i renderList-funktionen istället

            inputArea.appendChild(input);
            inputArea.appendChild(addItem);
            inputArea.appendChild(ul);
            card.appendChild(inputArea);
        }, 

        renderItem: function(array, deleteFunction){ //läger till items
            console.log(this.ul);
            console.log(array);
            
            this.ul.innerHTML = "";
            for(let obj of array){
            
                let li = document.createElement("li");  //styling för items 
                let h2 = document.createElement("h2");
                let deleteButton = document.createElement("button");
                let textArea = document.createElement("textarea");

                textArea.setAttribute("rows", "10");

                h2.textContent = obj.value + " - " + obj.itemDate;
                deleteButton.textContent = "X";

                deleteButton.id = obj.id;

                deleteButton.addEventListener("click", deleteFunction);
            
                li.appendChild(h2);
                li.appendChild(textArea);
                li.appendChild(deleteButton);
                this.ul.appendChild(li);
            }
        },
    };

    var test = {
        renderDom: function (testFunction){
            let main = document.querySelector("main");
        
            let container = document.createElement("div");
        
            let container__listbox = document.createElement("div");
        
            let container__toolbox = document.createElement("div");
        
            let container__button = document.createElement("button");
        
            container.classList.add("container");
            container__listbox.classList.add("container__listbox");
            container__toolbox.classList.add("container__toolbox");
            container__button.classList.add("listContainer__button");
        
            container__button.textContent = "Add List";
            container__button.addEventListener("click", testFunction);
        
            container__toolbox.appendChild(container__button);
            container.appendChild(container__toolbox);
            container.appendChild(container__listbox);
            main.appendChild(container);    
        },

        renderList: function (addinput){
            let container__listbox = document.querySelector(".container__listbox");
            console.log("HEj");
            let listArea = document.createElement("div");
            let addItem = document.createElement("button");
            let list = document.createElement("div");
        
            addItem.textContent = "+";
        
            listArea.classList.add("listArea");
            addItem.classList.add("addItem");
            list.classList.add("list");
            
            addItem.addEventListener("click", addinput);

            listArea.appendChild(addItem);
            listArea.appendChild(list);
        
            container__listbox.appendChild(listArea);
        },
    };

    test.renderDom(handleTest);
    function handleTest(){
        console.log("handletest");
        test.renderList(addInput);
    }

    function addInput(){ // hanterar add input 
        let div = document.querySelector("div");
        view.renderInput(div, addList);
    }

    /*
    let inputtButton = document.querySelector(".addItem");
    inputtButton.addEventListener("click", addInput);
     */

    function addList (){ // hanterar items
        let itemValue = view.input.value; // borde denna selectas i controllern?
        let object = {
            id: undefined,
            value: itemValue,
            itemDate: undefined,
        };

        model.getDate(object);
        model.idGenerater(object);
        view.renderItem(model.array, eraise);
    }


    function eraise (e){
        model.deleteObj(e.target.id);
        view.renderItem(model.array, eraise);
    }

}());
