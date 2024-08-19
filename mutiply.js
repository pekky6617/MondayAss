// let number = 2;
// let i = 10;
// while (i >= 0) {
//     console.log("Multiplication Table Of 2: " + (number* i));
//     i--;    
// }
// //Exercise 3: Function to Convert Fahrenheit to Celsius

// const fahrenheitToCelsius = (F) => {
//     return (F - 32) * 5 / 9;
// } 
// Function to check if a string is a palindrome
const isPalindrome = (str) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
};

// Example usage
let str = "A man, a plan, a canal, Panama";
console.log('Is the string "${str}" a palindrome? ${isPalindrome(str)}');