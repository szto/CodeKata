function twoSum(nums, target) {
  for (let i=0 ; i < nums.length ; i++  ){
    for(let j=0 ; j <nums.length ; j++ ){
      if(i!==j){
        if(target == nums[i]+nums[j]){
          return [i,j]
        }
      }
    }
  }
}
