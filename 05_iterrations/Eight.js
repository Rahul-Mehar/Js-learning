// when we used shoping card tb yhe sare product k paise calculate kr k batata hai



// const array1 = [1, 2, 3, 4, 5]


// 0 + 1 + 2 + 3 + 4 + 5
// const initialValue = 0;
// const summWithInitial = array1.reduce((accumulator, currentValue) =>
// accumulator + currentValue,
// initialValue
// );

// console.log(summWithInitial);

// Expected output:10

const array1 = [1, 2, 3]

// const myTotal = array1.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currval:${currval}`);
    
//     return acc + currval
// },0)

// console.log(myTotal);

// const myTotal = array1.reduce((acc, currval)=>{
//     return acc + currval
// },0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js course",
        price:2999
    },
    {
        itemName: "Java course",
        price:999
    },
    {
        itemName: "Mobile dev course",
        price:3999
    },
    {
        itemName: "data science course",
        price:5999
    },
]


const pricetoPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(pricetoPay);

























