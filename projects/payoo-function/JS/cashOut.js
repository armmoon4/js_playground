document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = getInputFieldValueById('cash-out-input');
    const pinNumber = getInputFieldValueById('cash-out-pin');
    // console.log("inside click handler", cashOutAmount, pinNumber);

    if(pinNumber === 1234){
        const acBalance = getTextFIeldValueById('account-balance');
        // console.log("Current Balance:", acBalance);
        const newBalance = acBalance - cashOutAmount;
        // console.log("New Balance after cash out:", newBalance);
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert("Incorrect PIN. Please try again.");
    }

});

