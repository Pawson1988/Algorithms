

const arr = [-1, -2, -3, -4, -5];
const targetNum = -9;

var twoSum = function(nums, target) {
for(let i = 0; i < nums.length; i++){
    if(nums[i] + nums[i+1] === target){
        return [i, i + 1];
    } else {
        for(let j = i; j < nums.length; j++){
            console.log(i, (j + 1));
        if(nums[i] + nums[j + 1] === target && i !== j){
            return [i, (j + 1)];
                }    
            }       
        }
    }
};

console.log(twoSum(arr, targetNum));