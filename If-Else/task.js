/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerprice = 300;

if (burgerprice >= 500) {
    console.log("You get a free coke with your burger");
} 
  else {  
    console.log("pay extra for coke " + (burgerprice + 30));
}


/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const weight = 80; // in kg
const height = 1.75; // in meters
const bmi = weight / (height * height);

if (bmi < 18.5) 
  {  console.log("You are underweight.");
}
  else if (bmi >= 18.5 && bmi <= 24.9) 
  {  console.log("You are normal.");
}   
  else if (bmi >= 25 && bmi <= 29.9) 
  {  console.log("You are overweight.");
} 
  else {
    console.log("You are obese.");
}   


/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const score = 85;

if (score >= 90 && score <= 100) {  
    console.log("Your grade is A.");
}
  else if (score >= 80 && score <= 89) {
    console.log("Your grade is B.");
}
  else if (score >= 70 && score <= 79) {
    console.log("Your grade is C.");
}   
  else if (score >= 60 && score <= 69) {
    console.log("Your grade is D.");
}
  else {
    console.log("Your grade is F.");
}


/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
const myScore = 85;
const friendScore = 55;   
if (myScore > 80) {
    if (friendScore > 80) {
        console.log("Let's go for lunch!");
    } 
    else if (friendScore >= 60) {
        console.log("Good luck next time.");
    }
    else if (friendScore >= 40) {
        console.log("Keep your friend's message unseen.");
    } 
    else {
        console.log("Block your friend.");
    }
} else {
    console.log("Go home and sleep and act sad.");
}


/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1 = 10;
const num2 = 20;
let result;     
if (num1 > num2) {
    result = num1 * 2;
} else {
    result = num1 + num2;
}   

// Using ternary operator
result = (num1 > num2) ? (num1 * 2) : (num1 + num2);  
console.log(result);
console.log(result);  


/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 24;
let fare = 800;   
if (age < 10) {
    fare = 0;
}
  else if (age >= 10 && age < 25) {
    fare = fare * 0.5;
}  
  else if (age >= 60) {
    fare = fare * 0.85;
}     
  else {
    fare = fare;
}   
console.log("Your ticket fare is: " + fare + " tk");  


/***
Leap Year Checker
    - A year is a leap year if it is divisible by 4, but not divisible by 100, unless it is also divisible by 400.
    - Write a program to check if a given year is a leap year or not. 
*/

const year = 2021;  
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
} 


