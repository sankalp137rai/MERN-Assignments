//function to calculate Simple Interest
function calculateSI(p,r,t){
  return p*r*t/100;
}
//input desired values(principal amount, rate, and year) to get SI
let si = calculateSI(1000,10,2)

console.log("Simple Interest: "+ si);