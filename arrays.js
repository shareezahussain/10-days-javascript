

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(a, b){return b-a});
    let largestNum = nums[0];
 
    for(let num of nums){
         //6,6,5
       if(num<largestNum )
       {
           return num;
       }
     
    }

}

