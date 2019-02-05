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

}
