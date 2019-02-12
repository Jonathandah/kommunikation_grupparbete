export default{
    array:[],
    boolean: true,
    findObj: function (target, ulClass){
        console.log(ulClass);
        ulClass.classList
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
                            item.class = listObj.id
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
        let possible = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
        let id = "";
        for(let i = 0; i<=7; i++){
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        object.id = id;
    },

    deleteItemObj: function(targetId, targetClass){
        for(let obj in this.array){
            if(targetClass === this.array[obj].id){
                let objArray = this.array[obj].value
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
}
