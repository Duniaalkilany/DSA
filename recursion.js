/*Write a JavaScript program to calculate the factorial of a number
factorial of a number mean ===>n!
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
5!=5*4*3*2*1
*/

function factorial(n){
if(n===0){
    return 1
}else{
    return n*factorial(n-1)
}
}

console.log(factorial(3));

/*4. Write a JavaScript program to compute the sum of an array of integers. Go to the editor
Example : var array = [1, 2, 3, 4, 5, 6] */
function sum (arr){
    console.log('calling it self ');
if (arr.length==1)
{
   
    return arr[0]
    
}else{
    return arr.pop()+sum(arr)
}
}

console.log(sum([1, 2, 3, 4, 5, 6]));

/*Write a JavaScript program to compute the exponent of a number.

Note: The exponent of a number says how many times the base number is used as a factor.
8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent. */



