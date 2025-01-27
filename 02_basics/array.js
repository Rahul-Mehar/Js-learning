// Array

const myArr = [0, 1, 2, 3, 4, 5]


const myHeros = ["saktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[3]);

// Shallow copy :
//a shallow copy of an object whose share the same reference (it means jo bhi mai change karunga wo original mai bhi change hoga)

//Deep copy :
// a deeep copy of an object is a copy whose properties do not share the same referance (means original  mai change nahi hoga)




//array methods

// myArr.push(6) // last mai value add kr dega 
// myArr.push(7)
// myArr.pop()// last ki value delete kr dega
// myArr.unshift(1)// starting mai value add krta hai
// myArr.shift()// starting value ko remove krta hai hamesa esa hi use krtey hai without any perametar


// console.log(myArr.includes(9));// false 


// console.log(myArr.indexOf(9));//-1 because its not exist in the array that why its shows -1 position

//  const newArr = myArr.join()// array ko string k form mai jod deta hai






// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ] this is array in a form



// console.log(newArr);//0,1,2,3,4,5 this is string in a form its mean its data type will be change



// slice or splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);

console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("c", myArr);












































