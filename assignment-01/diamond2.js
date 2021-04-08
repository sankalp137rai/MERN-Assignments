function diamond(num){
  let row = 1;
  let row_mirror = 1;
  while(row_mirror <= 2*num-1){
    let col = 1;
    let col_mirror = 1;
    while(col_mirror <= 2*num-1){
      if(col <= row)
        process.stdout.write("*  ");
      else
        process.stdout.write("   ");
      if(col_mirror < num) col++;
      else col--;
      col_mirror++;
    }
    if(row_mirror < num){
      row++;
    }
    else{
      row--;
    }
    process.stdout.write("\n");
    row_mirror++;
  }
}

diamond(5);