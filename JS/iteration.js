//iteration loop
//for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
    
//    for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j);
    
//    }
    
// }

// let myArray = ['flash', 'batman' , 'superman'];
// console.log('Length of array is: ',myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log('Detected 5');
//         break
//     }
//     console.log(`value of i is ${index}`);
    
    
// }
// for (let index = 1; index <= 20; index++) {
//     if(index == 5 ){
//         // console.log('Detected 5');
//         continue
//     }
//     console.log(`value of i is ${index}`);
     
// }
//only 1 time skip if used continue 

// let index =0
// while(index <=10){
//     console.log(`Value of index is ${index}`);
//     index = index + 2;
// }
// let myArray1 = ['flash', 'batmna','super'];
// let arr = 0
// while(arr < myArray1.length){
//     console.log(`value is ${myArray1[arr]}`);
//     arr = arr + 1
// }

//for of loop
const arr1 = [1,2,3,4];
for(const i of arr1){
    console.log(i);
    
}

const greeting = 'Hello world';

for(const greet of greeting){
    
    console.log(`Each char is ${greet}`);
    
}
//maps
const map = new Map()
map.set('IN',"India");
map.set('USA','United states of America');
map.set('Fr','France')

console.log(map);

for (const [key,value] of map){
    console.log(key, ':' ,value);
    
}

const myObj = {
    'game1':'NFS',
    'game2':'spiderman'
}
// for(const [key,value] of myObj){
    
//     console.log(key, ':' ,value);
// }

// object mate for in loop 
// for(const key in myObj){
//     console.log(myObj[key]);
    
// }
for (const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ['js','rb','py','txt']

// for (const key in programming){
//     console.log(programming[key]);
// }

// programming.forEach(function (item){
//     console.log(item);
    
// })
// programming.forEach( () => {
//     console.log(item);
    
// })

// function preentme(item){
//     console.log(item);
    
// }
// programming.forEach(printme)

programming.forEach(item,index,arr1)