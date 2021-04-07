//calculating GCD
function calculateGCD(num1,num2){
  if(num1>num2){
    while(num1%num2!=0){
      let rem = num1%num2;
      num1 = num2;
      num2 = rem;
    }
    return num2;
  }
  else{
    while(num2%num1!=0){
      let rem = num1%num2;
      num2 = num1;
      num1 = rem;
    }
    return num1;
  }
}
//calling calculateGCD of 12 and 8
let gcd = calculateGCD(12,8);

console.log("GCD : "+ gcd);