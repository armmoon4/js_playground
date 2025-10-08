const showLoader=()=> {
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("video-container").classList.add("hidden");
}
const hideLoader=()=> {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("video-container").classList.remove("hidden");
}

function removeActiveclass() {
    const activeButtons = document.querySelectorAll(".active");
    for (let btn of activeButtons) {
        btn.classList.remove("active");
    }
    console.log(activeButtons);
}

function loadCategories() {
    // 1 - fetching data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

        // got promise after fetching the data then we convert it to json
        .then((res) => res.json())
        // 3- send data to display
        .then((data) => displayCategories(data.categories));


}

function displayCategories(categories) {
    // get container
    const categorieContainer = document.getElementById('category-container');
    // loop operation on array of object
    for (let cat of categories) {

        // create element 
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
    <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class = "btn btn-sm btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}<button>
    `
        // append the element
        categorieContainer.append(categoryDiv);
    }


}

function loadVideos(searchText = "") {
    showLoader();
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(response => response.json())
        .then(data => {
            removeActiveclass();
            document.getElementById("btn-all").classList.add("active");
            displayVideos(data.videos)
        });
}

const loadCategoryVideos = (id) => {
    showLoader();
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            removeActiveclass();
            const clickButton = document.getElementById(`btn-${id}`)
            clickButton.classList.add("active");
            displayVideos(data.category);
        });
};

const loadVideoDetails = (videoId) => {

    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideoDetails(data.video));
}

const displayVideoDetails = (video) => {
    console.log(video)
    document.getElementById("video_details").showModal();
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
    <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
    `
}
// {
//   "category_id": "1001",
//   "video_id": "aaaa",
//   "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//   "title": "Shape of You",
//   "authors": [
//     {
//       "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//       "profile_name": "Olivia Mitchell",
//       "verified": ""
//     }
//   ],
//   "others": {
//     "views": "100K",
//     "posted_date": "16278"
//   },
//   "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

// const displayVideos=(videos)=>{
//      const videoContainer = document.getElementById("video-container");

//     videos.forEach((video)=>{
//         console.log(video);

//     });
// };

const displayVideos = (videos) => {

    const videoContainer = document.getElementById("video-container");

    videoContainer.innerHTML = "";

    if (videos.length == 0) {
        videoContainer.innerHTML = `
                <div class="py-20 col-span-full flex flex-col text-center justify-center items-center">
            <img class="w-[120px]" src="assets/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
        `;
        hideLoader();
        return;
    }

    videos.forEach((video) => {
        // console.log(video);
        const videoCard = document.createElement("div");
        // 2. Use template literals (backticks ``) 
        videoCard.innerHTML = `
      <div class="card bg-base-100">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" />
                <span class="absolute bottom-2 right-2 text-sm text-white bg-black rounded px-2">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>

                <div class="intro">
                    <h2 class="text-sm font-semibold">${video.title}</h2>
                    <p class="text-sm text-gray-400 flex gap-1">
                    ${video.authors[0].profile_name}
                     ${video.authors[0].verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">` : ``}
                            </p>
                    <p class="text-sm text-gray-400">${video.others.views} views</p>
                </div>
            </div>
            <button onclick= loadVideoDetails('${video.video_id}') class="btn btn-block">Show Details</button>
        </div>
        `;
        // 3. Append the newly created card to the container
        videoContainer.append(videoCard);
    });
    hideLoader();
};

document.getElementById('search-input').addEventListener('keyup', (e) => {
    const input = e.target.value;
    loadVideos(input)
    
});

loadCategories();

