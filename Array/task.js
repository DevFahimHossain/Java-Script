// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruits[3]); 
fruits[2] = 'jambura';
console.log(fruits);

// 
// // 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const touristDestinations = ['Paris', 'New York', 'Tokyo'];
touristDestinations.push('London');
touristDestinations.push('Sydney', 'Rome');
touristDestinations.pop();
console.log(touristDestinations);

// 3. Checking Array Membership with ‘includes’
// Instructions:
// 
// Create an array of books containing different book.
// 
// Use the includes method to check if the array contains a javascript book.
// 
// Print a message to the console indicating whether the element is present in the array or not.

const books = ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'JavaScript: The Good Parts', 'Moby Dick'];

const hasJavaScriptBook = books.includes('JavaScript: The Good Parts');
if (hasJavaScriptBook) {
    console.log('The array contains a JavaScript book.');
} else {
    console.log('The array does not contain a JavaScript book.');
} 


// 4. Checking if it's an Array
// Instructions:
// 
// Create different variables, each containing either an array or a non-array value.
// 
// Now use isArray to check if each variable is an array.
// 
// Print a message to the console indicating whether each variable is an array or not.


const arrayVar = [1, 2, 3];
const nonArrayVar = "Hello, world!";

if (Array.isArray(arrayVar)) {
    console.log('arrayVar is an array.');
} else {
    console.log('arrayVar is not an array.');
}

if (Array.isArray(nonArrayVar)) {
    console.log('nonArrayVar is an array.');
} else {
    console.log('nonArrayVar is not an array.');
}

// 4. Checking if it's an Array
// Instructions:
// 
// Create different variables, each containing either an array or a non-array value.
// 
// Now use isArray to check if each variable is an array.
// 
// Print a message to the console indicating whether each variable is an array or not.

const arrayVar1 = [1, 2, 3];
const nonArrayVar1 = "Hello, world!";
if (Array.isArray(arrayVar1)) {
    console.log('arrayVar1 is an array.');
} else {
    console.log('arrayVar1 is not an array.');
}  

if (Array.isArray(nonArrayVar1)) {
    console.log('nonArrayVar1 is an array.');
} else {
    console.log('nonArrayVar1 is not an array.');
} 
  