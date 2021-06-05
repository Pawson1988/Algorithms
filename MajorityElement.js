// Assume there is always a majority element

const el = [4, 4, 4, 5,, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 4, 7];

var majorityElement = function(nums) {
    let obj = {};
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if(obj[num] === undefined){
            obj[num] = 1;
        } else {
            obj[num] += 1;
        }
    }
    
    obj1 = Object.entries(obj);
    let max = 0;
    let result = 0;
    for(let i = 0; i < obj1.length; i++){
       if(obj1[i][1] > max){
           max = obj1[i][1];
           result = obj1[i][0];
       }
   }
    return result;
};

console.log(majorityElement(el));