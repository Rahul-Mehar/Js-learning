


// {} block of scope its not a object when its come with some function and some program like (if or else and manymore) that time we called it scope

// var c = 300 we don't use var beacuse its global scope 

let a = 300;

if(true){
    let a = 10
    const b = 20
    console.log("Inner: ", a);
    
    
}


console.log(a);
// console.log(b);
// console.log(c);
