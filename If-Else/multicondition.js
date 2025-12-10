const price = 10000;
if (price >= 5000) {
  const discount = price * 0.1;
  console.log(`You get a discount of ${discount}`);  
  console.log(`Final price after discount is ${price - discount}`);
} else {
  console.log("No discount available.");  
}

// Ternary operator version
// simple version
const age = 10;
age >= 18 ? console.log("You are an adult.") : console.log("You are a minor.");

// complex version
let price2 = 10000;
const isMember = false;

price2 = isMember === true ? 0 : price2 + 100;