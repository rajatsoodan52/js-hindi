function sayMyName()
{
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName // its just a reference
//sayMyName()

// function addTwoNumber(number1, number2){// here number1 and number2 is called parameters
//     console.log(number1+number2)//herec onsole just prints it has nothing to do with the return type
// }

function addTwoNumber(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
}
const result= addTwoNumber(7,5) //here 7 and null are arguments
//console.log("Result: ",result); // output undefined most common mistake by begineers
 
function loginUserMessage(username="sam"){//it means default value of username is sam
    if(username === undefined){
        console.log("Please enter  a username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage()) //output undefined just logged in
 


// eg of a shopping cart in a shopping website

// function calculateCartPrice(...num1){ // here ... is only called rest and spread operator depending upon its usecases it is checked and used
//     return num1
// }
// console.log(calculateCartPrice(200,400,500))//returns an array[100,200,400,500]

function calculateCartPrice(val1,val2,...num1){ // here ... is only called rest and spread operator depending upon its usecases it is checked and used
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))//here in this case val1 takes 200 val2 takes 400 and .. takes rest all in it. It is a interview question

const user={
    username:"rajat",
    price:199//if price is made prices then it says undefined
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1]
} 
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200,400,500,100]));

