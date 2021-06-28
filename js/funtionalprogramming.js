"use strict"

// sum()
function sum(array){
    const fx = (accumulator, currentValue) => { return accumulator + currentValue}

    return array.reduce(fx, 0);
}

console.log("Sum = " + sum([2,5,6,7]));

// multiply()
function multiply(array){
    const fx = (accumulator, currentValue) => { return accumulator * currentValue}

    return array.reduce(fx, 1);
}

console.log("Multiply = " + multiply([2,5,6,7]));

// Define a function reverse() that computes the reversal of a string
function reverse(string){
    let array = string.split("");

    const fx = (accumulator, currentValue) => { return currentValue + accumulator }

    return array.reduce(fx, "");
}

console.log("Reverse = " + reverse("kalema"));

// Write a function filterLongWords() that takes an array of words and an integer i
// and returns the array of words that are longer than i.
function filterLongWords(array,n){
    return array.filter( word => word.length > n);
}

console.log("Filter long words = " + filterLongWords(["word", "boss", "kalema", "pie", "bogdanovic"], 5));