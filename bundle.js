(function () {
    'use strict';

    var model = {
        array:[],

        findObj: function (target){
            console.log(target);
            for(let list of this.array){
                console.log("Körs");
                if(list.id === target){
                    console.log(list);
                    console.log(target);
                    console.log("hittsde");
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
        getDate: function(item){ //sätter datum
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1; //January is 0!
            let yyyy = today.getFullYear();
     
            let date = yyyy + "/" + mm + "/" + dd;
                item.date = date;// vill man att nycklar ska vara beroende av varandra??

        },

        idGenerater: function(object){
            let number = Math.floor(Math.random() * 1000);
            object.id = number.toString();
            console.log(object);
        },

        deleteObj: function(targetId, targetClass){
            console.log(targetClass);
            for(let obj in this.array){
                if(targetClass === this.array[obj].id){
                    console.log(this.array[obj]);
                    let objArray = this.array[obj].value;
                    console.log(objArray);
                    for(let item in objArray){
                        if(targetId === objArray[item].id){
                            console.log(targetId);
                            console.log(objArray[item]);
                            console.log(objArray);
                            objArray.splice(item, 1);
                            console.log(objArray);
                            console.log(this.array);
                        }
                    }
                }
            }
        }

    };

    var view = {
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

        renderList: function (main, addList , object, handleDragOver, handleDrop ){
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
          
          
            //input.classList.add("addItem__input"); //mins
            //input.classList.add(object.id); //mina
            //ul.classList.add("itemList"); // mina
            //ul.classList.add(object.id) //mina


            div.classList.add("container");
            box.classList.add("save-list-box");
            box.classList.add(object.id); //min
            listinput.classList.add("input");
            savebt.classList.add("savebtn");
            x.classList.add("delete-list-button");
            x.classList.add("inputhide");
            p.classList.add("inputhide");
            console.log(div);
          
            div.setAttribute("style", "display: grid");
            listinput.setAttribute("maxlength" , "29");
            //ul.setAttribute("style", "list-style: none;");

            //this.ulArray.push(ul); // min

            addcart.addEventListener("click", addList);
            //ul.addEventListener("dragover", handleDragOver);
            //ul.addEventListener("drop", handleDrop);

            addcart.classList.add("savebtn");
            addcart.classList.add("inputhide");
            addcart.classList.add(object.id);
            addcart.innerHTML = "AddCart";

            div.appendChild(box);
            box.appendChild(p);
            box.appendChild(listinput);
            box.appendChild(savebt);
            box.appendChild(x);
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
              x.classList.remove("inputhide");

              let ul = document.createElement("ul");
              let input = document.createElement("input");

              input.classList.add("addItem__input"); //mins
              input.classList.add(object.id); //mina // fixa allt fix
              ul.classList.add("itemList"); // mina
              ul.classList.add(object.id); //mina  

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
                target.parentElement.childNodes[6].appendChild(li);
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
    };

    let main = document.querySelector("main");

    view.renderDom(main, handleTest); //test-version

    let dragSrcEl = null;
    function handleDragStart(e) {
        this.style.opacity = '0.4';  //elementet användaren håller i 
        dragSrcEl = this;
      }
      

    function handleDragOver(e) {
        if (e.preventDefault){
          e.preventDefault(); // droppar elementet
        }
      }

      function handleDragEnter(e) {
        //lägger till classen på elementet vi hoovrar över
        this.classList.add('over');

      }

      function handleDragLeave(e) {
        this.classList.remove('over');  // tar bort klassen när vi bytar target
      }

      function handleDrop(e) {
        // console.log(e.currentTarget);
        // e = vårt target
        console.log(e.target); //li
        e.target.setAttribute("style", "opacity: 1;");
        e.target.classList.remove('over');
        this.appendChild(dragSrcEl);// = e.dataTransfer.getData('text/html');
        console.log(e.currentTarget);
      }

      function handleDragEnd(e) {
        e.target.setAttribute("style", "opacity: 1;");
        e.target.classList.remove('over');
      }


    function handleTest(e){

        let listObject = {
            id: undefined,
            value: [],
        };

        model.idGenerater(listObject);
        view.renderList(main, addList, listObject, handleDragOver, handleDrop);
        model.array.push(listObject);
    }

    /*
    let inputtButton = document.querySelector(".addItem");
    inputtButton.addEventListener("click", addInput);
     */

    function addList (e){ // hanterar items
      console.log(e.target.nextSibling);
        let itemValue = e.target.nextSibling.value; // borde denna selectas i controllern?
        console.log(itemValue);
        let listId = e.target.classList[1];


        console.log(listId);

        let object = {
            class: listId,
            id: undefined,
            title: itemValue,
            date: undefined,
            value:undefined,
        };
     
        
        model.getDate(object);
        model.idGenerater(object);
        model.sortItems(object);

        console.log("listId i addList-function " + listId);
        //view.renderItem(model.findObj(listId), e.target, eraise); funkar inte längre??
        //view.renderItem(model.findObj(listId), e.target, eraise);

        view.renderItem(object, e.target, eraise, handleDragStart, handleDragEnter, handleDragLeave, handleDragEnd);

    }


    function eraise (e){
      /*
        model.deleteObj(e.target.id, e.target.classList[1]);
        console.log(e.target.id);
        console.log(model.findObj(e.target.id));
        view.renderItem(model.findObj(e.target.classList[1]), e.target, eraise, handleDragStart, handleDragEnter, handleDragLeave, handleDragEnd);
        //view.deleteItem(e);
        */
       model.deleteObj(e.target.id, e.target.classList[1]);
       console.log(e.currentTarget.parentNode.id);
       //view.renderItem(model.findObj(e.target.id), eraise);
       view.deleteItem(e);
    }

}());
