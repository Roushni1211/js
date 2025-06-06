// STACKS (PRIMITIVE) , HEAPS(NON PRIMITIVE)
/* STACKS mein refernce nhi hoti 
uski copy save hoti
agar copy mein changes kiye actual mein nhi change hoga
*/

let myname = "Yug"
let anothername = myname 
anothername = "Rou"

console.log(myname)
console.log(anothername)

/* heap mein changes hote
ek ki value dusre mein daali
ab dono same cheez ko refer kr rhe
dusre ki change krdi
toh reference toh same hai toh dono ki badal gayi*/

let userOne = {
    email : "user@google",
    upi : "user@ybl",
}
let userTwo = userOne
userTwo.email = "two@gmail"

console.log(userOne.email)
console.log(userTwo.email)
