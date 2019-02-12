(function () {
    'use strict';

    var model = {
        array:[],
        boolean: true,
        findObj: function (target, ulClass){
            console.log(ulClass);
            ulClass.classList;
            console.log(JSON.stringify(this.array));
            console.log(target);
            for(let list of this.array){
                console.log(list);
                for(let item of list.value){
                    console.log(item);
                    if(target.id === item.id){
                        console.log(target);
                        console.log(item.id);
                        for(let listObj of this.array){
                            console.log(ulClass.class);
                            console.log(listObj.id);
                            if(ulClass.classList[1] === listObj.id){
                                console.log("körs");
                                console.log(item);
                                item.class = listObj.id;
                                ulClass.classList.remove[1];
                                listObj.value.push(item);
                            }
                        }
                        list.value.splice(item, 1); // måste flytta itemet innan jag tarbort det i nuvarande object
                        console.log(this.array);
                    }
                }
            }
        },
        sortItems: function(obj){
            for(let list of this.array){
                if(list.id === obj.class){
                    list.value.push(obj);
                }
            }
        },
        getDate: function(item){ //sätter datum
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1; //January is 0!
            let yyyy = today.getFullYear();
     
            let date = yyyy + "/" + mm + "/" + dd;
            item.date = date;// vill man att nycklar ska vara beroende av varandra??

        },
        editItemObj: function (target){
            for(let listObj of this.array){
                for(let itemObj of listObj.value){
                    if(itemObj.id === target.classList[1]){
                       return itemObj
                    }
                }
            }
        },
        
        idGenerater: function(object){
            let possible = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
            let id = "";
            for(let i = 0; i<=7; i++){
                id += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            object.id = id;
        },

        deleteItemObj: function(targetId, targetClass){
            for(let obj in this.array){
                if(targetClass === this.array[obj].id){
                    let objArray = this.array[obj].value;
                    for(let item in objArray){
                        if(targetId === objArray[item].id){
                            objArray.splice(item, 1);
                        }
                    }
                }
            }
        },

        deleteListObj: function(targetId){
            for(let obj of this.array){
                if(targetId === obj.id){
                    this.array.splice(obj, 1);
                }
            }
        }
    };

    var view = {
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
            addcart.textContent= "Add Item";

            div.classList.add("container");
            box.classList.add("save-list-box");
            box.classList.add(object.id); 
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
            let buttons = document.createElement("div");
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
                targetObj.title = input.value;
                target.textContent = input.value + " - " + targetObj.date; 
                body.removeChild(background);
                boolean = true;
            });

            cancleButton.addEventListener("click", function(){
                body.removeChild(background);
                boolean = true;
            });
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
    };

    let main = document.querySelector("main");
    let body = document.querySelector("body");

    view.renderDom(main, newList); 

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
        console.log(e.target); 
        e.target.setAttribute("style", "opacity: 1;");
        e.target.classList.remove('over');
        this.appendChild(dragSrcEl);// = e.dataTransfer.getData('text/html');
        console.log(this.classList[1]); // ulen vi släpper vårt item i
        console.log(dragSrcEl);
        console.log(dragSrcEl.id); // li måste ha sitt förstvarande object id och sen byta object id:et till det den släpps i !!!
        console.log(dragSrcEl.parentNode);
        console.log(e.currentTarget);
        model.findObj(dragSrcEl, this); //fick aldrig denna till att funka
      }


      function handleDragEnd(e) {
        let liArray = document.querySelectorAll(".item");
        for(let li of liArray){
          li.setAttribute("style", "opacity: 1;");
          li.classList.remove('over');
        }
      }


    function newList(e){
        let listObject = {
            id: undefined,
            value: [],
        };

        model.idGenerater(listObject);
        view.renderList(main, newItem, listObject, handleDragOver, handleDrop, eraiseListObj);
        model.array.push(listObject);
    }

    function newItem (e){ // hanterar items
        let itemValue = e.target.nextSibling.value; // borde denna selectas i controllern?
        let listId = e.target.classList[1]; // veet att det är extremt dåligt att andvända detta för ifall man lägger till en klass i elementet sabbas allt /mvh Jonatahan

        let itemObject = {
            class: listId,
            id: undefined,
            title: itemValue,
            date: undefined,
            value:undefined,
        };
     
        model.getDate(itemObject);
        model.idGenerater(itemObject);
        model.sortItems(itemObject);
        view.renderItem(itemObject, e.target, eraise, handleDragStart, handleDragEnter, handleDragLeave, handleDragEnd, newEdit);
    }

    function newEdit(e){
      console.log("hej");
      view.editTitle(e.target, body, model.editItemObj(e.target), model.boolean);
      
      console.log(model.boolean);
    }

    function eraiseListObj (e){
      console.log(model.array);
      model.deleteListObj(e.target.id); 
      console.log(model.array);
    }


    function eraise (e){
       // i detta fallet hade jag gärna velat radera mina items objekt och sen bara använda min render-metod igen, lyckades ej lösa det utan att sabba saker i koden // mvh jonathan

      /*
        model.deleteObj(e.target.id, e.target.classList[1]);
        console.log(e.target.id);
        console.log(model.findObj(e.target.id));
        view.renderItem(model.findObj(e.target.classList[1]), e.target, eraise, handleDragStart, handleDragEnter, handleDragLeave, handleDragEnd);
        //view.deleteItem(e);
        */

       model.deleteItemObj(e.target.id, e.target.classList[1]); //farligt //tar bort itemets objekt i modellen
       view.deleteItem(e); // tar bort itemet i domen
    }

}());
