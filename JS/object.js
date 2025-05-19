//singleton
//object literals
Object.create
const mysym = Symbol('key1')

const jsUser = {
    name : "Hitesh",
    "full name": "kuhs misj",
    [mysym]:"string",
    age : 18 ,
    location:"jaipur",
    email:"jsdklfjs@gmail.com",
    isLoggedIn:false,
    lastloginDays:["monday","saturday"]
    
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mysym]);
jsUser.email =  "kushr9935@gmail.com"
Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello js user , ${this.name}`);
    
}
// console.log(jsUser.greeting());

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname:{
            fistname:"hitehs",
            lastname:"choudary"

        }
    }
}
// console.log(regularUser.fullname?.userfullname.fistname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// using spread operator 
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        name: "kush"
    },
    {
        id:2,
        "jlksj" : "jklfj"
    }
]





