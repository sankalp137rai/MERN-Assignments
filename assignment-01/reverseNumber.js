//function to reverse a number
function reverseNumber(num){
  return num.toString().split("").reverse().join("");
}

//function to reverse a number
// function reverseNumber(num){
//   let s = "";
//   while(num%10>=1){
//     s += num%10;
//     num/=10; 
//   }
//   return s;
// }

let rnumber = reverseNumber(12345);

console.log("The reversed number is: "+rnumber);