(function () {
    'use strict';

    var model = {
        array:[],

        findObj: function (target){
            for(let list of this.array){
                if(list.id === target){
                    return list;
                }
            }
        },
        sortItems: function(obj){
            for(let list of this.array){
                if(list.id === obj.class){
                    list.value.push(obj);
                }
            }

            console.log(this.array);
        },
        getDate: function(object){ //sätter datum
           let today = new Date();
           let dd = today.getDate();
           let mm = today.getMonth() + 1; //January is 0!
           let yyyy = today.getFullYear();

           let date = yyyy + "/" + mm + "/" + dd;

           object.itemDate = date;// vill man att nycklar ska vara beroende av varandra??
        },

        idGenerater: function(object){
            let number = Math.floor(Math.random() * 1000);
            object.id = number.toString();
            console.log(object);
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

        renderInput: function(target, addList){ //renderar input fieldet för att lägga till items.
            let objId = target.parentElement.classList[1]; //list id

            let inputArea = document.createElement("div");
            let ul = document.createElement("ul");
            let input = document.createElement("input");
            let addItem = document.createElement("button");

            ul.setAttribute("style", "list-style: none;");
            input.setAttribute("style", "");
            addItem.setAttribute("style", "border-radios: 4px;");
          
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
    };

    var test = {

        currentListArea: undefined ,

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

        renderList: function (addinput , object){
            let container__listbox = document.querySelector(".container__listbox");
            let listArea = document.createElement("div");
            let addItem = document.createElement("button");
            let list = document.createElement("div");
        
            addItem.textContent = "+";
        
            listArea.classList.add("listArea");
            listArea.classList.add(object.id);
            addItem.classList.add("addItem");
            addItem.classList.add(object.id);
            list.classList.add("list");
            
            this.currentListArea = listArea;

            addItem.addEventListener("click", addinput);

            listArea.appendChild(addItem);
            listArea.appendChild(list);
        
            container__listbox.appendChild(listArea);
        },
    };

    test.renderDom(handleTest); //test-version
    function handleTest(){

        let listObject = {
            id: undefined,
            value: [],
        };

        model.idGenerater(listObject);
        test.renderList(addInput, listObject);
        model.array.push(listObject);
    }

    function addInput(e){ // hanterar add input 
        view.renderInput(e.target, addList);
    }

    /*
    let inputtButton = document.querySelector(".addItem");
    inputtButton.addEventListener("click", addInput);
     */

    function addList (e){ // hanterar items
        let itemValue = view.input.value; // borde denna selectas i controllern?
        let listId = e.target.classList[0];

        let object = {
            class: listId,
            id: undefined,
            value: itemValue,
            itemDate: undefined,
        };
        console.log(listId);
        model.getDate(object);
        model.idGenerater(object);
        model.sortItems(object);
        
        view.renderItem(model.findObj(listId), e.target, eraise);
    }


    function eraise (e){
        model.deleteObj(e.target.id);
        view.renderItem(model.array, eraise);
    }

}());
