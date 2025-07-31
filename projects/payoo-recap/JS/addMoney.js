document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = document.getElementById('add-money-input').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('add-money-pin').value;
    console.log(addMoney, pinNumber);

    // wrong way to verify pin;;;

    if (pinNumber === '123') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        console.log(balance);
        const newBalance = balanceNumber + addMoneyNumber ; 
        document.getElementById('account-balance').innerText = newBalance;
    } else {
        alert('Wrong pin Number , Please try again!')
    }



})

