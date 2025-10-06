const product = [
    {id:1 , name: "iphone" , color: "red" , price: 70000},
    {id:2 , name: "samsung" , color: "black" , price: 50000},
    {id:3 , name: "oneplus" , color: "blue" , price: 40000},
    {id:4 , name: "nokia" , color: "white" , price: 30000},
    {id:5 , name: "mi" , color: "grey" , price: 20000},
]; 


const expensive = product.filter(p => p.price > 30000);
console.log(expensive);


// const singeProduct = product.find(p => p.name === "iphone");
// console.log(singeProduct);


// product.forEach(p => {
//     if(p.name === "iphone"){
//         p.price = p.price +100;
//     }

// const newProduct = product.map(p => {
//     if(p.name === "apple"){
//         p.price = p.price +100;
//     }
//     return p;
// } )

