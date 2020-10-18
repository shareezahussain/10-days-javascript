

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    
    let a = expressions[0];
    let p = expressions[1];
    let t = p*p-(16*a)
    
    let result1 = (p-Math.sqrt(Math.pow(p,2)-(16*a)))/4
    let result2 = (p+Math.sqrt(Math.pow(p,2)-(16*a)))/4;
    let arr = [result1,result2];
    //arr['s2'] = result2
    //arr['s1'] = result1;
    
    return arr;
}

