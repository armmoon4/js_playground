const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = '2px solid blue'
    section.style.marginBottom = '6px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px'; 
    section.style.backgroundColor = 'lightgray'; 
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow'

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');