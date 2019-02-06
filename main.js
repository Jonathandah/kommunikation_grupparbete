let container = document.getElementById("list-container");
let addListBtn = document.getElementById("addlist-btn");
let saveListBtn = document.getElementById("save-btn");
let saveListBox = document.getElementById("save-list-box");
let listInputBox = document.getElementById("list-input-box");
let textValue;

let data = {
    lists: []
};

function addList() {
    saveListBox.style.display = "inline-block";
    addListBtn.style.display = "none";
}

function createList(textValue) {
    if (textValue) {
        let divone = document.createElement("div"),
            listTitle = document.createElement("div"),
            title = document.createElement("div"),
            dotIcon = document.createElement("a"),
            newTextNode = document.createTextNode(textValue),
            addCardLink = document.createElement("a"),
            addText = document.createTextNode("Add a card..."),
            lists,
            x,
            y;

        data.lists.push({
            title: textValue,
            cards: []
        });

        lists = data.lists.map(function (text) {
            return text;
        });

        for (x = 0; x < lists.length; x += 1) {

            title.appendChild(newTextNode);
            listTitle.setAttribute("class", "list-title");
            listTitle.appendChild(title);
            divone.style.cssFloat = "left";
            divone.style.display = "inline-block";
            divone.appendChild(listTitle);
            divone.appendChild(addCardLink);
            container.insertBefore(divone, addListBtn);
            addListBtn.style.display = "inline-block";
            saveListBox.style.display = "none";
            listInputBox.value = "";



        }
    }
}

window.addEventListener("load", function () {
    addListBtn.addEventListener("click", function () {
        addList();
    });

    saveListBtn.addEventListener("click", function () {
        textValue = listInputBox.value;
        createList(textValue);
    });
});
