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

console.log(JSuser.email);
console.log(typeof JSuser[mySym]); // to declare the symbol data type we have to use [] brackets
console.log(mySym);

JSuser.age = 22 // Use to update the object
// Object.freeze(JSuser) //freeze is used to lock the object
JSuser.age = 20
console.log(JSuser);


JSuser.greeting = function(){
    console.log("welcome on Board");
}

JSuser.greeting2 = function(){
    console.log(`welcome on Board ${this.name}`);   // this is used to access each and every property of it
    // string interpolation --> convert string to backticks using '`'  and then by ${} by using we can add anything   
}


console.log(JSuser.greeting());
console.log(JSuser.greeting2());


////////////************using singleton or constructors*************/////////////////////////////////////////

const user1 = new Object() //singleton object
//const user1 = {} //non singleton object


user1.id = "123abc"
user1.name = "Sarthak"
user1.age = "18"
user1.isLoggedIn = true
//console.log(user1);

const reg_user = {
    email :  "spmdn@gmail.com",
    fullname : {
        user_fullname : {
            firstname : "Sarthak",
            lastname: "Agrawal"
        }
    }
}

console.log(reg_user.fullname.user_fullname);


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}

const obj4 = Object.assign({}, obj1 , obj2 , obj3)


const obj4 = {...obj1, ...obj2} // used to seperate or spread the object 
console.log(obj4);


const users = [
    {
        id: 1 ,
        email: "abc@gmail.com"

    },
    {
        id: 2 ,
        email: "abcd@gmail.com"

    },
    {
        id: 3 ,
        email: "abce@gmail.com"

    }
]

users[1].email
console.log(user1);

console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));

console.log(user1.hasOwnProperty('isLoggedIn'));
