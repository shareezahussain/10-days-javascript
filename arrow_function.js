

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
/*function modifyArray(nums) {

    let result = [];
    for(let num of nums)
    {
             if(num%2 == 0)
             {
                 result.push(num*2);
             }
        
            else if(num%2 == 1){
                result.push(num*3);
            }
        

        
    }
    return result;
    
}*/

const modifyArray = (nums)=>{
    let result = [];
    nums.map(num=>
     
    (num%2==0) ? result.push(num*2): result.push(num*3));
    return result;
}
