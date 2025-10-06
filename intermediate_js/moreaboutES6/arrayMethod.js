const product = [
    {id:1 , name: "iphone" , color: "red" , price: 70000},
    {id:2 , name: "samsung" , color: "black" , price: 50000},
    {id:3 , name: "oneplus" , color: "blue" , price: 40000},
    {id:4 , name: "nokia" , color: "white" , price: 30000},
    {id:5 , name: "mi" , color: "grey" , price: 20000},
]


const newProducts = product.filter(p=> p.id !== 3);
console.log(newProducts);

// forEach
product.forEach((item) => {
    console.log(item.name);
})

// not return anything
product.forEach(product =>{
    if(product.price > 30000){
        console.log(product.name);
    }
})


// filter
const expensiveProduct = product.filter((item) => {
    return item.price > 30000;
})

// return new array


// find
const findProduct = product.find((item) => {
    return item.id === 3;
})
console.log(findProduct);
// return single object 


// map
const newProduct = product.map((item) => {
    return item.price + 10000;
})
console.log(newProduct);    

