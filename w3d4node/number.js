const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;

function getNumber() {
    readline.question("Enter numbers you want to sum, when done enter stop : ", input => {
        if (isNaN(input) || input.toLowerCase() === "stop") {
            console.log(`Your total sum is: ${sum}`);
            readline.close();
        } else {clearInterval()
            sum += parseInt(input);
            getNumber();
        }
    });
}

getNumber();