// for of 

// ["","",""]

// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) { //objects are like on which we have to apply the loop
    console.log(num);
    }

const greetings="hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('IN',"India")
map.set('Fr',"France")
// console.log(map)

// for(const key of map){
//     console.log(key);  outputs key as well as the values  as  a whole
    
// }

// for (const [key,value] of map) {// here this [key,value] this is called as the destructuring of the array
//     // and now we can use them individually
//     console.log(key,':-', value);
// }

// const myObject={
//     game1:'NFS',
//     game2:'Spiderman' // object is not iteratable like this
// }

// for (const [key,value] of object) {
//     console.log(key,':-',value);
    
// } error:- Objects are not iteratable
// Important note for of loop works only on maps and not on objects