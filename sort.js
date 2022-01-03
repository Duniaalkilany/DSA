/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named updateAnimal that takes in array of animals (strings) and some callback function.
This function should first create a new array. Then iterate over the input array and modify each value based on the callback function provided.
Push each updated animal string into the new array. Return the new array.
HINT: Look at the tests to see how the callback functions are used.
------------------------------------------------------------------------------------------------ */
let test1 = ['BeAr', 'lIon'];

const upper=(element)=>{
return element.toUpperCase()
}

const lower=(element)=>{
    return  element.toLowerCase()
}


function updateAnimal(arr,callBack){
return arr.map((ele)=>{
    return callBack(ele)
})


}

console.log(updateAnimal(test1,upper));
console.log(updateAnimal(test1,lower));


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function called sortNames that takes an array of names and sorts them alphabetically. Capital letters should come before lowercase letters.
For example: 'Cat' would come before 'apple'
------------------------------------------------------------------------------------------------ */
//array.sort(Function [Opt])

// let test2=['able', 'Bob']
let test2=['apple',"Cat"]
function sortNames(arr){
return arr.sort()
}

console.log(sortNames(test2));//['Bob','able']

let myFriends3 = [10, "Sayed", "Mohamed","marah", "90", 9000, 100, 20, "10", -20, -10];

myFriends3.sort()
console.log(myFriends3);
