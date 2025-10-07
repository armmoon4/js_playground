// const loadData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('Error fetching data:', error));
// }

// loadData();

// const fetcthData = () => {
//     return new Promise((resolve, reject) => {
//         const status = true; // Simulating success or failure
//         if (status) {
//             resolve('Data fetched successfully!');
//         } else {
//             reject('Error fetching data.');
//         }
//     });
// }

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/comments/1',
    'https://jsonplaceholder.typicode.com/albums/1',
    'https://jsonplaceholder.typicode.com/photos/1',
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/users/1'
];

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json()).then(data => data)
}))
    .then(res => res)
    .then(data => console.log(data))
    .catch(err => console.error('Error fetching data:', err));
    