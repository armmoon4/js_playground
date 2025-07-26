document.getElementById('btn-out-money').addEventListener('click',function(event){
    event.preventDefault; 
    const cashoutmoney = document.getElementById('input-cashout-money').value;
    const cashoutPin = document.getElementById('cashout-pin').value;
    const cashoutmoneyNumber = parseFloat(cashoutmoney); 

    if(cashoutPin === '123'){
        console.log('money is cashing out'); 
        const avilabelBalance = document.getElementById('account-balance').innerText;
        const avilabelBalanceNumber = parseFloat(avilabelBalance); 
        const currentBalance = avilabelBalanceNumber - cashoutmoneyNumber; 

        // showing current balance in dom / UI
        document.getElementById('account-balance').innerText = currentBalance; 
    }else{
        alert('Wrong pin number plese try again'); 
    }
})