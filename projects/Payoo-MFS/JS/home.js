// add money to the account

// s-1 add event handler
// prevent page reload after from submit

// s-2 get money to be added to the account balance
// get the pin number

// s-3 verify the pin number 




// step-1 add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form from submit
    event.preventDefault();
    

    // step 2 get money to be addded to the ac
    const addMoneyinput = document.getElementById('input-add-money').value; 
    // get pin number
    const pinInput = document.getElementById('input-pin').value; 
    console.log(addMoneyinput , pinInput); 

    // step 3 verify pin number
    // wrong way to validate pin number
    if(pinInput === '112344')
});