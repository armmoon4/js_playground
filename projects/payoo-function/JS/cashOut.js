document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = getInputFieldValueById('cash-out-input');
    const pinNumber = getInputFieldValueById('cash-out-pin');
    // console.log("inside click handler", cashOutAmount, pinNumber);

    if(pinNumber === 1234){
        const acBalance = getTextFIeldValueById('account-balance');
        // console.log("Current Balance:", acBalance);
        const newBalance = acBalance - cashOutAmount;


        if(isNaN(cashOutAmount) || cashOutAmount <= 0){
            alert("Please enter a valid amount to cash out.");  
            return;
        }   

        if(newBalance < 0){
            alert("Insufficient balance for this cash out amount.");                     
            return;
        }

        // console.log("New Balance after cash out:", newBalance);
        document.getElementById('account-balance').innerText = newBalance;

        // Here you can add code to update the transaction history
        const div = document.createElement('div');
        div.classList.add('bg-gray-300', 'p-4', 'rounded', 'mb-2');
        div.innerHTML=`
        <h4 class="text-1xl font-bold">Cash Out</h4>
        <p>${cashOutAmount} withdraw. New Balance ${newBalance}.</p> 
        `
        document.getElementById('transaction-container').appendChild(div);

    } else {
        alert("Incorrect PIN. Please try again.");
    }
});

