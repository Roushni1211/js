let arr = [1,2,3,4,5,6]
// console.log(arr.push(8))
// console.log(arr.pop())

// console.log(arr.unshift(2))  //starting mein elt insert krta
// console.log(arr.shift()); //starting se elt remove

// const newarr =arr.join()
// console.log(newarr); //this makes the arr as string and () bina print krta

console.log("A", arr);

const myn1 = arr.slice(1,3)   //3 not included
console.log(myn1);

console.log("B", arr);

const myn2 = arr.splice(1,3)
console.log(myn2);
console.log("C", arr);  

/* *****VIMP***
slice and splice difference******
slice mein pichla no not included splice mein included
splice mein woh jo part splice kiya woh original array mein se hatt jata 
*/

const marvel_heroes = ["batman", "ironman", 'spiderman']
const dc_heros = ["thor", "superman"]

marvel_heroes.push[dc_heros]
console.log(marvel_heroes); //isme dc_heros poora alag elt ki tarah add hoga jo ek array hoga

let allheroes = marvel_heroes.concat(dc_heros)
console.log(dc_heros); //ab concat ek naya arr return krega ayr dono ko join krdega

/* ab ek SPREAD use krte 
concat se 2 hi jod skte pr spread se itne marzi array jodo */
const all_heroes_new = [...marvel_heroes, ...dc_heros]
console.log(all_heroes_new);

const arr_2 = [1,2, [3,4,5], 6,[7,4,[6,4,2]]] //jab samajh naa aaye.. array ke andar array aise sb ho
const arr_2_new = arr_2.flat(Infinity) //flat use kro sbko kholke dedega
//flat mein andar depth ki value specify krni hoti kitni depth tk kholna toh infinity dedi
console.log(arr_2_new);

//to check array hai ya nahi
console.log(Array.isArray("Hitesh"));
//convert krdo into array
console.log(Array.from("Hitesh"));

// ****INTERESTING CASE****** 
console.log(Array.from({name : "Hitesh"})); //returns [] empty array
//isme specify krna pdta keys ka array bnana ya values ka 


let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1, s2, s3));







