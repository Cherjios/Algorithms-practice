const { khaki } = require("color-name");

function LargestFour(arr) { 

    // code goes here  
    var narr = [];
    let sum  = 0;
   

    if( arr.length < 4){
      for( i = 0; i < arr.length; i++){
        sum += arr[i];
      }
    }
    else{

        for( j = 0; j < arr.length; j++){
  
            if(narr.indexOf(arr[j]) === -1){
              narr.push(arr[j]);
              narr.sort();
          }
      }

      if(narr.length < 4){
          for( i =0; i<arr.length; i++){
              sum += arr[i];
          }
      }
      else{

        for( k = narr.length-1; k > narr.length - 5; k--){
            sum += narr[k];    
          }
      }
        
             
    return sum; 
}
}

var arr1 = [2,5,1,1,1,6,7];
var arr2 = [1,1,1,-5];
var arr3 = [2,2,4,4];
console.log(arr1);
console.log(LargestFour(arr1));
console.log(arr2);
console.log(LargestFour(arr2));
console.log(arr2);
console.log(LargestFour(arr3));
  
    