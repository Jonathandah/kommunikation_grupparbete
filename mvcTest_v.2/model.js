export default{
    array:[],

    findObj: function (target){
        console.log(target);
        for(let list of this.array){
            console.log("Körs");
            if(list.id === target){
                console.log(list);
                console.log(target);
                console.log("hittsde")
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
                let objArray = this.array[obj].value
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

}
