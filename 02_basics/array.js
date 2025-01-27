// Array

// const myArr = [0, 1, 2, 3, 4, 5]


// const myHeros = ["saktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
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


// console.log(myArr.includes(9));// false-- by using includes method here we check somthing thats why its given in true or false only



// console.log(myArr.indexOf(9));//-1 because its not exist in the array that why its shows -1 position

//  const newArr = myArr.join()// array ko string k form mai jod deta hai






// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ] this is array in a form



// console.log(newArr);//0,1,2,3,4,5 this is string in a form its mean its data type will be change



// slice or splice

// console.log("A", myArr);// A [ 0, 1, 2, 3, 4, 5 ]

// const myn1 = myArr.slice(1, 3)// by using this method we want some section of array and how section you want that much you pass as a perametar

// console.log(myn1);// [ 1, 2 ]

// console.log("B", myArr);// B [ 0, 1, 2, 3, 4, 5 ]


// const myn2 = myArr.splice(1, 3)// this method will changes in orignal array
// console.log(myn2);// [ 1, 2, 3 ]
// console.log("c", myArr);// c [ 0, 4, 5 ]





const marvel_heros = ["Thor",  "Ironman", "Spiderman"]
const dc = ["Superman",  "Flash", "Batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros); // .push method its gives array inside array  which is not god in stiuation
// console.log(marvel_heros[3][1]); // this is also not solving method right now

// const all_hero = marvel_heros.concat(dc)// all gives new array

// console.log(all_hero);

const my_hero = [...marvel_heros , ...dc]// this is spread operator its gives allways copy of array 
// console.log(my_hero);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat method used when you have array in array inside array so its clear that 


// console.log(real_another_array);  
 /*
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5 ]
*/


// console.log(Array.isArray("Rahul"));// false in this isarray method we asked it ki yhe array hai kya islye isne false diya 



// console.log(Array.from("Rahul"));// [ 'R', 'a', 'h', 'u', 'l' ] or yha from method mai hum isko bol rahe ki array mai change kr do tb waha esa kr k deta hai


// console.log(Array.from({name: "Rahul"})); //[] when you give it object in array that time its give empty array 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // when you want to change a multipe variable into array that time we use this method


















































