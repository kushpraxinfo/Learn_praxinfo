const User = {
    username : "hitesh",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
// User.welcomeMessage()
// User.username = "sam"
// User.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "kush"
//     console.log(this.username);
    
// }
// chai()
// this keyword onluy used in object and not used in function 

// const chai = function (){
//     let username = "kush"
//    console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "kush"
    console.log(this.username);
}
// chai()
// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4));

const addTwo = (num1,num2) =>  num1 + num2
console.log(addTwo(3,4));

// immediately invoked fuctiono expression (IIfE)
(function chai(){
    //name IIFe
    console.log(`Db connected`);
    
})();

(  (name) => {
    console.log(`Db connected two ${name}`); 
})('kush')