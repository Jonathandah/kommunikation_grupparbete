export default{
    array:[],

    getDate: function(object){ //sätter datum
        let setDate = new Date;
        let date = setDate.toLocaleDateString

        object.itemDate = date; // inte säker på att den funkar som jag vill?
        console.log(object.itemDate);
        this.array.push(object);
    }
}