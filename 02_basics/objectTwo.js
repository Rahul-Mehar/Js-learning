
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rahul"
tinderUser.isloggedIn = "false"

//  console.log(tinderUser);


 const regularUser = {
    email: "rahul@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Rahul",
            lastname: "Mehar"
        }
    }
 }

//  console.log(regularUser);
/*{
  email: 'rahul@gmail.com',
  fullname: { userfullname: { firstname: 'Rahul', lastname: 'Mehar' } }
}*/


//  console.log(regularUser.fullname.userfullname.firstname);//Rahul here we acess object inside object so that is the way to access object inside object




// console.log(Object.keys(regularUser.fullname.userfullname));// [ 'firstname', 'lastname' ] by using this method we check here property inside the object



const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = {...obj1, ...obj2, ...obj4} // here we merge the all object in a single object 
// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// console.log(obj3);


const Users = [
     {
        id: 1,
        email: "rahul@gmail.com"
     },
     {
        id: 2,
        email: "sumit@gmail.com"
     },
     {
        id: 3,
        email: "chataniya@gmail.com"
     },
     {
        id: 4,
        email: "mohit@gmail.com"
     }
    ]

   //  console.log(Users[0].email);// here we acess 1 object in the object 


   // console.log(tinderUser);


   // console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isloggedin' ] object data type is array
   
   

   // console.log(Object.values(tinderUser));//[ '123abc', 'Rahul', 'false' ] this is also in array type



   //console.log(Object.entries(tinderUser));// [ [ 'id', '123abc' ], [ 'name', 'Rahul' ], [ 'isloggedin', 'false' ] ] when we use entries method than its shows every single key and value in the form of array 
   

   // console.log(tinderUser.hasOwnProperty('isloggedIn'))// true by using this method we check the poperty in the object that why its shows in boolean type 

   // destructuring in object

   const course = {
      courseName: "Js in hindi",
      price: "999",
      courseInstructor: "hitesh"
   }

   // console.log(course.courseInstructor);//hitesh 

   // const {courseInstructor : instructor} = course
   
   // console.log(instructor);// hitesh this is destructuring of object 
   
   // {
   //    "name": "hitesh",
   //    "coursename": "js in hindi",
   //    "price": "Free"
   // }
   // this is in json formate


   // [
   //    {},
   //    {},
   //    {},
   //    {},
   //    {}
   // ]

   // all api now is in json formate
   

   
   












 