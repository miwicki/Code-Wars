function cubeOdd(arr) {
  answer = 0;
  for(i=0;i<arr.length;i++){
    if(isNaN(arr[i])){return undefined;}
    if(arr[i]&1){answer += Math.pow(arr[i], 3);}
  }
  return answer;
}
