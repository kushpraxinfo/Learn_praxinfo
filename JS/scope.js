// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//     }
//     console.log(website);
//     two()
// }
// one()


// +++++++ intersting +++++ 
console.log(addone(5));

function addone(num){
    return num + 1
}


// addTwo(5)
//in this scenario excution context problem occur when we first try to call varible function so hositing probelm occur in hoisting we can't call function first . first we are declaring
const addTwo = function (num){
    return num+ 2
}
