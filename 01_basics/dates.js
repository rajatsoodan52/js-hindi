let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())


// console.log(typeof( myDate)) // object
// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3)
// let myCreatedDate=new Date("2023-00-14")
// console.log(myCreatedDate.toDateString())
let myCreatedDate=new Date("01-14-2023")
let myTimeStamp=Date.now() 
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())

// `${newDate.getDay()}and the time is`
newDate.toLocaleString('default',{
  weekday:"long",
    
})