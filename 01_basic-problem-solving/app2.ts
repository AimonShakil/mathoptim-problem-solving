// Control Flow - Problems
import { input, number } from "@inquirer/prompts";

//Get user to input a number using prompt ("Enter a Number"), check if number is multiple of 5 or not?

let num_input = await number ({message : "Enter a number"});

if (num_input !== undefined && num_input % 5 == 0) {
    console.log( `Number : ${num_input} is Multiple of 5`);
}  else {
    console.log ( `Number : ${num_input} is Not a Multiple of 5`); 
}

