console.log("addmoney.js loaded");

// for flood donation noakhali
document.getElementById('add-money-btn-flood').addEventListener('click', function (event) {
    event.preventDefault();
    const addAmountFlood = getInputFieldValueById('add-money-flood');
    const currentAmountFlood = getTextFIeldValueById('amount-flood');
    const avilableAmount = getTextFIeldValueById('avilable-amount');


    // Validate the input amount
    if (isNaN(addAmountFlood) || avilableAmount <= addAmountFlood || addAmountFlood <= 0) {
        alert("Please enter a valid amount to add. Or you don't have enough balance.");
        return;
    } else {
        const newAmountFlood = currentAmountFlood + addAmountFlood;
        document.getElementById('amount-flood').innerText = newAmountFlood;
        const newAvilableAmount = avilableAmount - addAmountFlood;
        document.getElementById('avilable-amount').innerText = newAvilableAmount;
    }
});

// for feni donation
document.getElementById('add-money-btn-feni').addEventListener('click', function( event) {
    event.preventDefault();
    const addAmountFeni = getInputFieldValueById('add-money-feni');
    const currentAmountFeni = getTextFIeldValueById('amount-feni');
    const avilableAmount = getTextFIeldValueById('avilable-amount');

    // Validate the input amount
    if (isNaN(addAmountFeni) || avilableAmount <= addAmountFeni || addAmountFeni <= 0) {
        alert("Please enter a valid amount to add. Or you don't have enough balance.");
        return;
    } else {
        const newAmountFeni = currentAmountFeni + addAmountFeni;
        document.getElementById('amount-feni').innerText = newAmountFeni;
        const newAvilableAmount = avilableAmount - addAmountFeni;
        document.getElementById('avilable-amount').innerText = newAvilableAmount;
    }
});


// for quota donation
document.getElementById('add-money-btn-quota').addEventListener('click', function(event) {
    event.preventDefault();
    const addAmountQuota = getInputFieldValueById('add-money-quota');
    const currentAmountQuota = getTextFIeldValueById('amount-quota');
    const avilableAmount = getTextFIeldValueById('avilable-amount');

    // Validate the input amount
    if (isNaN(addAmountQuota) || avilableAmount <= addAmountQuota || addAmountQuota <= 0) {
        alert("Please enter a valid amount to add. Or you don't have enough balance.");
        return;
    } else {
        const newAmountQuota = currentAmountQuota + addAmountQuota;
        document.getElementById('amount-quota').innerText = newAmountQuota;
        const newAvilableAmount = avilableAmount - addAmountQuota;
        document.getElementById('avilable-amount').innerText = newAvilableAmount;
    }
});