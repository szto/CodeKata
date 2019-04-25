function isValid(s) {
  var keyValue = {
    '(' : 1,
    ')' : -1,
    '[' : 2,
    ']' : -2,
    '{' : 3,
    '}' : -3
  }
  let sum = 0;
  let j = 0;
  let minus = 0;
  if(keyValue[s[0]]<0){
    return false
  }
  for (let i = 0 ; i < s.length ; i++){
    console.log(keyValue[s[i]])
    if(keyValue[s[i]]>0){
      j += 1;
      sum += keyValue[s[i]];
      minus = 0;
    }else if(keyValue[s[i]]<0){
      minus += 1;
      let m = 2*(minus-1)+1;
      let j = i-m
      console.log(m, keyValue[s[i]], keyValue[s[j]]);
      if(keyValue[i]+keyValue[j]===0){
        return false
      }else{
        sum += keyValue[s[i]];
        j -= -1;
      }
      console.log(sum);
    }
  }
  
  if(sum===0){
    return true
  }
}

console.log(isValid("(())[]"))

