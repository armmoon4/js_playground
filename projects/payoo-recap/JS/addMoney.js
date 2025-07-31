document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('add-money-input').value;
    const pinNumber = document.getElementById('add-money-pin').value; 
    console.log(addMoney , pinNumber);
})