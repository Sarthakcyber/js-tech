// array 

const myArr = [1,2,3,45,6]
const Myheros = ["show" , "kiochi", "tang san", "luo", "kaizer"]

const myArra2 = new Array(1,2,3,4) // we use new keywords to create the objects and by this auto adds the [] brackets and creates the newArray
console.log(myArr[3]);
console.log(Myheros);

console.log(Myheros.length); // we can use length to check the length and prototype of array check inspect element

// Array  methods 

myArr.push(7) // insert new element in arr 
myArr.pop() // removes the last elem


myArr.unshift(0) // adds the elem to start of array but not viable for computer as we have to shift all the element of arr
myArr.shift(9) // remove the elem to start of array but not viable for computer as we have to shift all the element of arr
console.log(myArr);


console.log(myArr.includes(9)); // gives the bool value
console.log(myArr.indexOf(9)); // if not present return -1 else return the index


const newArr = myArr.join() // joins the prev arrys and convert it into string 
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log("C" , myArr);
console.log(myn2);
 

////**** diifrenece between slice and splice -->
// The main difference is that slice() creates a new array from a portion of an existing one without changing the original, 
// while splice() modifies the original array by removing, replacing, or adding elements. */




