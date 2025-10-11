// // hide all section first 
// document.getElementById("header").style.display = "none";
// document.getElementById("learn_section").style.display = "none";
// document.getElementById("faq_section").style.display = "none";

// // login and banner related
// function handleSubmit(event) {
//     event.preventDefault();
//     const form = document.forms["form"];
//     const name = form.name.value;
//     const password = form.password.value;
//     // name & password check :
//     if (!name || !isNaN(name)) {
//         alert("Please enter a valid name");
//         return;
//     }
//     if (password === "123456") {
//         Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "Logged in successfully",
//             showConfirmButton: false,
//             timer: 1500
//         });
//         console.log("sucess");
//         document.getElementById("header").style.display = "block";
//         document.getElementById("learn_section").style.display = "block";
//         document.getElementById("faq_section").style.display = "block";
//         document.getElementById("banner_section").style.display = "none";
//     }
//     else {
//         alert("Enter the correct code");
//     }
//     form.reset();
// };

// // logout function 
// function logOut() {
//     document.getElementById("banner_section").style.display = "block";
//     document.getElementById("header").style.display = "none";
//     document.getElementById("learn_section").style.display = "none";
//     document.getElementById("faq_section").style.display = "none";
//     Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Logged out successfully",
//         showConfirmButton: false,
//         timer: 1500
//     });
// }

// // scrolling in faq seiction
// function scrollToSection(id) {
//     const target = document.getElementById(id);
//     target.scrollIntoView({ behavior: "smooth" });
// };



// lessons button APi fetch 
const loadLessonsButton = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => displayLessonsButton(data.data))
};


// load categories lesson

const loadcategoriesLesson =(id)=> {
    const url = `https://openapi.programming-hero.com/api/level/${id}`; 
    console.log(url);

    fetch(url)
    .then((res)=> res.json())
    .then((data) => displayWord(data.data))
}         
// upper lines due lets do it 

// Object { id: 5, level: 1, word: "Eager", meaning: "আগ্রহী", pronunciation: "ইগার" }
// ​
// id: 5
// ​
// level: 1
// ​
// meaning: "আগ্রহী"
// ​
// pronunciation: "ইগার"
// ​
// word: "Eager"
// ​

const loadwordDetails= (wordId)=> {
    console.log(wordId)
    const url = `https://openapi.programming-hero.com/api/word/${wordId}`;
    fetch(url)
    .then((res)=> res.json())
    .then(data=> displayWordDetails(data.data));
}

// {
//   "word": "Eager",
//   "meaning": "আগ্রহী",
//   "pronunciation": "ইগার",
//   "level": 1,
//   "sentence": "The kids were eager to open their gifts.",
//   "points": 1,
//   "partsOfSpeech": "adjective",
//   "synonyms": [
//     "enthusiastic",
//     "excited",
//     "keen"
//   ],
//   "id": 5
// }

const displayWordDetails = (word)=> {
    console.log(word);
    document.getElementById("word_details").showModal();
    const detailsContainer = document.getElementById("details_container");
    detailsContainer.innerHTML = `
    <div class="max-w-2xl bg-white rounded-lg shadow-sm p-8">
        <!-- Title -->
        <h1 class="text-4xl font-bold text-gray-900 mb-8">
            ${word.word} (${word.meaning})
        </h1>

        <!-- Meaning Section -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-3">Meaning</h2>
            <p class="text-gray-800 text-lg">${word.meaning}</p>
        </div>

        <!-- Example Section -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-3">Example</h2>
            <p class="text-gray-700 text-base mb-4">
                ${word.sentence}
            </p>
            <p class="text-gray-800 text-base">সমার্থক শব্দ গুলো</p>
        </div>

        <!-- Synonyms -->
        <div class="flex flex-wrap gap-3">
            <span class="px-6 py-2 bg-blue-50 text-gray-700 rounded-lg text-sm">
                ${word.synonyms[0]}
            </span>
            <span class="px-6 py-2 bg-blue-50 text-gray-700 rounded-lg text-sm">
                ${word.synonyms[1]}
            </span>
            <span class="px-6 py-2 bg-blue-50 text-gray-700 rounded-lg text-sm">
                ${word.synonyms[2]}
            </span>
        </div>
    </div>
    `;
}


const displayWord = (words)=> {
    
    const wordContainer = document.getElementById("word_container");

    wordContainer.innerHTML = ""

    if(words.length == 0){
        wordContainer.innerHTML = `
             <div id="no_words" class="bg-gray-200  p-16 text-center mt-8 mb-8 rounded-lg flex flex-col items-center col-span-full">
             <img src="./assets/alert-error.png" alt="Student Image">
            <p class="text-sm font_bangla mt-2 text-gray-700">
                    এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
                    </p>
                <h3 class="text-3xl font_bangla font-bold mt-2 text-gray-700">নেক্সট Lesson এ যান
                    </h3>
                </div>
        
        `;
    
    }else{
        document.getElementById("no_words").style.display = "none";
    }


    words.forEach(data =>{
        console.log(data);
    const wordCard = document.createElement("div"); 
    wordCard.innerHTML = `
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md hover:bg-blue-200 object-cover">
            <h1 class="text-xl font-bold text-center text-gray-900 mb-4">
                ${data.word}
            </h1>
            <p class="text-center text-gray-600 text-lg mb-6">
                Meaning /Pronunciation
            </p>
            <p class="text-center text-sm font-semibold text-gray-800 mb-12">
                "${data.meaning} / ${data.pronunciation}"
            </p>
            <div class="flex justify-between items-center">
                <!-- Info Icon -->
                <button onclick = "loadwordDetails(${data.id})" class="bg-blue-100 hover:bg-blue-200 rounded-full p-3 transition-colors duration-200 hover:cursor-pointer">
                    <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <button class="bg-blue-100 hover:bg-blue-200 rounded-full p-3 transition-colors duration-200 hover:cursor-pointer">
                    <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    `;

    
    wordContainer.append(wordCard);    
    })
}

// lessons button displaying function 
const displayLessonsButton = (lessons) => {
    const lessonsButtonsContainer = document.getElementById("lessons_buttons_container");
    lessons.forEach(lesson => {
        const lessonDiv = document.createElement("div");
        lessonDiv.innerHTML = `
        <button onclick = "loadcategoriesLesson(${lesson.level_no})"
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
