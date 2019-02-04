export default{

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

    renderList: function (addinput){
        let container__listbox = document.querySelector(".container__listbox");
        let listArea = document.createElement("div");
        let addItem = document.createElement("button");
        let list = document.createElement("div");
    
        addItem.textContent = "+";
    
        listArea.classList.add("listArea");
        addItem.classList.add("addItem");
        list.classList.add("list");
        
        this.currentListArea = listArea

        addItem.addEventListener("click", addinput);

        listArea.appendChild(addItem);
        listArea.appendChild(list);
    
        container__listbox.appendChild(listArea);
    },
}


