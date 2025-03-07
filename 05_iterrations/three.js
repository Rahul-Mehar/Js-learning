//  for of
// all loop are iterator 

// array specific loop
// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// //  yha pe val mai arr ko assign kiya hai  islye jb console log kr rahe tb val ki ans 1, 2, 3, 4, 5 araha hai

// for (const val of arr) {
//     console.log(val);
    
// }


const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
    
}



// Maps like array 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

//  Muje yaha map par iterator lagana hai

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
    
// }



// Agar koi  object hota to for of kese lagaye us pe



// const myObj = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }


// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
    
    
// }



// myObj is iteratable nahi hai kyu ki yhe sahi tarika nahi hai wo four.js file mai dhk
























