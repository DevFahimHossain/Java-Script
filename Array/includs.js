 const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(num.includes(5));
  console.log(num.includes(15));
  if (num.includes(7)) {
    console.log("7 is found in the array");
  }
  if (!num.includes(10)) {
    console.log("10 is not found in the array");
  }
  console.log(num); 
