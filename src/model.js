export default{
    array:[],

    getDate: function(object){ //sätter datum
        let setDate = new Date;

        let year = setDate.getFullYear;
        let month = setDate.getMonth;
        let day = setDate.getUTCDay;
        let hour = setDate.getUTCHours;
        let minute = setDate.getMinutes;

        object.itemDate.textContent = year + "/" + month + "/" + day + "-" + hour + ":" + minute;
        
        console.log(object.itemDate);
        this.array.push(object);
    }
}