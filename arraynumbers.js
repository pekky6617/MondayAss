// let numbers =[2,3,4,5,6,7,9,8];
// let squared = numbers.map((function(num) {
//     return num * num;
// }));

// let evenNumber = numbers.filter((function (num) {
//     return num % 2 == 0;
// }));

// let sumNumbers = numbers.reduce((function (total, num) {
//     return total + num;
// }));
let numbers =[2,3,4,5,6,7,9,8];
let numbersDouble = numbers.map(multiply);

function multiply(value, _index, _arr) {
    value * value;
};
console.log(numbersDouble);
// console.log(evenNumber);
// console.log(sumNumbers);


