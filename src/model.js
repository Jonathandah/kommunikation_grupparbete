export default{
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

}
