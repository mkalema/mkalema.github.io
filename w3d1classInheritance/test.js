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

    it('should add the passed amount to the account balance', function () {
        console.assert(1000.0, account.deposit(1000));
    });
});

describe('withdraw', function () {
    let account = new Account(56789);
    account.deposit(1000);

    it('should reduce the current account balance by the passed amount ', function () {
        console.assert(500.0, account.withdraw(500));
    });
});


