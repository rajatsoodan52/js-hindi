// reduce

//const array1=[1,2,3,4]

//0+1+2+3+4

// const initialValue=array1.reduce(
//     (accumulator,currentValue) => accumulator+currentValue,initialValue
// );
// here in first step accumulator value is zero and in next step accumulator+currentValue
// // becomes the value of the accumulator

// const myNums=[1,2,3]

// const myTotal =myNums.reduce(function(acc,currval){ 
//     console.log(`acc:${acc} and currval: ${currval}`);
    
//     return acc+currval
//  },0 // accumulator default value)

// const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"MAD course",
        price:7999
    },
    {
        itemName:"Data Science course",
        price:12999
    },
]

// const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price, 0)

const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);

