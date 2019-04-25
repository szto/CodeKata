

function moreThanHalf(nums) {
  
  for( let i  = 0 ; i < nums.length ; i++){
    let count = 0;
    for ( let j = 0 ; j < nums.length  ; j++){
      if(nums[i]===nums[j]){
        count += 1;
        console.log(count);
        if(count>(nums.length-1)/2){
          return nums[i];
        }
      }
  
    }
  }
}

moreThanHalf([2,2,1,1,1,2,2])
