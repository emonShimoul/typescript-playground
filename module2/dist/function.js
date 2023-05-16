"use strict";
// normal function
function add(num1 = 10, num2) {
    return num1 + num2;
}
add(3, 7);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 4, 5];
const newArr = arr.map((el) => el * el);
// method (function inside object called method)
const person = {
    name: 'Emon',
    balance: 50,
    addBalance(money) {
        console.log(`My new balance is ${this.balance + money}`);
    }
};
// spread operator
const myFriends = ['chandler', 'joey', 'ross'];
const newFriends = ['monica', 'rachel', 'pheobe'];
myFriends.push(...newFriends);
console.log(myFriends);
// rest parameter
const greetFriends = (...friends) => friends.forEach((fr) => console.log(`Hi ${fr}`));
greetFriends("Kishore", "Musa", "Rabin");
// array and destructuring
const [friend1, friend2] = myFriends;
console.log(friend1, friend2);
const myBestFriends = {
    fullName: "ABC",
    age: 28
};
const { fullName, age } = myBestFriends;
console.log(fullName, age);
