
// const user  = {
//     // username: "hitesh",
//     price: 999,
    
//     welcomeMessage: function(){
//         // console.log(`${this.username} , welcome to website`);
// console.log(this);

        
//     }
// }

// user.welcomeMessage()
// user.username = "Rahul"
// user.welcomeMessage()
// console.log(this);



// function chai (){
//     let username = "Rahul"
//     console.log(this.username);// not allowed 
    
// }

// chai()//undefined

// const chai = function(){
//     let username = "Rahul"
//     console.log(this.username);
    
// }

// chai()// undefined



// const chai = () => {
//     let username = "Rahul"
//     console.log(this.username);
    

// }


const chai = () => {
    let username = "Rahul"
    console.log(this);

}

// chai()// empty object







// const addTwo = (num1, num2) => {
// return num1 + num2
// }

// console.log(addTwo(3, 4));




// const addTwo = (num1, num2) => num1 + num2 // implecite return

// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username:"Rahul"})
    
    
    console.log(addTwo(3, 4));


    // const MyArray = [2, 5, 6, 7, 9, 1]
    // MyArray.forEach(()=>{})
    




























