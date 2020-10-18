

function getLetter(s) {
    let letter;
    // Write your code here
   
    
    switch(true)
    {
        case 'aeiou'.includes(s[0]): 
        letter =  'A';
        
        break;
       
       case 'b,c,f,d,g'.includes(s[0]):
       letter = 'B';
       break;

       case 'h,j,k,l,m'.includes(s[0]):
       letter = 'C'
       break;

       case 'n,p,q,r,s,t,v,w,,x,y,z'.includes(s[0]):
       letter = 'D'
       break;
        
    }
    return letter;
}

