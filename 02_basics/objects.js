// object declare by two ways
//1 literal
//2 constructor

// singleton you made by any constructor 
//object.create // this is made by constructor




//object   Literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Rahul",
    "full name": "Rahul Mehar",
    [mySym]: "key1",
    age: 28,
    location: "pune",
    email: "rahulmehar22@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}

// console.log(Jsuser.location);
// console.log(Jsuser["email"]);
// console.log(Jsuser.email);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser.mySym);


// over write and change the value also

Jsuser.email = "Rahulmehar897@gmail.com";
// Object.freeze(Jsuser)// by this method now no one change there orignal value

// Jsuser.name = "Mohit";

// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello js user");
    
}

Jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}



console.log(Jsuser.greetingTwo());




// myArray = ["R", "A"]
// myArray[0];

