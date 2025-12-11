for(let i = 0; i <= 10; i++) {
    console.log(i);
}

for(let i = 58; i <= 98; i++) {
    if(i % 2 === 0) {
        console.log(i);
    } 
}

for(let i = 67; i <= 97; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }           
}


//sum
let sum = 0;
for(let i = 81; i <= 131; i++) {
    sum= sum + i;
}   
console.log(sum);

// Incrementl Loop
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// Decremental Loop
// for(let i = 10; i <= 10; i--) {
for(let i = 10; i >= 1; i--) {
    console.log(i);
}

/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/
for(let count = 0; count < 60; count++) {
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
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

for(let num  = 61; num <=100; num++) {
    if (num %2 !==0){
        console.log(num);
    }
}

for(let num2 = 78; num2 <= 98; num2++) {
    if (num2 % 2 === 0) { 
        console.log(num2);
 
    }       
}

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sumOdd = 0;
for(let i = 91; i <= 129; i++) {
    if(i % 2 !== 0) {   
        sumOdd = sumOdd + i;
    }
}
console.log(sumOdd);

let sumEven = 0;
for(let j = 51; j <= 85; j++) {
    if(j % 2 === 0) {   
        sumEven = sumEven + j;
    }
}
console.log(sumEven);

/***

Generate a multiplication table for number 9

 */


/*programming hero*/
let number = 9;
for(let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}   

/***

Implement a countdown timer that counts down from 81 to 65.

 */


/*programming hero*/
for(let i = 81; i >= 65; i--) {
    console.log(i);
}
    