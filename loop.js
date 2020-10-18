

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
 
function vowelsAndConsonants(s) {
 let vowels = ['a','e','i','o','u'];
 let v_out = "";
 let const_out = "";
 
   for(let i = 0; i<s.length; i++){
       if(vowels.includes(s[i])){
        v_out += '\n' + s[i];
        //console.log(v_out);
       }
       else {
           const_out += '\n' + s[i];
       }
       
   }
   console.log(v_out.replace('\n',''));
   console.log(const_out.replace('\n',''));
}

