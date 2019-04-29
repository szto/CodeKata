function getMaxArea(height) {
  var multiply = [];
  
  for(let i = 0 ; i < height.length ; i++){
    for(let j = i+1 ; j < height.length ; j++){
      let smallerValue = Math.min(height[i],height[j]);
      let width = j-i;
      //console.log(smallerValue, width);
      multiply.push(smallerValue * width);
    }
  }
  
  console.log(multiply)
  return Math.max.apply(null, multiply);
}

a = [1, 8, 6, 2, 5, 4, 8, 3, 7];
getMaxArea(a);
