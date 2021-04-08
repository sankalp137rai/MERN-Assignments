function pattern(n){
  let row = 1;
  let row_mirr = 1;
  while(row_mirr <= 2*n-1){
    let col = 1;
    col_mirr = 1;
    while(col_mirr <= 2*n-1){
      if(col-1 <= n-row){
        process.stdout.write("*  ");
      }
      else{
        process.stdout.write("   ");
      }
      if(col_mirr < n) col++;
      else col--;
      col_mirr++;
    }
    process.stdout.write("\n");
    if(row_mirr < n) row++;
    else row--;
    row_mirr++;
  }
}

pattern(5)