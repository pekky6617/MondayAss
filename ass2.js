//Determine if a Number is Positive, Negative, or Zero
// let Number = 3;

// if(Number > 0){
//     console.log(Number + " Is Positive");
// }else if(Number < 0){
//     console.log(Number + " Is Negative");
// }else{
//     console.log("Your Number is equals to zero");
// }

//Traffic Light System

//  let color = red;
//  let trafficColorExplained;

//  switch (color) {
//      case 'red':
//          trafficColorExplained = "stop";
//          break;
//      case 'yellow':
//          trafficColorExplained = "Ready";
//          break;
//      case 'green':
//          trafficColorExplained = "Go!!!!";
//          break; 
//      default: "Invalid Color"
//          break;
//  }

//  console.log("color $color means:", trafficColorExplained);

// //Sum of First N Natural Numbers

 
// for(let i = 1; i<= 10; i++){
//     console.log("i:", i);
// }

//Print Multiplication Table
// Number =2;
// let i = 1;
// while (i <= 10){
//     console.log("mutipliction tble of 2: " + Number*i);
//     i++;
// }

//Reverse a Number
// Get the number from the user
let number = 6;
let reversedNumber = 0;
let isNegative = number < 0;

// Work with the absolute value of the number
number = Math.abs(number);

do {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
} while (number > 0);

// Restore the negative sign if the original number was negative
if (isNegative) {
    reversedNumber = -reversedNumber;
}

// Output the reversed number
console.log(`Reversed number: ${reversedNumber}`);
