document.getElementById('show-add-money-form').addEventListener('click', function () {
    console.log("Show Add Money Form button clicked");
    showSectionbyID('add-money-form');
});

document.getElementById('show-cash-out-form').addEventListener('click', function(){
    showSectionbyID('cash-out-form');
})

document.getElementById('show-transaction-form').addEventListener('click', function(){
    showSectionbyID('transaction-form');
})

