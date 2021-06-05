const int = -90966554;

var reverse = function(x) {
    isNegative = false;
    if (x < 0){
        isNegative = true;
    }
    const x1 = Array.from(String(x), Number);
    if(isNegative === true){
        x1.shift();
    }
    temp = [];
    for(let i = 0; i < x1.length; i++){
        temp[i] = x1[x1.length - (i + 1)];
    }
    let result = Number(temp.join(""));
    if(result > 2147483647 || result === undefined){
        return 0;
    }
    if(isNegative === true){
        result = result - (result * 2);
    }
    return result;
};

console.log(reverse(int));