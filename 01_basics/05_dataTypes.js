/*     PRIMITIVE (CALL BY VALUE)
7 TYPES : String, Number, Boolean, null, undefined, Symbol, BigInt
  */


/*   NON PRIMITIVE (REFERENCE)
Array, Objects, Functions

inn sb ka return type(datatype) object hota
*/

// JAVASCRIPT is DYNAMIC because datatype is automatically assigned to variables
const outsideTemp = null
let userEmail


//using Symbol makes that unique
const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId) //ab symbol ki wajah se dono different hai

//array
// const heroes = ["shaktiman", "batman"]
// let obj = {
//   name : "Roushni",   //this . is important
//   age : 19,       //last wale pe , not mandatory
// }
// console.log(obj)

let bigNumber = 123456789n  //peeche n lgadiya toh big number ban jata ..datatype => bigInt

//function => function(){}
const myFunction = function(){
  console.log("hello world")
}

console.log(typeof bigNumber)
console.log(typeof smallNumber)  //aia kuch tha nahi toh undefined

let val = null
console.log(typeof val) //null tha toh datatype OBJECT aayi 


// Symbol ka returntype Symbol
     