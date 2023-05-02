// ternary operator
const aage: number = 22;

aage > 18 ? console.log("Adult") : console.log("Not Adult");

// nullish coalescing operator
// nullish coalescing operator will work only for null and undefined. won't work for other falsy values.
const isAuthenticatedUser = '';
const userName = isAuthenticatedUser ?? 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName }, { userName2 });

// optional chaining
type Manush = {
    name: string;
    age: number;
    address: {
        city: string,
        road: string,
        home?: string;
    }
}
const manush1: Manush = {
    name: 'manush1',
    age: 50,
    address: {
        city: 'No City',
        road: 'No Road',
    },
};

const home = manush1?.address?.home ?? 'No Home';   // default value 'No Home'
console.log({ home });


