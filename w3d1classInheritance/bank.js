"use strict";

class Bank{
    constructor() {
        this._accounts = [];
    }

    addAccount(){
        let acc = new Account(Bank.nextNumber);
        Bank.nextNumber ++;
        this._accounts.push(acc);
        return acc.getNumber();
    }

    addSavingsAccount(interest){
        let acc = new SavingsAccount(Bank.nextNumber, interest);
        Bank.nextNumber ++;
        this._accounts.push(acc);
        return acc.getNumber();
    }

    addCheckingAccount(overdraft){
        let acc = new CheckingAccount(Bank.nextNumber, overdraft);
        Bank.nextNumber ++;
        this._accounts.push(acc);
        return acc.getNumber();
    }

    closeAccount(number){
        this._accounts = this._accounts.filter(acc => acc.getNumber() != number);
    }

    accountReport(){
        return this._accounts.map(acc => acc.toString())
            .reduce((accum, currentStr) => accum + currentStr + "\n", "");
    }

    // static variable
    static nextNumber = 1;

    endOfMonth(){
        return  this._accounts.map(acc => acc.endOfMonth())
            .reduce((accum,currentStr) => accum + currentStr + "\n", "");

    }
}