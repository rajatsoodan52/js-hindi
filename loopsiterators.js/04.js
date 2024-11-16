const myObject={
  js:'javascript',
  cpp:'c++',
  rb:'ruby',
  swift:"swift by apple"
}

for (const key in myObject) {
   // console.log(`${key}  shortcut is for ${myObject[key]}`);
}

const programming=["js","rb","py","java","cpp"]

for (const key in programming) {
  //  console.log(key); //output 123456 gives keys of the array ie the index of array
    console.log(programming[key]);
    
}
// in array we use for of loop as it is iteratable and in maps we use for in loop 
// for in doesnot works on map as it is not iteratable
