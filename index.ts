#! /usr/bin/env node
import inquirer from "inquirer"

const currency : any = {
    USD: 1,
    EUR : 0.51,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280

};
let user_answer = await inquirer.prompt([{
    name : "from",
    message : "enter from currency",
    type : "list",
    choices : ["USD" , "EUR" , "GBP" , "INR" , "PKR"]

},
{
    name : "to",
    message : "enter to currency",
    type : "list",
    choices : ["USD" , "EUR" , "GBP" , "INR" , "PKR"]
},
{
    name : "amount",
    message : "enter your amount",
    type : "number",
    
}
]);
console.log(user_answer);

let fromAmount = currency [user_answer.from]
let toAmount = currency [user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
