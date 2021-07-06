"use strict";

class CheckingAccount extends Account{

    /**
     * Constructor for creating a new Checking Account object
     *
     * @param {number} number the number for this account
     * @param {interest} interest the interest rate for this account
     * */
    constructor (number, overdraftlimit) {
        super(number);
        this._overdraftlimit = overdraftlimit;
    }

    /**
     * Getter for the 'private' interest field
     *
     * @returns {_overdraftlimit} the over draft limit
     */
    getOverdraftlimit(){
        return this._overdraftlimit;
    }

    /**
     * Setter for the 'private' interest field
     *
     * sets the over draft limit for the account
     */
    setOverdraftlimit(value){
        this._overdraftlimit = value;
    }

    withdraw( amount ){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if ( Math.abs(amount - this.getBalance()) > this.getOverdraftlimit() ) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }
    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance() + ": overdraftlimit " + this.getOverdraftlimit();
    }

    endOfMonth(){
        if(this._balance < 0){
            return 'Warning, low balance CheckingAccount ' + this.getNumber() + ': balance: ' + this.getBalance()
                + ' overdraft limit: ' + this.getOverdraftlimit();
        }
    }
}