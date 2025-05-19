let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2022")

console.log(myCreatedDate.toLocaleDateString());

let timestamp = Date.now()
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));




