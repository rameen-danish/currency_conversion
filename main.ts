#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgWhiteBright.cyan.bold("\t ******Welcome to Currency Converter***** "))
let currencyValue :any = {
    USD : 1,
    EUR : 0.93,
    PKR : 277.83,
    INR : 83.55,
    SAR : 3.75,
    AED : 3.67,
    AUD : 1.54,
    GBP : 0.80,
    CAD : 1.37,
    JPY : 153.30
};
const user_answer = await inquirer.prompt(
[
    {
        name:"from",
        message:chalk.green("Select your Amount Currency "),
        type:"list",
        choices:[ 'USD','EUR','PKR','INR','SAR','AED','AUD','GBP','CAD','JPY']
    },
    {
    name:"to",
    message:chalk.green("Select Currency in which you want to converted your amount."),
    type:"list",
    choices:[ 'USD','EUR','PKR','INR','SAR','AED','AUD','GBP','CAD','JPY']
    },
    {
        name:"amount",
        message:chalk.green("Enter your Amount"),
        type:"number",
    }
]
);
let fromAmount = currencyValue[user_answer.from];
let toAmount = currencyValue[user_answer.to];
let newAmount = user_answer.amount ;
let baseAmount = newAmount / fromAmount ;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellow(`your Amount ${newAmount} ${user_answer.from} is converted into ${convertedAmount.toFixed(2)} ${user_answer.to}`));
