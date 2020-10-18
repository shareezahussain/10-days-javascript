

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
let result = "";
for(let i=s.length-1;i>=0; i--)
{  
    result += s[i];
    
}
 try{
     if(typeof s=='string')
    {console.log(result);}
    else {
        throw new(errorMessage(s));
    }
   
   }
   catch(e){
       //console.log(e.message)
    }
}

const errorMessage =(s) => {console.log('s.split is not a function');
    console.log(s);}

