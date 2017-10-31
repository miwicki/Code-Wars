'use strict';

function isNice(arr){
 var answer = [];

arr.forEach(function(x,i){

 var plusVersion =  arr[i] + 1;
 var minusVersion = arr[i] - 1;


 if(arr.indexOf(plusVersion) === -1||arr.indexOf(minusVersion) === -1){
   answer.push(1);
 }else{

 }

 i++;

});

if(answer.length === arr.length){return true}else{

return false;
}

}
