// const codig = ['js', 'py' , "ks" , 'tg']

// const values = codig.forEach((item) =>{
//     // console.log(item);
//     return item
    
// })
// console.log(values);

// const myNum = [1,2,3,4,5,6,7,8,9]

// const newNums =  myNum.filter( (num) => {
//      return num > 4
// })

// const newNums = []

// myNum.forEach ((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);
// when we used {} scope then all time used return keyword otherwise this is give us undefined 

const myNumbers = [1,2,3,4,5,6,7,8,9]

const newNums = myNumbers.map( (num) => num + 10)

const newNUms = myNumbers
            .map((num) => num * 10)
            .map( (num) => num + 1)
            .filter( (num) => num >=40 )
console.log(newNums);



