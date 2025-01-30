// console.log("R");
// console.log("a");
// console.log("h");
// console.log("u");
// console.log("l");


function sayMyName(){

}

// sayMyName();


 function addTwoNumbers(number1, number2){
// console.log(number1 + number2);

}

// addTwoNumbers(21, 22)//43 this is beacuse with a arragument
//  const result = addTwoNumbers(21, 22)
//  console.log("Result: ", result);//Result:  undefined
 
// addTwoNumbers()//Nan beacause its a without arrgument 
// and above one is perametar


 function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result

//     return number1 + number2
 }

// const result = addTwoNumbers(3,4)

// console.log("Result: ",result);



 function loginUserMessage(username){
//     return `${username} just logged in`
 }

// console.log(loginUserMessage("Rahul"))



function loginUserMessage(username = "sam"){
    // if(username === undefined)
    if(!username){
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Rahul"))// If someone not pass the value(arrgumnet) that time it shows undefined than we check by if or else condition

// meaning of if agar yhe condition sahi hai to yhe kare warna (else) yhe karo
// if alwayes run when your condition is a true other wise if is not run
// in if condition ("") empty string always false value and undefined also false value
// when we give default value than compiler will never check the if condition



function CalculateCartPrice(...num1){
    return num1
}

// console.log(CalculateCartPrice(200,400,500));

const user = {
    username: "Rahul",
    price: 199
}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 200
})

const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue([200, 300, 400, 600]));


