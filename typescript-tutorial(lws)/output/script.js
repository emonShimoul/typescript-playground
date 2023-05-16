"use strict";
let a;
let b;
// array
let c = [];
// object
let d;
// any
let e = [];
// function
// let myFunc: Function;
const myFunc = (a, b, c = "Hii") => {
    console.log(c);
    console.log(`Hello ${a} ${b}`);
    return a + b;
};
myFunc("A", "B", "C");
