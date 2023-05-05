/*******************************************

class BankAccount {
    readonly id: number;
    private name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    getBalance() {
        console.log(`My Current Balance is ${this._balance}`);
    }

    addDeposit(amount: number) {
        this._balance = this._balance + amount;
    }
}

class StudentAccount extends BankAccount {
    test() {
        this._balance = 100;
    }
}

const myAccount = new BankAccount(444, 'Persian', 200);
// myAccount._balance = 0;
console.log(myAccount);

*******************************************/