const glass = {
    name: 'glass',
    color: 'transparent',
    price: 100,
    isClean: true
};
console.log(glass);

const keys = Object.keys(glass);
console.log(keys);
// ['name', 'color', 'price', 'isClean']

const values = Object.values(glass);
console.log(values);
// ['glass', 'transparent', 100, true]

const entries = Object.entries(glass);
console.log(entries);
// [['name', 'glass'], ['color', 'transparent'], ['price', 100], ['isClean', true]]

delete glass.isClean;
console.log(glass);
// { name: 'glass', color: 'transparent', price: 100 }


const {isClean, ...glassWithoutIsClean} = glass;
console.log(glassWithoutIsClean);   
// { name: 'glass', color: 'transparent', price: 100 }

// freeze the object
Object.freeze(glass);
glass.price = 200; // This will not change the price
glass.source = 'unknown'; // This will not add a new property
delete glass.color; // This will not delete the color property
console.log(glass); // { name: 'glass', color: 'transparent', price: 100 }
console.log(Object.isFrozen(glass)); // true    


// seal the object
const sealedGlass = Object.seal(glass);
console.log(sealedGlass); // { name: 'glass', color: 'transparent', price: 100 }
sealedGlass.price = 200; // This will change the price
console.log(sealedGlass); // { name: 'glass', color: 'transparent', price: 200 }
sealedGlass.source = 'unknown'; // This will not add a new property 
console.log(sealedGlass); // { name: 'glass', color: 'transparent', price: 200 }
delete sealedGlass.color; // This will not delete the color property
console.log(sealedGlass); // { name: 'glass', color: 'transparent', price: 200 }
console.log(Object.isSealed(sealedGlass)); // true  




