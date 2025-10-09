

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
