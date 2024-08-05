
import { input, number, select } from "@inquirer/prompts";
//Break and continue in Iterations
for(let i = 0; i <= 10 ; i++) {
    if ( i == 5) {
        console.log(`Detected 5`); 
        continue; // break
    }
    console.log(`Value of i is ${i}`);
}

//Break
for (let a = 0; a <= 5; a++) {
    if ( a == 3) {
        console.log(`light switched on`);
       break; 
    }
    console.log(`value of a is ${a}`);   
}

// for
for ( let i = 0; i <= 25; i ++) { // count controlled loop
    console.log(`Iterated value is ${i} `);
    
}

//while - condition controlled loop 
let a = 0;
while (a <= 8) {
    console.log(`while loop value is : ${a}`);
    a++
}
//
let index1 = 0
while (index1  <= 10 ) {
    console.log(`value of Index is ${index1}`);
  index1 = index1 + 2  
}


// do - while 
let b = 1;
do {
    console.log(`b is = ${b}`);
    b++;   
} while (b <= 3 )

// calculate sum 1 to 5
let sum = 0;
for (let i = 0; i <= 5; i++) {
    sum = sum + i 
    console.log(`${i}`);
    console.log(`sum each time looped ${sum}`);   
}
console.log(`sum = ${sum}`);

// calculate sum 1 to 100
let sums = 0;
for (let i = 1; i <= 100 ;  i ++) {
    sums = sums + i
    //console.log(`sum each time loop is ${sums}`);
    
}
console.log(`Total is ${sums}`);




/* This algorithm would keep iterating until the answer at the end of the loop is ‘No’,
i.e it will continue to iterate WHILE there are more numbers to add. A condition-controlled loop
would be used because there is no way of knowing in advance how many more numbers will need to be 
entered before the algorithm stops.

input a number
    add number to total
    ask 'Any more numbers? Yes/No'
    say what the total is */

/*let total = 0;

let more_numbers: boolean = Yes;
while (more_numbers == yes){
    input a number
    add number to total
    ask 'Any more numbers? Yes/No'
    say what the total is
} */


// let input_num = await number ({message : "Input a number"})



// while (input_num == ) {
//     let nums_inp = Number (input_num)
//     let total = nums_inp

//     let iputchoice_newnum = await select({message : "Please select do you want to enter more numbers", choices : [
//         {name : "Yes" , value: 1},
//         {name : "No" , value: 2}
//     ]})
// }

/* Practice Questions
print all the even numbers 0 to 100
for ( i = 0; i<=100 ; i++) {
    if ( i%2 === 0)
   console.log( ` i = ${i}`);
 } */



// Iteration with condition statement 
for (let i = 0; i < 10 ; i++) {
    const element = i;
    if (element == 5) {
        console.log(`5 is the best number`);   
    }
    console.log(element);
}

// did't understood logic
let countries = ["pk" ,"CN", "IN" ,"US"]
    for (let x = 0; x < countries.length; x++) {
        console.log(countries[x].length);
        for (let y = 0; y < countries[x].length; y++) {
            if (countries[x].charAt(y) == "a" ||  countries[x].charAt(y) == "A" ) {          
                console.log("*"); 
            } else {
                console.log(countries[x].charAt(y));
                console.log(countries[x].charAt(y));
                console.log("Pakistan".toUpperCase());
            }       
        } 
    }

    var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

    for (var i = 0; i <= 4; i++) {
      if ("Islamabad" === cleanestCities[i]) {
        console.log("It's one of the cleanest cities");
        break;
      }
    }
    
    //
    let rNo = 0;
    for (let x = 0 ; x < 5; x++) {
        rNo = Math.random () * 10;
        if (rNo > 5) {
            console.log(`${rNo} is greater than 5`);
        } else {
            console.log(`${rNo} is lesser than 5`);
            
        }
    }
 
 
// did understand logic
let countries_new = ["pk" ,"CN", "IN" ,"US"]
for (let x = 0; x < countries_new.length ; x ++) {
    if (countries_new[x].length == 4) {
        console.log(`${countries_new[x]} Length is ${countries_new[x].length} --> Check`);   
    } else if (countries.includes("Pakistan")) {
        console.log("Pakistan Zindabad"); 
       
    } else {
        console.log(`${countries_new[x]} -> un-check`); 
    }    
}














/*Problem Statement: Calculating Factorial
Description:
Create a program that calculates the factorial of a given number. The factorial of a non-negative integer n, /n
denoted as n!, is the product of all positive integers less than or equal to n. */

/* 1. Basic Information Gathering:
Create a program that uses inquirer to prompt the user for their name, age, and favorite color. Display the collected /n 
information at the end. */

 /* 2. Temperature Converter:
Build a program that asks the user to enter a temperature in Celsius. Use inquirer to gather input and then convert the /n 
temperature to Fahrenheit, displaying the result. */

/*3. Guess the Number:
Implement a number guessing game. Generate a random number between 1 and 100, then prompt the user to guess the number /n 
using inquirer. Provide feedback if the guess is too high, too low, or correct. */

/*4. Shopping List:
Develop a simple shopping list application. Use inquirer to repeatedly prompt the user to add items to their shopping list/n
.Display the final list when the user decides to exit. */ 

/* 5. Calculator:
Create a basic calculator program. Use inquirer to prompt the user for two numbers and an operation / n 
(addition, subtraction, multiplication, division). Perform the calculation and display the result. */ 

/* 6. Task Manager:
Build a task manager that allows the user to add, view, and delete tasks. Use inquirer to prompt the user for actions /n
and display the task list. */ 


/*7. Palindrome Checker:
Implement a program that checks if a given word is a palindrome (reads the same backward as forward). Prompt the user/n
 to enter a word and display whether it's a palindrome or not. */

/* 8. Color Picker:
Develop a program that prompts the user to choose a color from a predefined list. Display a message based on their / n 
selection. */ 

/* 9. BMI Calculator:
Build a BMI (Body Mass Index) calculator. Use inquirer to gather the user's height and weight, then calculate and /n 
display the BMI. */ 

/* 10. Rock, Paper, Scissors Game:
Create a simple rock, paper, scissors game. Prompt the user to choose one of the options, generate a random choice for/ n
the computer, and determine the winner. */





// // Q2 : Create a game where we start with any random game number. Ask the user to keep guessing the game number until user /n
// //enters correct value
// import inquirer from "inquirer";
// async function game() {
//     let gameNum = await inquirer. prompt ([
//     {
//         name : "numG",
//         type : "number",
//         message : "Please enter & Guess any random number",
//     },
// ]);
// let numGame : number = 6;       
// let userGuess = Number(gameNum.numG);
// while (numGame !== userGuess) { // may not use == use single so no need to convert
//     console.log( `Sorry, thats not the correct number please try again! `);
//     gameNum = await inquirer.prompt([
//     {
//         name: "numG",
//         type: "number",
//         message: "Please enter & Guess any random number",
//     },
// ]);
//     userGuess = Number(gameNum.numG); // Update the user's guess
// }
// console.log("Congratulations! You guessed the correct number.");
// console.log("Please start your Ludo game");
// }
// game();
// // if (gameNum == 6) {
// //     
// // } else {
// // }
// // let v: number = 1;
// // do {
// //     console.log("Count is: " + i);
// //     i++;
// // } while (i <= 5);
// // // This do-while loop will print the count starting from 1 to 5. Even if i is initially greater than 5, the loop executes at least once before evaluating the condition. The loop continues executing the block of code as long as i is less than or equal to 5.
// // while (true) {
// //     console.log("This is an infinite loop!");
// // }
// // // 4. Condition Controlled Loop - Infinite Loop
// // while (true) {
// //     console.log("This is an infinite loop!");
// // }
// // for (;;) {
// //     console.log("This is an Gouda loop!");
// // }
// // // Infinite loop with break condition
// // let i1: number = 0;
// // while (true) {
// //     console.log("Loop iteration: " + i1);
// //     i++;
// //     if (i1 >= 10) {
// //         break; // Exit the loop when i is greater than or equal to 10
// //     }
// // }
// // //Although this example appears to be an infinite loop initially, it has an internal break condition that stops the loop when i becomes greater than or equal to 10
// // //Recursive Functon
// // function infiniteLoop() {
// //     console.log("This is an infinite loop!");
// //     infiniteLoop(); // Calls itself infinitely
// // }
// // // Invoke the function to start the infinite loop
// // infiniteLoop();
// // // n this example, the function infiniteLoop continuously calls itself, creating an infinite recursion.
// // //Session 3
// // // loop has three parts starting point, condition and increment
// // let countries = ["Afghanistan", "Pakistan", "Iran"]; // here countires is array type object
// // let x = 0;
// // /*for (;  x < countries.length; x++) {
// //     console.log(countries[x].length); // here if we put a value in array it only prints and check thts i, we are putty x to check all and index value changes as well
// //     for (let y= 0; y<countries[x].length;y++){
// //         if (countries[x].charAt(y) =="a" || countries[x].charAt(y)=="A")  
// //         console.log("*");
// //         else
// //         console.log(countries[x].charAt(y));
// //         /*console.log(countries[x].charAt(y));
// //     }
// // }
// // /*console.log("Pakistan".toLowerCase());
// // console.log("Pakistan".toUpperCase()); */ // upper condition can be made better with these two methods
// // //Simple loop example
// // for (x = 0;  x < countries.length; x++) /*{
// //    /* if (countries[x].length > 5) {
// //         console.log (`${countries[x]} Length=${countries[x].length}->Check`);
// //     }else {
// //         console.log (`${countries[x]} -> un-Check`);
// //     }
// //     }*/
// //     if (countries.includes("Pakistan")) {
// //         console.log("Pakistan Zindabad");
// //     }
// // /* for (x=1; x<5; x++){ // x++ is a counter means whenever check, this is a post operator add value after bracket
// //     console.log(x);
// // }
// // // we can also use loop in reverse as below
// // x=10;
// // for(; x> 0; x++){
// //     console.log(x);
// // } 
// // // never ending loop
// // for (;true;x++) {
// // };
// //  // it has three parameters 1st variable, 2nd of testing, and third incrementing, we will find different ways of usinf it
// // */ 



   
