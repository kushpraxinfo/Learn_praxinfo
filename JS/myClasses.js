// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai" , "kushr9935@gmail.com" ,"123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene
function User(username,email,password){
    this.username = username;
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
const tea = new User("tea","tea@gmail.com","123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

