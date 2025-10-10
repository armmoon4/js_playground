// hide all section first 
document.getElementById("header").style.display = "none";
document.getElementById("learn_section").style.display = "none";
document.getElementById("faq_section").style.display = "none";

// login and banner related
function handleSubmit(event) {
    event.preventDefault();
    const form = document.forms["form"];
    const name = form.name.value;
    const password = form.password.value;
    // name & password check :
    if (!name || !isNaN(name)) {
        alert("Please enter a valid name");
        return;
    }
    if (password === "123456") {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in successfully",
            showConfirmButton: false,
            timer: 1500
        });
        console.log("sucess");
        document.getElementById("header").style.display = "block";
        document.getElementById("learn_section").style.display = "block";
        document.getElementById("faq_section").style.display = "block";
        document.getElementById("banner_section").style.display = "none";
    }
    else {
        alert("Enter the correct code");
    }
    form.reset();
};

// logout function 
function logOut() {
    document.getElementById("banner_section").style.display = "block";
    document.getElementById("header").style.display = "none";
    document.getElementById("learn_section").style.display = "none";
    document.getElementById("faq_section").style.display = "none";
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Logged out successfully",
        showConfirmButton: false,
        timer: 1500
    });
}

// scrolling in faq seiction
function scrollToSection(id) {
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: "smooth" });
};



// lessons button APi fetch 
const loadLessonsButton = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => displayLessonsButton(data.data))
};


// lessons button displaying function 
const displayLessonsButton = (lessons) => {
    const lessonsButtonsContainer = document.getElementById("lessons_buttons_container");
    lessons.forEach(lesson => {
        const lessonDiv = document.createElement("div");
        lessonDiv.innerHTML = `
        <button
        class="px-3 py-1.5 text-sm border-2 border-[#422ad5] text-[#422ad5] rounded-md hover:bg-[#422ad5] hover:text-white hover:border-2 hover:border-[#422ad5] font-semibold flex items-center gap-1 cursor-pointer">
        <i class="fa-solid fa-book-open"></i>
        Lesson - ${lesson.level_no}
        </button>
        `;
        lessonsButtonsContainer.appendChild(lessonDiv);
    });
};

loadLessonsButton();

// fqa questions fun

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {
        // close other items
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".icon").textContent = "+";
            }
        });

        // toggle current item
        item.classList.toggle("active");

        const icon = item.querySelector(".icon");
        icon.textContent = item.classList.contains("active") ? "–" : "+";
    });
});
