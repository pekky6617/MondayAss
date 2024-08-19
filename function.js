// Exercise 1: Function to Calculate the Area of a Rectangle

// function areaOfRectangle (length, width){
//     return length * width;
// }

// let Area =areaOfRectangle(5,6);
// console.log("AREA OF RECTANGLE: " + Area);

// Exercise 2: Arrow Function to Calculate the Area of a Circle

// const areaOfCircle = (radius) =>{
//     const pi = Math.PI;
//     pi * radius * radius;
// };

// let Area = areaOfCircle(7);
// console.log("Area Of Circle: " + Area);

//Exercise 3: Function to Convert Fahrenheit to Celsius

// const fahrenheitToCelsius = (F) => {
//     return (F - 32) * 5 / 9;
// } ;

// let Convert = fahrenheitToCelsius (40);
// console.log("Conversion: " + Convert);

//Exercise 4: Arrow Function to Check if a String is a Palindrome

const palindromeChecker = (string) => {
    const firstPalidromeChecker = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const finalPalidromeChecker = firstPalidromeChecker.split('').reverse().join('');
    return firstPalidromeChecker === finalPalidromeChecker;
};

let reversedString = palindromeChecker("MUM");
console.log("Reversed Checker: " + reversedString);