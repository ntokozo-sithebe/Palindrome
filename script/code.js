/*let input = 'Madam'

function isPalindrome(Madam){
  //let newInput =[]
    for( n of Madam ){
        newInput.reverse(n)

}return (newInput)
} 
console.log(input.split(''));
console.log(input.reverse);

//console.log(isPalindrome(input))

//console.log(input ? Madam : false) 
*/

//RIGHT SOLUTION

function isPalindrome(word){
    if(word == word.split("").reverse().join("")){
        return `${word} is a palidrome`
    }else{
        return`${word} is not a palidrome`
    }

}

// $ --The dollar ($) sign is a JavaScript identifier, which simply means that it identifies an object in the same way that a name or variable does.