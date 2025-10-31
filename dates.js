console.log(3+5);

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCretedate = new Date (2023,0,1) //month satrt with 0 in js +++ /// YEAR - MONTH - DATE - HOUR - MIN - SEC
//console.log(myCretedate.toDateString());
// let myCretedate = new Date (2023,0,1,5,3)
// console.log(myCretedate.toLocaleString());
// let myCretedate = new Date ("2023-01-14") // we can directly give the date & time
// console.log(myCretedate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCretedate.getTime());
// console.log(Math.floor(Date.now()/1000)); // gives in sec convert msec to sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); 
console.log(newDate.getDay());

// `${newDate.getDay()}` and the time


newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ""
})
