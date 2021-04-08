//function to count digit of givent number
function countDigits(num){
  return num.toString().length;
}

//calling function countDigits on number 123456789
let noOfDigits = countDigits(123);

console.log("Number of digits in given number is: "+ noOfDigits);