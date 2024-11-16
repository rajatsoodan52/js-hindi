const coding=["js","ruby","python","cpp"]
// call back functondoesnot have a name,
//paramters

// coding.forEach(  function (val) {
//       console.log(val);
      
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=> {
//     console.log(item,index,arr);
    
// });

const myCoding = [
    {
        langaugeName:"javascript",
        languageFileName:"js"
    },
    {
        langaugeName:"java",
        languageFileName:"java"
    },
    {
        langaugeName:"python",
        languageFileName:"python"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langaugeName);
    
})