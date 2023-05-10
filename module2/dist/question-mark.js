"use strict";
var _a, _b;
// ternary operator
const aage = 22;
aage > 18 ? console.log("Adult") : console.log("Not Adult");
// nullish coalescing operator
// nullish coalescing operator will work only for null and undefined. won't work for other falsy values.
const isAuthenticatedUser = '';
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName }, { userName2 });
const manush1 = {
    name: 'manush1',
    age: 50,
    address: {
        city: 'No City',
        road: 'No Road',
    },
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No Home'; // default value 'No Home'
console.log({ home });
