let name = "Sarthak"
let age = 18
let is_logged = false
let state = null

console.table([ name, age , is_logged])

/*
PRIMITIVE DATA TYPES ->
number -> 2 to power 53
bigint 
string -> ""
boolean -> True/False
null -> standalone value // if no value recived then null // null is an object // interview question
undefined -> no value assigned // is a data type
symbol ->  unique 
*/

console.log(typeof is_logged)



let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)


/*
"33" -> 33
"33abc" -> NaN  (NOT A NUMBER)
true = 1 ; false = 0;

*/

let loggedin = 1
let booleanloggedin = Boolean(is_logged)
console.log(booleanloggedin)

/*
1 -> true ; 0 -> false
// "" -> false 
"Sarthak" --> true
*/