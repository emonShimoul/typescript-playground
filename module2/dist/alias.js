"use strict";
const fr1 = {
    name: 'Iron Man',
    age: 30,
    profession: 'Actor',
    address: "USA"
};
const fr2 = {
    name: 'Wanda',
    profession: 'Actor',
    address: "Mexico"
};
const isPresent = false;
const courseName = 'Next Level Web Development';
const calculate = (n1, // 10
n2, // 20
operation //  (x, y) => x + y ---> (10, 20)= >10 + 20
) => {
    return operation(n1, n2);
};
calculate(10, 20, (x, y) => x + y);
calculate(50, 20, (x, y) => x - y);
