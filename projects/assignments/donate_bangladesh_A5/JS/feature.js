document.getElementById('show-donation-section').addEventListener('click', function () {
    showSectionbyID('donation-secton');
});

document.getElementById('show-history-section').addEventListener('click', function () {
    showSectionbyID('history-section');
})

// buttons to toggle between donation and history sections
const donationBtn = document.getElementById("show-donation-section");
const historyBtn = document.getElementById("show-history-section");

donationBtn.addEventListener("click", () => {
    donationBtn.classList.remove("sectionbtn2");
    donationBtn.classList.add("sectionbtn");

    historyBtn.classList.remove("sectionbtn");
    historyBtn.classList.add("sectionbtn2");

    document.getElementById("donation-section").style.display = "block";
    document.getElementById("history-section").style.display = "none";
});

historyBtn.addEventListener("click", () => {
    historyBtn.classList.remove("sectionbtn2");
    historyBtn.classList.add("sectionbtn");

    donationBtn.classList.remove("sectionbtn");
    donationBtn.classList.add("sectionbtn2");

    // Optional: Show/hide sections
    document.getElementById("donation-section").style.display = "none";
    document.getElementById("history-section").style.display = "block";
});