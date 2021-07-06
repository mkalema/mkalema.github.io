"use strict";

describe('get balance', function () {
    let account = new Account(56789);

    it('should return balance on the account', function () {
        assert.equal(0.0, account.getBalance());
    });
});

describe('get number', function () {
    let account = new Account(56789);

    it('should return the correct account number', function () {
        assert.equal(56789, account.getNumber());
    });
});

describe('deposit', function () {
    let account = new Account(56789);
    account.deposit(1000);

    it('should add the passed amount to the account balance', function () {
        assert.equal(1000.0, account.getBalance());
    });
});

describe('withdraw', function () {
    let account = new Account(56789);
    account.deposit(1000);
    account.withdraw(500);

    it('should reduce the current account balance by the passed amount ', function () {
        assert.equal(500.0, account.getBalance());
    });
});

describe('Savings Account Tests ', function () {
    let account = new SavingsAccount(56789, 10);
    account.deposit(1000);
    account.addInterest();

    it('addInterest: should calculate and add interest amount to account balance ', function () {
        assert.equal(1100.0, account.getBalance());
    });

    it('endOfMonth: calulates state of account at end of month ', function () {
        assert.equal(1100.0, account.getBalance());
    });
});

describe('withdraw for checking account, with overdraft limit', function () {
    let account = new CheckingAccount(56789, 300);
    account.deposit(1000);
    account.withdraw(1200);

    it('should reduce the current account balance and allow overdraft that is not beyond the limit ', function () {
        assert.equal(-200, account.getBalance());
    });
});

