// date repersent single moment in any platfrom 
// date calculate in milisecond beacuse its easy to compare and store easliy

let myDate = new Date()
// console.log(myDate);//2025-01-24T11:02:09.170Z
// console.log(myDate.toString());//Fri Jan 24 2025 16:32:33 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Fri Jan 24 2025
// console.log(myDate.toISOString());//2025-01-24T11:03:36.755Z
// console.log(myDate.toJSON());//2025-01-24T11:04:04.511Z
// console.log(myDate.toLocaleDateString());// 24/1/2025
// console.log(myDate.toLocaleString());//24/1/2025, 4:35:24 pm
// console.log(typeof myDate);//object

// let myCreateDate = new Date(2023, 0, 21)// month will start with 0 in javascript
// console.log(myCreateDate);//2023-01-20T18:30:00.000Z
// console.log(myCreateDate.toDateString());//Sat Jan 21 2023

// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString());//23/1/2023, 5:03:00 am


let myCreateDate = new Date("01-14-2023")//mm-dd-yyyy formate we indians follows mostly this kind of formate
// console.log(myCreateDate.toLocaleString());//14/1/2023, 12:00:00 am


let myTimeStamp = Date.now()

// console.log(myTimeStamp);//1737716964972
// console.log(myCreateDate.getTime()); //1673634600000
// console.log(Date.now());// exact current date dega 
// console.log(Math.floor(Date.now()/1000)); 




// jb hame bs mothn or year janna ho bs
let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());//today date 
// console.log(newDate.getMonth());//0
// console.log(newDate.getDay());//0

//Q what is string intipulation
// ans when you write in `${}` this formate called string intipulation 


newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate);
















