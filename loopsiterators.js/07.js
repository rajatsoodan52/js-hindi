
const myNumers=[1,2,3,4,5,6,7,8,9,10]

//  const newNums=myNumers.map(  (num) => num+10)
//  const newNums=myNumers.map(  (num) => { return num+10})//  scope opened to we have to mention return here for sure otherwise output will be undefined

//  console.log(newNums); // it automatically returns the value
// same thing here if we open scope then we have to return the value 

//  chaining

const newNums=myNumers.
            map((num) => num*10).map()
            .map((num) => num+1) // in chaining the value of one step goes to down step and gets updated only at the last
            .filter((num) =>num>=40)
 