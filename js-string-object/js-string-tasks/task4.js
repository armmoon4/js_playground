let str = "eXample with x and X";
if (str.includes('x')) {
    str = str.replace(/x/g, 'y');
}

if (str.includes('X')) {
    str = str.replace(/X/g, 'Y');
}

console.log(str);
