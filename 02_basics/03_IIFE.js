//global variable ke scope ki wajah se pollution se bachne ke liye and function immediately run krne ke liye

// (isme function)(yeh function call ke liye jaise likhte SubmitEvent())


//named IIFE  
(function chai (){
    console.log(`chai peelo`)
})();

//end pe ; lgana hai


//unnamed IIFE
( () => {
    console.log(`another function `)
}
) ();

//parameterised IIFE
( (name) => {
    console.log(`another function ${name}`)
}
) ("roushni");

//2 IIFE likhne ke liye pehle ke end pe ; yeh lgana nhi toh agla execute nhi hoga ******

  