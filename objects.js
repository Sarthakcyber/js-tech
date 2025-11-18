// singleton ******* when we declare with literals then singleton is not been made********
// Object.create


// object literals 

const mySym = Symbol("key1")


const JSuser = {
    name : "Sarthak" ,
    [mySym] : "mykey1",
    age : 18,
    location : "varansi",
    email : "sarth@gamil.com" ,
    is_loggedIN : true,
    lastloggedin : ["Monday", "Saturday"]
}

// console.log(JSuser.email);
// console.log(typeof JSuser[mySym]); // to declare the symbol data type we have to use [] brackets
// console.log(mySym);

// JSuser.age = 22 // Use to update the object
// // Object.freeze(JSuser) //freeze is used to lock the object
// JSuser.age = 20
// console.log(JSuser);


JSuser.greeting = function(){
    console.log("welcome on Board");
}

JSuser.greeting2 = function(){
    console.log(`welcome on Board ${this.name}`);   // this is used to access each and every property of it
    // string interpolation --> convert string to backticks using '`'  and then by ${} by using we can add anything   
}


console.log(JSuser.greeting());
console.log(JSuser.greeting2());