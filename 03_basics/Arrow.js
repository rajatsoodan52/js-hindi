 const user ={
    // username:"hit",
    // price:999,

    welcomeMessage:function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
 }

//  user.welcomeMessage()
//  user.username="sam"
//  user.welcomeMessage()

//  console.log(this) // note we are  in node and this refers to context object which is empty here
 // in browser this is a window object that ie global
// function chai(){
//     let username="raj"
//     console.log(this.username);//if we run this inside a method then we get a lot of methods in it
//     // as weare in node we get global 
//     // we can use this inside an object only inside functions it gives undefined in above example

// }

// const chai=function(){
//     let username="raj"
//     console.log(this.username)// this also give output as undefined
// }

// const chai=()=>{
//     let username="raj"
//     console.log(this.username) output undefined
// }

const chai=()=>{
    let username="raj"
    console.log(this)  // output :-{} empty object
}


// Arrow function syntax and explanation

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// const addTwo = (num1,num2)=> num1+num2
// const addTwo = (num1,num2)=> (num1+num2) // nin {} we heed to mention return type
// but in () we need not to mention the return type

const addTwo = (num1,num2)=> ({username:"raj"})//it cant be returned like this for returning it we need to mention the parenthesis and wrap i around}



console.log(addTwo(5,6));

const myArray=[2,5,3,7,8]
myArray.forEach(() => {} )
