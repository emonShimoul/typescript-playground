"use strict";
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}.`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}!!`);
};
userDetails(53, { name: "Emon", age: 30 });
sayHello({ name: "Emon", age: 30 });
