//1. where to add
const placeList = document.getElementById('places-list');

//2. what to be added
const li = document.createElement('li'); 
li.innerText = 'pahartoli bon'; 

//3. add the child 
placeList.appendChild(li); 

//1. where to add
const mainContainer = document.getElementById('main-content');

//2. what to be added 
const section = document.createElement('section'); 
const h1 = document.createElement('h1'); 
h1.innerText = 'My food list'
section.appendChild(h1); 

const ul = document.createElement('ul'); 
const li1 = document.createElement('li'); 
li1.innerText = 'biriyani'; 
ul.appendChild(li1); 


const li2 = document.createElement('li'); 
li2.innerText = 'pizza'; 
ul.appendChild(li2); 

 
const li3 = document.createElement('li'); 
li3.innerText = 'burgar'; 
ul.appendChild(li3); 


const li4 = document.createElement('li'); 
li4.innerText = 'chips'; 
ul.appendChild(li4); 

section.appendChild(ul);

mainContainer.appendChild(section)

//set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
    <li>lungi</li>
    <li>shirt</li>
    <li>tshirt</li>
</ul>
`
mainContainer.appendChild(sectionDress);
