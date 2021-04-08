
function pattern1(num){
  let row = 1;
  while(num >= row){
    let col = 1;
    while(num - row >= col){
      process.stdout.write('  ');
      col++;
    }
    col = 1;
    while(row >= col){
      process.stdout.write(col+' ');
      col++;
    }
    col = 1;
    while(row > col){
      process.stdout.write(row - col+' ');
      col++;
    }
    col = 1;
    while(num - row >= col){
      process.stdout.write('  ');
      col++;
    }
    process.stdout.write("\n");
    row++;
  }
}

pattern1(5);
