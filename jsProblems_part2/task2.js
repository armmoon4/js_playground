const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names) {
    let smallest = names[0];
    for (let name of names) {
        if (name.length < smallest.length) {
            smallest = name;
        }
    }
    return smallest;
}

console.log("Friend with smallest name:", smallestName(friends));
