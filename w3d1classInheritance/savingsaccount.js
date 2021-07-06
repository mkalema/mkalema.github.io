"use strict";

/**
 * A Savings Account class
 *
 * Provides the basic functionality that every savings account should have
 */
class SavingsAccount extends Account{

    /**
     * Constructor for creating a new Savings Account object
     *
     * @param {number} number the number for this account
     * @param {interest} interest the interest rate for this account
     * */
    constructor (number, interest) {
        super(number);
        this._interest = interest;
    }

    /**
     * Getter for the 'private' interest field
     *
     * @returns {_interest} the interest rate
     */
    getInterest(){
        return this._interest;
    }

    /**
     * Setter for the 'private' interest field
     *
     * sets the interest rate for the account
     */
    setInterest(value){
        this._interest = value;
    }

    /**
     * Method to add interest to account balance
     *
     * @returns {undefined}
     */
    addInterest(){
        let interestAmount = (this._interest / 100) * this._balance;
        this._balance += interestAmount;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Savings Account " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

    endOfMonth(){
        this.addInterest();
        return 'Interest added SavingsAccount' +  this._number + ': balance: ' + this._balance + 'interest: ' + this._interest;
    }

}