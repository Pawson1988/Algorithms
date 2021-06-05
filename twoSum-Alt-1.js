
const arr = [-1, -2, -3, -4, -5];
const targetNum = -9;

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                if(i !== j){
                   return [i, j]; 
                }
             }
         }
     }
}

console.log(twoSum(arr, targetNum));
      
