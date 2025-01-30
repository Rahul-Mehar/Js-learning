


// {} block of scope its not a object when its come with some function and some program like (if or else and manymore) that time we called it scope

// var c = 300 we don't use var beacuse its global scope 

let a = 300;

// if(true){
//     let a = 10
//     const b = 20
//     console.log("Inner: ", a);

// }


// console.log(a);
// console.log(b);
// console.log(c);


// nested scope

function one(){
    const username = "rahul"
    function two(){
        const website = "youtube"
        // console.log(username); // rahul
    }
    // console.log(website);// error because we access it out of the scope

    two()
}

one() // no result beacuse now we are not calling two function thats why


if (true){
    const username = "Rahul"
 if(username === "Rahul"){
    const website = "youtube"
    // console.log(username + website); // Rahul youtube
    
 }
// console.log(website); // error website is not defined


}

// console.log(username);// error username is not defined



//****interesting****

function addone(num){
    return num + 1
}
// addone(5) 



const addTwo =  function(num){
    return num + 2
}
addTwo(5)



























