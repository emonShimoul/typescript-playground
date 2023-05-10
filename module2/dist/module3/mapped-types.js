"use strict";
const arrayOfNumbers = [1, 2, 3]; // ['1','2','3']
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);
const obj = {
    name: 'Emon'
};
obj['name'];
const area1 = { height: 10, width: '10' };
const rectangularArea = {
    height: 10,
    width: 12,
};
function fullNamee(person) {
    return `${person.firstName} ${person.lastName}`;
}
