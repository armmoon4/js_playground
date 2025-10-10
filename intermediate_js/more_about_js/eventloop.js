function a() {
    b();
    console.log("a");
}

function b() {
    c();
    console.log("b");
}

function c() {
    setTimeout(d, 0);
    e();
    console.log("c");
}

function d() {
    
    console.log("d");
}

function e() {
    console.log("e");
}