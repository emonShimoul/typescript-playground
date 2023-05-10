/*

// normal function
function add(num1: number = 10, num2: number): number {
    return num1 + num2;
}
add(3, 7);

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 5];
const newArr = arr.map((el: number) => el * el);

// method (function inside object called method)
const person: {
    name: string,
    balance: number,
    addBalance(money: number): void        // The type void can be used to indicate a function doesn't return any value.
} = {
    name: 'Emon',
    balance: 50,
    addBalance(money: number) {
        console.log(`My new balance is ${this.balance + money}`);
    }
}

// spread operator
const myFriends = ['chandler', 'joey', 'ross'];
const newFriends = ['monica', 'rachel', 'pheobe'];

myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter
const greetFriends = (...friends: string[]): void => friends.forEach((fr) => console.log(`Hi ${fr}`)
)
greetFriends("Kishore", "Musa", "Rabin");

// array and destructuring
const [friend1, friend2] = myFriends;
console.log(friend1, friend2);
const myBestFriends = {
    fullName: "ABC",
    age: 28
}
const { fullName, age } = myBestFriends;
console.log(fullName, age);

*/