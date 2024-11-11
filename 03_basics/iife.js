// Immediately Invoked Function Expression (IIFE)

(function chai(){

    // named iife
    console.log(`DB CONNECTED`);
    
})()

// ()()// first parenthesis is function definition and other one is the execution call of that function

// to avoid the issue of pollution caused by the elements of gloabl scope
// we use iife

( (name)=>  {
    // unnamed iife
    // in order to execute two iifes we can just add a semicolon to the end of the first iife
    console.log(`DB CONNECTED TWO ${name}`);
    
} ) ('raman'); // in this context javascrpit works but iife is not sure about where to end the context
// for this we use semicole ie; to make it end
// In order to pass a variable we can pass the specific value of that variable in the second braces() which
// highlights the execution phase of the iife

