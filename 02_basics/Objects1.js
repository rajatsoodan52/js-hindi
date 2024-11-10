// const tinder=new Object();// it is a singletonv object
//const tinderUser={}// non singleton objectt

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"hitesh",
            lastname:"sharma"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname);//this question mark works as acheck like if that value or object is not present
 const obj1={1:"a",2:"b"}
 const obj2={3:"a",4:"b"}
 const obj4={5:"a",6:"b"}

 //const obj3={obj1,obj2}
//  const obj3=Object.assign({},obj1,obj2,obj4) //{} it is a optional parameter stating that the values will combine and a result will come
  //it ensures that all object values will go in to the target. Here if it is removed then all the
  // values wll go into the obj1
  const obj3={...obj1, ...obj2}
 //console.log(obj3);
 const users=[
    {
    id:1,
    email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
            id:1,
            email:"h@gmail.com"
    }
]
 users[1].email //user1 is a object as first value is object here
 //console.log(tinderUser)

// console.log(Object.keys(tinderUser));//return type is an array which plays a crucial role in backend data fetching and 
 // perfroming operations as we can easily get keys ore alues in an array an easily run opeartions on it using a loop
 //console.log(Object.entries(tinderUser))// makes every key value pair an object ie the array (the typre of arrays is an object in js)
 //console.log(typeof(Object.entries(tinderUser)))
//  console.log(tinderUser.hasOwnProperty(`isLoggedIn`));
//  console.log(tinderUser.hasOwnProperty(`isLogged`));
  

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hiehfd"
}
//course.courseInstructor
const{courseInstructor:instructor}=course
console.log(courseInstructor)
//console.log(courseInstructor)
// like mere pass ek object hai usko baar baar use krne mehkeys fetch krne seh acha
//define like const{} give the variable name you want infront of that variable after
// semicolon and then use that one anywhere you want
//line 1 const navbar=({company}) =>{

// line 2 } these 3 lines react
// line 3 navbar(company="hitesh")
// this process is called destructuring of objects
//API
// {
// "name": "ome",
// "coursename": "jsi in hndi",
// "price": "free"
// } 
[
    {},
    {},
    {}
]