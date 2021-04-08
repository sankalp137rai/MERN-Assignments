//function for printing even number after odd jump
function jumpOfOdd(num){
  let even = 2;
  let jump = -1;
  while(even < num){
    let count = 1;
    while(count <= jump){
      count++;
      even +=2
    }
    process.stdout.write(even + " ");
    jump += 2
    even += 2;
  }
}

jumpOfOdd(100);