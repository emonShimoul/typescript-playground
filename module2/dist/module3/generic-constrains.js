"use strict";
// generic constraints
const addMeInMyCrushMind = (myInfo) => {
    const crush = 'Scarlet Witch';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo1 = {
    name: 'Emon',
    age: 30,
    salary: 10000000,
    other1: false,
    other2: null
};
const result7 = addMeInMyCrushMind(myInfo1);
