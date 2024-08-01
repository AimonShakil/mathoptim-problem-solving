// Control Flow - Problems
import { input, number } from "@inquirer/prompts";

//Get user to input a number using prompt ("Enter a Number"), check if number is multiple of 5 or not?

let num_input = await number ({message : "Enter a number"});

if (num_input !== undefined && num_input % 5 == 0) {
    console.log( `Number : ${num_input} is Multiple of 5`);
}  else {
    console.log ( `Number : ${num_input} is Not a Multiple of 5`); 
}

/*1. Age Verification:
Write a program that prompts the user to enter their age. If the age is greater than or equal  
to 18, display "You are eligible to vote," otherwise, show "You are not eligible to vote yet."
*/

let age= await number ({message : " Pls enter your age"});
let age_input = Number(age)
if (age_input >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote yet");  
};

/* 2. Temperature Analyzer:
Create a temperature analyzer that prompts the user to input the current temperature. 
If the temperature is greater than 30 degrees Celsius, display "It's a hot day!"; if it's between 20 
and 30 degrees Celsius, show "The weather is pleasant"; and for temperatures below 20 degrees Celsius, 
display "It's a bit chilly today." */

let temp = await number ({message: "pls enter a current temperature in Celcius"});
let temp_inpt = Number(temp)
if (temp_inpt < 20) {
    console.log("It's a bit chilly today.");   
} else if ( temp_inpt >= 20 && temp_inpt <=30 ) {
    console.log("The weather is pleasant");  
}
else {
    console.log("It's a hot day!");
};

/* 3. Odd or Even:
Develop a program that accepts a number from the user and checks if it's odd or even. If the number is even, output  
"The number is even"; if it's odd, display "The number is odd." */

let num_usr = await number ({message : "Please enter a number"});
let nums_inp = Number(num_usr)
if (nums_inp % 2 == 0) {
    console.log("The number is even");  
} else {
    console.log("The number is odd");  
}

/* 4. Write a Code which gives grades to students according to thier scores */

let marks = await number ({message : "Please enter your marks"})
let marks_Inp = Number(marks)

if (marks_Inp >= 80 && marks_Inp <= 100 ) {
    console.log( ` Congrats!! You have scored Grade : A+ `)
} else if (marks_Inp >= 70 && marks_Inp <= 79 ) {
    console.log( ` Congrats!! You have scored Grade : A `)
} else if (marks_Inp >= 60 && marks_Inp <= 69 ) {
    console.log( ` Congrats!! You have scored Grade : B `)
} else if (marks_Inp >= 40 && marks_Inp <= 59 ) {
    console.log( ` Congrats!! You have scored Grade : C `)
} else 
    console.log( ` You are Failed `);

/* 5. Username Validator:
Create a program that prompts the user to enter a username. If the username matches a predefined value 
(e.g., "Admin") display "Access granted"; otherwise, show "Access denied." */

let username = await input ({message : "Please enter your name"});
if (username == "Admin") {
    console.log("Access granted")  
} else {
    console.log("Access denied.");
};

/* Let's consider an example where nested if statements are used to check conditions based on a person's age 
and their eligibility for certain activities */

let age_per = await number ({message : "Pls enter your age"})
let inp_age = Number ( age_per)
if (inp_age >= 18 ) {
    if (inp_age >= 21  ) {
        console.log("You can vote and smoke");   
    } else {
        console.log("You are an adult but cannot smoke yet.");
    }
} else {
    console.log("You are not an adult yet.");
}
    
/* Nested ifs */
let temp_water = await number ({message : "Pls enter your water temp"})
let tempr_water = Number (temp_water)
if( tempr_water > 0) {
    if (tempr_water < 100){
    console.log("The water is liquid.")}
    else {
        console.log("The water is boiling.");
    }
} else {
    console.log("The water is frozen.");
}




