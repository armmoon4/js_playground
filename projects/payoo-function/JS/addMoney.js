document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // const addMoney = document.getElementById('add-money-input').value;
    // const addMoneyNumber = parseFloat(addMoney);
    // const pinNumber = document.getElementById('add-money-pin').value;
    // console.log(addMoney, pinNumber);
    console.log("Add Money button clicked");
    // Here you can call the function to get the input field value      

    // const addMoney = getInputFieldValueById();
    // console.log("Money to add:", addMoney);

    const addMoney = getInputFieldValueById('add-money-input');
    const pinNumber = getInputFieldValueById('add-money-pin');

    if(pinNumber === 1234){
        const balance = getTextFIeldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        console.log("Incorrect PIN");
        alert("Incorrect PIN. Please try again.");
    }


})

