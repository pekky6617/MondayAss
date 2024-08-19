// Assignment 1: Array Operations
// Task: Create an array of at least 10 integers. Write a function that:
//      Finds and returns the sum of all elements.
//      Filters out and returns a new array containing only the even numbers.
//      Multiplies each element by 2 using map() and returns the new array.
//    Sorts the array in descending order

// Create an array of at least 10 integers.
const ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Write a function that: Finds and returns the sum of all elements.
function sumNumbers (){
     return ten.reduce((num, sum)=> num + sum ,0)
};
const totalSum = sumNumbers();

// Filters out and returns a new array containing only the even numbers.
const evenNumber = () =>
    ten.filter((num) => num % 2 === 0
);
const even = evenNumber();

// Multiplies each element by 2 using map() and returns the new array.
const multiplyNumbers = () => {
    return ten.map((num) => num * 2)
};
const mutiply = multiplyNumbers();

// Sorts the array in descending order
function sortNumbers (){
    return ten.sort((a, b) => b - a); 
};

const sort = sortNumbers();
    

console.log(totalSum);
console.log(even);
console.log(mutiply);
console.log(sort);





