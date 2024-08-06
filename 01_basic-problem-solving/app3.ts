
import { input, number, confirm, select} from "@inquirer/prompts";
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


/* This code uses a ternary operator to conditionally assign a value to yourName. Then, it checks if yourName is 
truthy before attempting to call toUpperCase() on it, ensuring type safety within the if block.
yourName.toUpperCase();//Error: Object is possibly 'undefined'. */

let yourName = Math.random() > 0.6 ? "Anna" : undefined;
if (yourName === "string") {
    yourName.charAt(2)
}
if (yourName === "Anna") {
    yourName.length
}
if (yourName == " ") {
    yourName.toUpperCase()
}

yourName?.toUpperCase()


/*Problem Statement: Calculating Factorial
Create a program that calculates the factorial of a given number. The factorial of a non-negative integer n, /n
denoted as n!, is the product of all positive integers less than or equal to n. */

function factorialIterative(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    
    let result = 1;
    
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

// Example usage
let num_fac = 55;
try {
    console.log(`Factorial of ${num_fac} (Iterative): ${factorialIterative(num_fac)}`);
} catch (error: any) {
    console.error(error.message);
}

/* 1. Basic Information Gathering:
Create a program that uses inquirer to prompt the user for their name, age, and favorite color. Display the collected /n 
information at the end. */

let u_name = await input ({message : "pls Input User Name"})
let u_age = await number ({message : "Enter your age number"});
let u_color = await input ({message : "Enter your fav color"});

console.log(`User name is ${u_name}, age is ${u_age} and fav color is ${u_color}`);


 /* 2. Temperature Converter:
Build a program that asks the user to enter a temperature in Celsius. Use inquirer to gather input and then convert the /n 
temperature to Fahrenheit, displaying the result. */

let temp = await number ({message : "pls insert temp in celsius"})





/*3. Guess the Number_2:
Implement a number guessing game. Generate a random number between 1 and 100, then prompt the user to guess the number /n 
using inquirer. Provide feedback if the guess is too high, too low, or correct. */





/*4. Shopping List:
Develop a simple shopping list application. Use inquirer to repeatedly prompt the user to add items to their 
shopping list Display the final list when the user decides to exit. */ 
async function runShoppingListApp () {
    const shoppingList : string[] = [];
    let continueadding = true;
    console.log('Welcome to Shopping List Application!');
while (continueadding) {
    // prompt user to enter an item or exit
    let answer = await input ({message : "Enter an item to add to your shopping list (or type 'exit' to finish):"})
    const item = answer.trim()

    // check if user wan to exit 
    if (item.toLocaleLowerCase() === "exit" )   {
        continueadding = false;
    } else {
        // add items to shopping list
        shoppingList.push(item)
        console.log(`Added : ${item}`);   
    }
}

// Display the final shopping list
console.log(" \n  Your shopping List :");
shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);  
}) 
console.log(" Thankyou for using shopping List Application!");  
}

// Run the Application
runShoppingListApp().catch((error) => {
    console.error("An error occured: ", error)
})

runShoppingListApp()


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


//Union Literals related:
/* 1. Traffic Light Simulation:
Define a type for a traffic light that can only have the values "red," "yellow," or "green." Write a function that/n
 simulates the behavior of a traffic light by cycling through these colors. */

 type traffic_light = 'red' | 'Yellow' |'green';


 /*2. Card Game Suit:
 Define a type for a playing card suit with the values "hearts," "diamonds," "clubs," or "spades." Write a function /n 
 that accepts a card suit and performs some action based on the suit.*/
 
 /*3. Days of the Week:
 Create a type for the days of the week using union literals. Write a function that takes a day as input and prints a/n
  message indicating whether it's a weekday or a weekend day. */
 
 /*4. Coin Toss Simulation:
 Define a type for the outcomes of a coin toss: "heads" or "tails." Write a function that simulates a coin toss and /n
 prints the result. */
 
 /*5. Media Player Controls:
 Create a type for media player controls with the values "play," "pause," "stop," or "rewind." Write a function that 
 takes a control command and performs the corresponding action. */
 
 /*6. Temperature Scale Conversion:
 Define a type for temperature scales: "celsius" or "fahrenheit." Write a function that converts a temperature from 
 one scale to another based on user input. */
 
 /* 7. Shape Recognition:
 Create a type for geometric shapes: "circle," "square," "triangle," or "rectangle." Write a function that takes a 
 shape and calculates its area or perimeter based on the shape type. */
 
 /*8. Season Detector:
 Define a type for seasons: "spring," "summer," "fall," or "winter." Write a function that determines the season based /n 
 on the current month. */
 
 /* 9. Menu Navigation:
 Create a type for menu options: "home," "settings," "profile," or "logout." Write a function that navigates to the /n
 selected menu option. */
 
 /*10. Fruit Basket:
 bash
 Copy code
 Define a type for fruits: "apple," "banana," "orange," or "grape." Write a function that categorizes fruits into /n
 different baskets based on their type.*/ 
 

//Functions
/* Create a game where we start with any random game number. Ask the user to keep guessing the game number until user /n
enters correct value , Recursion */ 

