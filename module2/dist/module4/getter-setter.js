"use strict";
/*******************************************

class BankAccount {
    readonly id: number;
    private name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // getter
    get balance(): number {
        return this._balance;
    }

    // getBalance(): number {
    //     return this._balance;
    // }

    // setter
    set deposit(amount: number) {
        this._balance = this._balance + amount
    }

    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }
}

const myAccount = new BankAccount(444, 'Persian', 500);
// myAccount.addDeposit(20);
// myAccount.getBalance();
// myAccount.getBalance();

console.log(myAccount.balance);
myAccount.deposit = 300;
console.log(myAccount.balance);

*******************************************/ 
