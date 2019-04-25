
function sameReverse(num) {
  let str = num.toString();
  let rev = '';
  for (let i = str.length -1 ; i >= 0; i--) {
     rev += str[i];
  }
  if (rev === str) {
    return true
  } else {
    return false
  }
}
