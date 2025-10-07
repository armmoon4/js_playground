const a = 10;

const first = () => {
    second();
    console.log("hello iam from frist")
}

const second = () => {
    third();
    console.log("iam from second")
}

const third = () => {
    console.log("iam from third")
}

const b = 20;

first();

console.log("ami shobar sesh a ashbo")