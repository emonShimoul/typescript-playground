var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.data = { firstName: firstName, lastName: lastName };
        this.methods = {
            fullName: function () { return "".concat(firstName, " ").concat(lastName); }
        };
    }
    return User;
}());
var user1 = new User('Emon', 'Shimoul');
console.log(user1.methods.fullName());
