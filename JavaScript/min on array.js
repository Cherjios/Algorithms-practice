//Write a function that giving an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A
//For example, given A = [ 1,3,6,4,1,2,]then function should return 5
// Given A = [ 1,2,3] function return 4
// given A  = [-1, -3] function return 1

function soluction (A){

    let min  = Math.min(...A);
    let NoPresentN = min + 1;
    let nfound =  true;
    
    while (nfound){

        if(A.includes(NoPresentN)){
            nfound = true
            NoPresentN ++;
            if (NoPresentN === 0){
                NoPresentN = NoPresentN + 1;
            }
            
        }
        else{
            nfound = false;
        }  
    }

   return NoPresentN;
}

//Test

let Array = [1,3,4,5]; // Result 2
let Array1 = [1,2,3,5]; // Result 4
let Array2 = [1,2,3,4]; // Result 5
let Array3 = [-1,-2,-3]; // Result 1
let Array4 = [-1,-2,1]; // Result 2
let Array5 = [1,3,5,7,9,1,8]; // Result 2
console.log("El min value no presented in Array " + Array + " is "+ soluction(Array));
console.log("El min value no presented in Array " + Array1 + " is "+ soluction(Array1));
console.log("El min value no presented in Array " + Array2 + " is "+ soluction(Array2));
console.log("El min value no presented in Array " + Array3 + " is "+ soluction(Array3));
console.log("El min value no presented in Array " + Array4 + " is "+ soluction(Array4));
console.log("El min value no presented in Array " + Array5 + " is "+ soluction(Array5));