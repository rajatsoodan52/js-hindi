
// {} => it is called as scope

var c=300;
let a=300
if(true){
let a=10
const b=20
//console.log("INNER: ",a);
}
//console.log(a);
//console.log(b);
//console.log(c);

//the scope is different in node in code and in windows inspect code

function one(){
    const username="Arak"

    function two(){
        const website="Youtube"
        console.log(username);// its like small one can have a icecream from the senior one but senior one cannot snatch an icecream from the junior

    }
    // console.log(website);
     //two()
}
//one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        console.log(username +website);
    }
    console.log(website);// first error
}
console.log(username);// second error

//}+++++++interesting+++++++
addone(5)
function addone(num){
    return num+1
}

// addtwo cant be accessed here because of variable holding
const addTwo=function(num){
    return num+2
}

//addTwo(5)