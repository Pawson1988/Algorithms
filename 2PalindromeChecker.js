const string = "werddrew";
const string1 = "333222werd334drew222333";

function isPalindrome(x){
    let last = x.length - 1;
    for(let i = 0; i < x.length; i++){
        if (last < i){
            break;
        }
        if(x[i] !== x[last]){
            console.log(x[i], x[last]);
            return false;
        } else {
            console.log(x[i], x[last]);
            last--;
        }
    }
    return true;
}

console.log(isPalindrome(string1));