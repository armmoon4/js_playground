function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFIeldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionbyID(id){
    // Hide all sections first
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-secton').classList.add('hidden');

    // Show the section with the specified ID
    document.getElementById(id).classList.remove('hidden');
}