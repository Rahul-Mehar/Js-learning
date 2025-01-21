// primitive (7 types)
//  String
//  Number
//  Boolean
//  null
//  undefined
//  Symbol
//  BigInt

//javascript are dynamically language

const score = 100// Number
const scoreValue = 100.3// bigint

const isLoggedIn = false// boolean
const outsideTemp = null//null
let usesrEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);//false


const bigNumber = 654645485442n

// console.log(bigNumber);
// console.log(typeof bigNumber);




//  Reference(Non primitive)
// Array
// Object
// Function

const hero = ["shaktiman", "naagraj", "doga"];


let myObj = {
    name: "Rahul",
    age: 30,
}


const myFunction = function(){
console.log("hello world");

}

// myFunction();






// ************* Memory ***********

//  Stack , Heap
// stack allways used in primitive type 
// heap allways used in non-primitive type


let myYoutubename = "Rahulmehardotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"


// console.log(anothername);// chaiaurcode
// console.log(myYoutubename);// Rahulmehardotcom
// both above one is primitive data type that by its in stack memory




// both below one is non-perimitive type that by its in heap memory
let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "rahulmehar@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);



