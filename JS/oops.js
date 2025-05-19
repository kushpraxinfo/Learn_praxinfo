const user = {
    username : "kush",
    loginCount : 7,
    signedIn:true,

    getUserDetails: function(){
        console.log(`Username : ${this.username}`);
        console.log(this);
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());


const promiseOne = new Promise()
const date = new Date()


function User(username, logincount , isLoggedIn){
     this.username = username;
     this.loginCount = logincount;
     this.isLoggedIn = isLoggedIn

     return this
}

const userOne = User("kush",12,true);
const userTwo = User("chaiaurcode")
