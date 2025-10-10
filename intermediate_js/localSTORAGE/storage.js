const age = 10 ;

localStorage.setItem("myage" , age);

handleAddStorage=()=> {
    // const name = "miako tech"; 
    // localStorage.setItem("miaki" , name); 

    const person = {
        name: "hero alom",
        age: 10,
        friends:[rahim]
    }
    const converttoStirng = JSON.stringify(person);

    // const backToobject = JSON.parse(converttoStirng); 

    localStorage.setItem("alom", converttoStirng);
} 

const data = localStorage.getItem("alom"); 
const converted = JSON.parse(data); 
console.log(converted);