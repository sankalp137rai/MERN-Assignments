//function to tag campus leader based on rating
function campusLeader(credits){
   if(credits >= 7500){
     console.log("Tera Leader");
   }
   else if(7500 > credits && credits >= 6000){
     console.log("Gega Leader");
   }
   else if(6000 > credits && credits >= 4500){
     console.log("Mega Leader");
   }
   else{
     console.log("Rising Star");
   }
}

//calling campus leader funtion for 5500 ratings
let ratings = campusLeader(5500);

console.log("CFC tag: "+ rating);