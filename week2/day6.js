function romanToNum(s) {
  let I = 1;
  let V = 5;
  let X = 10;
  let number = 0;
  
  for(i=0;i<s.length;i++){
    
    // V Case
    if(s[i]==='V'){
      if(s[i-1]==='I'){
        number += 3;
      }else{
        number += 5
      }
    }
    
    //X Case
    if(s[i]==='X'){
      if(s[i-1]==='I'){
        number += 8;
      }else{
        number += 10;
      }
    }

    //L Case
    if(s[i]==='L'){
      if(s[i-1]==='X'){
        number += 30;
      }else{
        number += 50;
      }
    }
    
    //C Case
    if(s[i]==='C'){
      if(s[i-1]==='X'){
        number += 80;
      }else{
        number += 100;
      }
    }
    
    //D Case
    if(s[i]==='D'){
      if(s[i-1]==='C'){
        number += 300;
      }else{
        number += 500;
      }
    }    

    //M Case
    if(s[i]==='M'){
      if(s[i-1]==='C'){
        number += 800;
      }else{
        number += 1000;
      }
    }

    if(s[i]==='I'){
      number += 1
    }
    
  }
  
  return number;
  console.log(number);
}

romanToNum('III');

