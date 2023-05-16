"use strict";
/***************

// Arrow Function
const createArray = <T>(param: T): T[] => {
    return [param];
}
const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
}
function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
    return [param1, param2];
}

const result1 = createArray<string>('Bangladesh');
const result2 = createArray<boolean>(false);
type Name = { name: string };
const result3 = createArray<Name>({ name: "Emon" });

const result4 = createArray1<string, string>('Bangladesh', 'My Country');
const result5 = createArray1<boolean, Array<string>>(false, ['USA']);

// Spread Operator
const addMeInMyCrushMind = <T>(myInfo: T) => {
    const crush = 'Scarlet Witch';
    const newData = { ...myInfo, crush };
    return newData;
}
const myInfo = {
    name: 'Emon',
    age: '30',
    salary: 10000000
}
// const newData = { ...myInfo, crush };
const result6 = addMeInMyCrushMind(myInfo);


 *********************/
