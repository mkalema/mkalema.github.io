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

    it('endOfMonth: calculates state of account at end of month ', function () {
        assert.equal('Interest added SavingsAccount ' +  56789 + ': balance: '
            + 1210 + 'interest: ' + 10, account.endOfMonth());
    });
});

describe('Checking Account Tests', function () {
    let account = new CheckingAccount(56789, 300);
    account.deposit(1000);
    account.withdraw(1200);

    it('withdraw: should reduce the current account balance and allow overdraft that is not beyond the limit ', function () {
        assert.equal(-200, account.getBalance());
    });

    it('endOfMonth: calculates state of account at end of month ', function () {
        assert.equal('Warning, low balance CheckingAccount ' + 56789 + ': balance: '
            + -200 + ' overdraft limit: ' + 300, account.endOfMonth());
    });
});

describe("Bank Tests", function(){
    it("adds a new Account to the accounts array", function(){
        let bank = new Bank();
        bank.addAccount();
        assert.equal(1, bank.getAccounts().length);
        assert.equal(1, bank.getAccounts()[0].getNumber()); // account number starts from 1

        bank.addSavingsAccount(25);
        assert.equal(2, bank.getAccounts().length);

        bank.addCheckingAccount(100);
        assert.equal(3, bank.getAccounts().length);
    });

    it("deletes an account from account array when called closeAccount()", function(){
        let bank = new Bank();
        bank.addAccount();
        bank.addAccount();
        bank.addAccount();

        assert.equal(3, bank.getAccounts().length);
        bank.closeAccount(bank.getAccounts()[0].getNumber());
        assert.equal(2, bank.getAccounts().length);
    });

    it("creates an account report of all accounts in new line. ", function(){
        let bank1 = new Bank();
        bank1.addAccount();
        bank1.addCheckingAccount(100);
        bank1.addSavingsAccount(200);

        assert.equal("Account 7: balance 0\nChecking Account 8: balance 0: overdraftlimit 100\nSavings Account 9: balance 0: interest 200\n", bank1.accountReport());
    });
});



