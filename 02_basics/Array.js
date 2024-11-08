  //array

  const myArr=[0,1,2,3,4,5]
   
//   console.log[myArr[1]] 
  //Array Methods

//   myArr.push(6)
//   myArr.push(8)
//   myArr.pop()//removes last value from the array

  //myArr.unshift(9)// adds the element to the start of the array issue is that every other
  //every other element has to be shifted here which can cause issue if
  // the array size is very big 
//myArr.shift() removes first element from the array
//   console.log(myArr.includes(9))  //Boolean
//   console.log(myArr.indexOf(9))//-1 doesnot exists

// const newArr=myArr.join()

// console.log(myArr)
// console.log(typeof newArr) String

// slice splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)

const myn2=myArr.splice(1,3)
console.log("B " ,myArr)
console.log(myn2)