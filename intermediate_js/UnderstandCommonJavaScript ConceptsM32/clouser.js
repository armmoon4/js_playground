function sum() {
    let counter = 0;
    const updatecounter = function() {
        counter += 1;
        console.log(counter);
    }
    updatecounter();
}

sum();
sum();
sum();