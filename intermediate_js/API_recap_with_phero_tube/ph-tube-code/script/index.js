function loadCategories() {
// 1 - fetching data
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

// got promise after fetching the data then we convert it to json
    .then((res) => res.json())
    // 3- send data to display
    .then((data)=> displayCategories(data.categories)); 
    
    
}

function displayCategories(categories) {
    // get container
    const categorieContainer = document.getElementById('category-container');
    // loop operation on array of object
    for(let cat of categories){
    
    // create element 
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class = "btn btn-sm btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}<button>
    ` 
    // append the element
    categorieContainer.append(categoryDiv);
    }
   

}


loadCategories();