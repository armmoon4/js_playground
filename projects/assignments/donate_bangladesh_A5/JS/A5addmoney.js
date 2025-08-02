console.log("addmoney.js loaded");

// Utility Functions
function getInputFieldValueById(id) {
    return parseFloat(document.getElementById(id).value);
}

function getTextFIeldValueById(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function updateTextFieldById(id, value) {
    document.getElementById(id).innerText = value;
}

// Creates a donation card and appends it to the history section
function addToDonationHistory(amount, purpose, location) {
    const date = new Date().toString();
    const container = document.getElementById("history-container");

    const card = document.createElement("div");
    card.className = "p-6 rounded-xl border border-gray-200 bg-white shadow-sm";

    const title = document.createElement("p");
    title.className = "font-bold text-lg text-gray-800";
    title.innerText = `${amount} Taka is Donated for ${purpose} at ${location}`;

    const dateLine = document.createElement("p");
    dateLine.className = "text-sm text-gray-600 mt-2";
    dateLine.innerText = `Date : ${date}`;

    card.appendChild(title);
    card.appendChild(dateLine);
    container.appendChild(card);
}

function showSuccessModal() {
    const modal = document.getElementById("success-modal");
    modal.classList.remove("hidden");
    modal.classList.add("flex"); // show + center

    // Automatically hide after 5 seconds
    setTimeout(() => {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
    }, 5000);
}

document.getElementById("close-modal-btn").addEventListener("click", function () {
    const modal = document.getElementById("success-modal");
    modal.classList.remove("flex");
    modal.classList.add("hidden");
});



// Reusable function to handle donation logic
function handleDonation(buttonId, inputId, amountId, purpose, location) {
    document.getElementById(buttonId).addEventListener('click', function (event) {
        event.preventDefault();

        const addAmount = getInputFieldValueById(inputId);
        const currentAmount = getTextFIeldValueById(amountId);
        const availableAmount = getTextFIeldValueById('avilable-amount');

        if (isNaN(addAmount) || addAmount <= 0 || availableAmount < addAmount) {
            alert("Please enter a valid amount or check your available balance.");
            return;
        }

        const newAmount = currentAmount + addAmount;
        const newAvailable = availableAmount - addAmount;

        updateTextFieldById(amountId, newAmount);
        updateTextFieldById('avilable-amount', newAvailable);

        addToDonationHistory(addAmount, purpose, location);
        showSuccessModal();
    });
}

// Attach handlers
handleDonation('add-money-btn-flood', 'add-money-flood', 'amount-flood', 'Flood Relief', 'Noakhali');
handleDonation('add-money-btn-feni', 'add-money-feni', 'amount-feni', 'famine-2024', 'Feni');
handleDonation('add-money-btn-quota', 'add-money-quota', 'amount-quota', 'Aid for Injured in the Quota Movement', 'Bangladesh');
