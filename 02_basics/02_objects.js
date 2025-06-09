//OBJECT LITERALS

const mySym = Symbol("key1")

const JSuser = {
    name : "Hitesh",
    age : 18,
    location : "jaipur",
    isloggedin : false,
    mySym : "key1",
    [mySym] : "key1" //symbol bnane ke liye syntax
}

// console.log(JSuser.name);
// console.log(JSuser["age"]);
// console.log(JSuser.mySym); 
// console.log(typeof JSuser.mySym); //aise string hai, symbol ki tarah use krna toh [] isme declare krna pdega sb jagah
// console.log(JSuser[mySym]) //symbol ki tarah access krne ke liye syntax

// JSuser.age = 20
// Object.freeze(JSuser) //iske baad changes nhi honge
// JSuser.age = 22
// console.log(JSuser)

JSuser.greeting = function(){
    console.log("hello")
}

console.log(JSuser.greeting());

//****jb bhi refer krna using ${} hmesha ` ` eh use krnaa**** */
JSuser.greetingTwo = function(){
    console.log(`hello user, ${this.name}`);
}

console.log(JSuser.greetingTwo());



