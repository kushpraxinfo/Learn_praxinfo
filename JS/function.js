
function sayMyName(){
    console.log("h");
    console.log("i");
    
}
sayMyName()


// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2)
// }
// addTwoNumbers(3,4)

function add(num1,num2){
    let result = num1 + num2;
    return result
    console.log("hitesh"); 
    
}
const result = add(3,5)
console.log("Result",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("kush"))

function calculateCartPrice(val1,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));

const user = {
    username:"dsfsdf",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username:"sam",
    price:933
})

const myNewArr = [200,3000,400,]
function returnSecondValue(getArr){
    return getArr[1]
}
console.log(returnSecondValue([200,400,500,1000]));
