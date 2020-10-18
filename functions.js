/*
 * Create the function factorial here
 */
 
//solution 1
function factorial_1(n){
  let temp = n;
  let result = 0;
  for(var i=0;i<=n; i++)
   { 
      n = n-1; //2
      result = temp * n;//360*2
      temp = result;
   }
    return result;
}
//console.log(factorial(6));

//solution 2
function factorial_2(n){
  
  let result = 0;
  let temp = 1;
  for(var i=n;i>0; i--)
   { 
      
      result = i * temp;
      temp = result;
   }
    return result;
}
