// Immediately Invoked Function Expressions (IIFE)

// An IIFE is a JavaScript function that is executed immediately after it is defined
(function chai(){
    // named IIFE
    let name = 'dhruv';
    console.log(`DB CONNECTED`);

    function demo(){
        console.log('demo function');
    }
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('dhruv')

// demo() // we cannot access this function outside of the IIFE

var val = 2
const one = () => {
    val = 3423
    console.log(val); 
}
one()
console.log(val);   // value of val is changed by function one



var name = "Global";

(function() {
    var name = "Local";
    console.log(name); // Outputs: Local
})();

console.log(name); // Outputs: Global