// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
console.log(Object.preventExtensions(car))

// Returns true if properties can be added to an object
console.log(Object.isExtensible(car))

// Prevents adding and deleting object properties
console.log(Object.seal(car))

// Returns true if object is sealed
console.log(Object.isSealed(car))

// Prevents any changes to an object
console.log(Object.freeze(car))

// Returns true if object is frozen
Object.isFrozen(car)