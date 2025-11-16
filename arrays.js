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


const marvel_heros = ["thor", "Iron man" , "captian marvel" , "doctor strange" , "Ant-man"]
const dc_heros =  ["superman" , "flash" , "wonderwomen" , "aquaman" , "silver_surfer"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[5][1]); // 5th index and 1 st element of new dc arr because after push it becomes the new object


const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

const allnewheros = [...marvel_heros, ...dc_heros] // spreads the arrays by dots (.)
console.log(allnewheros);

const any_arr = [1,2,3, [4,5,6] , 7, [6,7,[8,9,0]]]

const real_another_array = any_arr.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursive up to the specified depth.
//flat() seperate the array elements within in it we can give the range or limit to it also  
console.log(real_another_array);

console.log(Array.isArray("Sarthak"))// is Array is used to check whether it is array or not 
console.log(Array.from("Sarthak")) // from is used to convert in array

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3 , score4)); //of --> Returns a new array from a set of elements.
