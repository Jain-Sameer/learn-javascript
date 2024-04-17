let myDate = new Date()
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let oldDate = new Date(2023, 0, 23)
// console.log(oldDate.toDateString());


let myTimeStamp = Date.now() //the ans is in milliseconds, comparisons of booking times are done using this.

// console.log(myTimeStamp);
// console.log(oldDate.getTime());

//converting to seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.toLocaleString());


console.log(newDate.toLocaleString('default',{
    weekday:  "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}));