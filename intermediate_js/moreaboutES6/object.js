const person = {
    name: 'Alice',
    age: 30,
    friends: ['Bob', 'Charlie'],
    details:{
        job: 'yes',
        isMarried: true,
        status: 'not found',
        father: {
            name: 'David',
            age: 60
        }
    }
}

// console.log(person.details.father.name); 
console.log(person["name"])
