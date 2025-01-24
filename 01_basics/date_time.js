// date repersent single moment in any platfrom 
// date calculate in milisecond beacuse its easy to compare and store easliy

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23)// month will start with 0 in javascript
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString());


let myCreateDate = new Date("01-14-2023")//mm-dd-yyyy formate we indians follows mostly this kind of formate
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Date.now());// exact current date dega 
console.log(Date.now()/1000);// convert into seconds










