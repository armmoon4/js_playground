function ghotok(patri , name) {
    patri(name);
}

const patri = function(name) {
    console.log("okay patri1 ami pacihi" , name);
}
const patri2 = function(name) {
    console.log("okay patri2 ami pacihi" , name);
}
const patri3 = function(name) {
    console.log("okay patri3 ami pacihi" , name);
}

ghotok(patri , "sajib");
ghotok(patri2 , "rakib");
ghotok(patri3 , "shakil");