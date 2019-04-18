let testS = "abaaaa";
//let aa1 = "abcdefghcijklmnop"

getLengthOfStr(testS);
//getLengthOfStr(aa1);


function getLengthOfStr(str) {

var compare = [];
var compareNum = [];

if(str.length===0){
  return 0;
}

  for(let i =0 ; i < str.length-1 ; i++){
    let p=i;
    let k=0;
    for(let j = i+1 ; j < str.length ; j++ ){
      

      if(str[p]===str[j]){
        if(compare.length === 0){
          compare.push(j);
          p=j;
          k++;
        }else {
          compare.push(j-p);
          p=j;
          k++;
        }
      }

      
      // New way
      /**
      if(str[p]===str[j]){
        compare.push(str.slice(p,j));
        p=j;
        k++;
        
      }else{

      }
      **/
    }
    if(k>0){
      console.log(compare.push(str.slice(p,str.length).length));
    }
  }
  
  if(compare.length===0){
    compare.push(str.length);
  }
  
  console.log(compare);

  return Math.max.apply(null, compare)

}
