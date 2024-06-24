// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

// ()() Sometimes problems are caused by global scope pollution, which can be resolved by using an IIFE.
((name)=>{
    
    console.log(`DB CONNECTED TwO ${name}`);
})('Mrinmoy')
// chai()