//Selection Construct / Conditional or Decision making construct


// Online purchsing 

const usr_signin = true;
const visa_debit = true;
const usrmail_google = false;
const usrmail_hotmail = true;

if( usrmail_google || usrmail_hotmail) {
    console.log("Welcome! you are logegd in");   
}
if (usr_signin && visa_debit) { 
    console.log("Please proceed to shopping") // advance conditional rendering by react
}

//color modes

let desk_mode = "dark"
let chng_color 

if(desk_mode == "dark") {
    chng_color = "black"
    console.log("Desktop color set to Black");
    
} else if ( desk_mode == "light")  {
    chng_color = "white"
    console.log("Desktop color set to Light");
} else {
    console.log("Desktop color set to default");
}


// +++++++++++++++
//user vote

let candidate = 25;
if (candidate >= 18) {
    console.log(`User can vote`)
} else {
    console.log("you are not aged to perfection");   
}

// color Modes
let mode: string = "dark";
let color;

if (mode == "dark") {
    color = "Black"
} if (mode == "light") {
    color = "ehite"
}
console.log(color);

//Even and odd
let num = 10
if(num % 2 == 0) {
    console.log("number is even");
    
} else {
    console.log("number is odd");
    
}

// Selection Statement If Else using Math Round & random method

let new_val = Math.round(Math.random() * 10) +1
if (new_val >=5) {
    console.log(`Value is ${new_val} >= 5`);
    
} else {
    console.log(`Value is ${new_val} <= 5`);
}

// Nested if Statements: if statement placed inside another if statement
let c : number = 9;
if (c <= 25) {
    if (c==25) {
        console.log("Answer is true");  
    }
} else {
    console.log("number is not true");
}

// if if-else
let bird = "Sparrow"
let isSitting = false;
let ifFlying = true


if(isSitting) {
    console.log(`${bird}is sitting in nest`);   
}
if(ifFlying) {
    console.log(`${bird} is Flying`);   
} else {
    console.log(`${bird}! Nest is empty`);   
}

//
let hasPass : boolean = true
if (hasPass) {
    console.log("Welcome in class")
} else {
    console.log("Student not allowed")
}   

//
const userScore_1 = 500;
if (userScore_1 >= 500) {
    const power = "Jump"
    console.log(`User Power: ${power}`);  
} else {
    const power = "Straight"
    console.log(`User Power: ${power}`);   
}

//Temp
let temp = 30;
if (temp <= 30) {
    console.log(`Temp is moderate`)
} else if (temp > 30) {
    console.log("its extreemly hot");   
}

//Else if (multiple Condition statement)

let bank_bal = 1000;
if(bank_bal < 500) {
    console.log(`you acc balnace is reaching below min`);
    
} else if ( bank_bal < 750) {
    console.log(`you acc balnace is below 1k`);   
} else if ( bank_bal == 1000) {
    console.log("your bal reached min");    
} else {
    console.log("Enjoy banking with us!");   
}

// 
let x1 = 51
if(x1 <= 80 && x1 >= 51) {
    console.log("you are good to perfection");
} else if ( x1 <= 50 && x1 >=30 ) {
    console.log("wow, you are half a century old");
} else {
    console.log("you are a spring chicken");   
}

//Else If Statement ( this is a Multiple condition statement)

let time : number = 11;
if (time >= 1 && time <=3) {
    console.log(`the time is ${time} > 0 and <= 3`); 
} else if (time >=4 && time <=6) {
    console.log(`the time is ${time} >= 4 and <= 6`);
} else if (time >=7 && time <= 10) {
    console.log(`the time is ${time} >= 7 and <= 10`);
} else {
    console.log(" Its off time. see you at work hours");  
}

/* Switch Statetment is an alternative to else if statement and same as else if. 
Example, where we need to use lots of else if... we prefer to use switch statement 
Syntax: 
switch (key) {
case value : 
break;
default:
break;
}
*/

let month = "Feb";
switch (month) {
    case "Jan":    // can use month name in same case as well to match with values jan
        console.log("Jan");
        break;
    case "Feb":   
        console.log("Feb");
        break;
    case "Mar":   
        console.log("Feb");
        break;
}

//
let a1 = 9;
switch (a1) {
    case 1: 
    console.log(" Answer is equal to 1");
    break;
    case 8: 
    console.log(" Answer is equal to 8");
    break;
    case 9: 
    console.log(" Answer is equal to 9");
    break;
    case 2: 
    console.log(" Answer is equal to 2");
    break;
}


/* +++++++++++++++++++++++++ */