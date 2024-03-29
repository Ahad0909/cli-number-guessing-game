#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guesssing game");
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6:"
    }]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations you have guesssed right number");
}
else {
    console.log("Wrong! your guess is incorrect");
}
console.log("THE END");
