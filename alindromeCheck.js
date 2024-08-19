const palindromeChecker = (string) => {
    const firstPalidromeChecker = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const finalPalidromeChecker = firstPalidromeChecker.split('').reverse().join('');
    return firstPalidromeChecker === finalPalidromeChecker;
};

let reversedString = palindromeChecker("MUM");
console.log("Reversed Checker: " + reversedString);