
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



   
