// show the cashout from
document.getElementById('btn-show-cashout').addEventListener('click', function(){

    document.getElementById('cash-out-form').classList.remove('hidden');
    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
})

// show add money form and hide the cah out from

document.getElementById('btn-show-addmoney').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden'); 
    document.getElementById('cash-out-form').classList.add('hidden');
})