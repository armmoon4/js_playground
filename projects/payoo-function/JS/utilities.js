// common shared fucntion here
console.log("utilities.js loaded");
// This function retrieves the value from the input field with the specified ID
// and returns it.      

// function getInputFieldValueById(){
//     console.log("getInputFieldValueById function called");
//     const addMoney = document.getElementById('add-money-input').value;
//     return addMoney;
// }

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
// This function retrieves the value from the input field with the specified ID

function getTextFIeldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
