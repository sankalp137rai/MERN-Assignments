function pattern1(num){
  let row = 1;
  while(num >= row){
    let col = 1;
    while(num - row >= col){
      process.stdout.write("* ");
      col++;
    }
    col = 1;
    let count = 0;
    while(row >= col){
      process.stdout.write(row+count+' ');
      count++;
      col++;
    }
    col = 1;
    count = num-2;
    while(row > col){
      process.stdout.write(count+row+' ');
      count--;
      col++;
    }
    col = 1;
    while(num - row >= col){
      process.stdout.write("* ");
      col++;
    }

    row++;
    process.stdout.write("\n");
  }
}

pattern1(5);