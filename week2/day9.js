function topK(nums, k) {

a = [];
b = [];
result = [];


  for(let i=0 ; i<nums.length ; i++){
    if(a.indexOf(nums[i])===-1){
      a.push(nums[i]);
      //console.log(a);
    }
  }
  
  for(let j=0 ; j < a.length ; j++){
    let count = 0;
    for (let m=0; m<nums.length ; m++){
      if(a[j]===nums[m]){
        count += 1;
      }
    }
    b.push(count);
  }
  
  
  for(let p = 0 ; p < k ; p++){
    let maxValue = Math.max.apply(null,b);
    let arrayIndex = b.indexOf(Math.max.apply(null,b));
    result.push(a[arrayIndex]);
    b.splice(arrayIndex,1);
    a.splice(arrayIndex,1);
    

    
  }
  
  return result
  
}

topK([3,3,3,3,2,2,1,1,1,1,1],3)
