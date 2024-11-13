// const userEmail="h@raj.ai"//we assume strig has true value
// if(userEmail){

//     // in this scenario if string is empty it is considered as the falsy value
//     console.log("Got user email");
    
// }
// else{
//     console.log("Dont have user email");
    
// }

const userEmail=[]
if(userEmail){// so in this scenario array should be their even if it is empty it will give true
    console.log("Got user email");// and if their is any other thing like string it will say falsy as it has dofferent data type
}
else{
    console.log("Dont have user email");
    
}

// falsy values

// false, 0,-0 [for interiew ques -0]=>  BigInt 0n,"",null,undefined,NaN

// truthy values
// "0"->truthy value,'false'," "//any value under string turhty value
// [] ,{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");
// }

const emptyObj={}

if(Object.keys(emptyObj).length===0){
  console.log("Object is empty");
  
} 

// false==0
// true
// false==''
// true
// 0==''
// true in console we typed it 

// Nullish Coalescing Operator (??): null undefined


let val1;

// val1=5 ?? 10 // output 5if data comes from firebase we get two values or null or undefined
// // in that scenarios we use special case
// val1=null ??10  //output 10 in case of null it checks the safety and assigns it

// val=undefined ?? 15

val1=null ?? 10?? 15 //output10

console.log(val1);

// Ternary operator

//condition ? true:false

const iceTeaPrice=100

iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")





