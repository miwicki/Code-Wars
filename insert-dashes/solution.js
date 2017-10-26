'use strict';

function insertDash(num) {
   var numString = num.toString();
   var numArray = numString.split('');
   for (var i = 0; i < numArray.length; i++){
     if (numArray[i] % 2 === 1 && numArray[i + 1] % 2 === 1){
     numArray[i] += '-';
     }
    }
   return numArray.join('');
}
