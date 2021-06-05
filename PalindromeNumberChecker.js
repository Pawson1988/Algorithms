
let num = 234567765432;

var isPalindrome = function(x) {
    let xNum = String(x).split("").reverse().join("");
    return Number(xNum) === x;
};

console.log(isPalindrome(num));