const name = "hitesh"
const repocount = 50

console.log(name + repocount + " value" );

console.log(`hello my name is ${name}`) 

const gameName = new String('jslfs')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherStirng = gameName.slice(-8,4)
console.log(anotherStirng);


const newStringOne = "         kush       "
console.log(newStringOne.trim());

const url = "https://hitesh.com"
console.log(url.replace('%20','-'))
