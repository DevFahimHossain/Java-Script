/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/
let count = 0;
while (count < 60) {
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    count++;
} 

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
let number = 78;
while (number <= 98) {
    if (number % 2 === 0) { 
        console.log(number);
    }
    number++;
}   

/*programming hero*/
let num = 61; 
while (num <= 100) {
    if (num % 2 !== 0) {
        console.log(num);
    } 
    num++;
}
/***
Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
let start = 206;
let sumEven = 0;    
while (start <= 311) {
    if (start % 2 === 0) {
        sumEven += start;  
    }
    start++;
}
console.log("Sum of all even numbers from 206 to 311 is:", sumEven);  

/*programming hero*/
let begin = 81;
let sumOdd = 0;
while (begin <= 131) {
    if (begin % 2 !== 0) {
        sumOdd += begin;  
    } 
    begin++;
}
console.log("Sum of all odd numbers from 81 to 131 is:", sumOdd);


/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


/*programming hero*/
let multiplier = 1;
while (multiplier <= 10) {
    console.log(`5 x ${multiplier} = ${5 * multiplier}`);
    multiplier++;
}


/***

Implement a countdown timer that counts down from 21 to 15.

 */


/*programming hero*/
let countdown = 21;
while (countdown >= 15) {
    console.log(countdown);
    countdown--;
} 
