"use strict";
let emni;
emni = "Next level web development";
emni.length; // type assertion
emni.length; // type assertion (different way of using)
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param);
        return `The converted result is ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(1000); // type assertion
const resultToBeString = kgToGram('1000'); // type assertion
try {
}
catch (error) {
    console.log(error.message);
}
