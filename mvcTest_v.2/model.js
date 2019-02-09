export default{
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
        for(let obj in this.array){
            if(targetClass === this.array[obj].id){
                let objArray = this.array[obj].value
                for(let item in objArray){
                    if(targetId === objArray[item].id){
                        objArray.splice(item, 1);
                        console.log(objArray);
                    }
                }
            }
        }
    }

}
