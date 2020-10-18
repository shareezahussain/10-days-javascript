

function getMaxLessThanK(n,k){

let result = 0;
for(let i=1; i<n; i++)
{   
   for(let j=i+1; j<n+1; j++)
   {
       
          if ((i & j) < k && (i & j) > result){
                result = (i&j);
            }
          
       
       
      
   }
   
}
  return result;
}



