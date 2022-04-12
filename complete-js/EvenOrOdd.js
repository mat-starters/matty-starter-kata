//Create a function that takes an integer as an argument 
//and returns "Even" for even numbers or "Odd" for odd numbers.
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

//@param  : integer
//@return : string - either 'even' or 'odd'
//Pseudocode:
//declare a null output
//if input / 2 has no remainder
//set output as even, else set it as odd
//return output

function EvenOrOdd(input) {
    let output = null;
    if (input%2 === 0) {
        output = "Even"
    }
    else {
        output = "Odd"
    }
  return output;
  }

  module.exports = {EvenOrOdd}