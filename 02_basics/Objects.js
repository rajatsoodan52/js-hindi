 //singleton a single object of its type
 //literals cant be singleton
 //via constructor can be singleton

 //object literal
// object.create// this is ingleton object made via constructor

const mysym=Symbol("key1")

 const jsUser={
    name:"raj",
    "full name":"Rajat soodan",
    [mysym]:"key1",
    age:"13",
    location:"jaipur",
    email:"hiteh@google.com",
    idLoggedIn: false,
    lastLoginDays:["Monday","saturday"]
 }
 console.log(jsUser.email)
 console.log(jsUser["email"])
 console.log(jsUser["full name"]) //its the only way to access this one 
 console.log(typeof(jsUser.mysym))//String
 console.log(jsUser[mysym])

 jsUser.email="hitesh@chatgpt.com"
 Object.freeze(jsUser) //changes cant be made now its final
 jsUser.email="hitesh@mkj.com"
 console.log(jsUser)

