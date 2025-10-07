// const handlUser = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching user data:', error));
// }

// handlUser();

const handluser2 = async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    }
    catch{
        console.error('Error fetching user data:', error);
    }
  
}