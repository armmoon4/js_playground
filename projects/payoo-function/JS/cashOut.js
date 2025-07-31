document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = getInputFieldValueById('cash-out-input');
    const pinNumber = getInputFieldValueById('cash-out-pin');
    console.log("inside click handler", cashOutAmount, pinNumber);

});