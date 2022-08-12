module.exports = function check(str, bracketsConfig) {
  console.log(str);
  const obj = {};
  let stack = [];
  for (const key of bracketsConfig) {
    obj[key[1]] = key[0];
  }
  console.log(obj);
  for (i=0;i<str.length;i++){
    let curr = str[i];
    if (curr === '('||curr === '{'||curr === '['||curr === '|'){
      stack.push(curr);
      console.log(stack.length);
    } else {
      if (stack.length === 0){
        return false;
      }
      let last = stack[stack.length - 1];
      console.log(last);
      
      
      console.log(obj[curr]);
      if (obj[curr] === last){
        stack.pop();
      }
      else {
        return false;
      }
    }
  }
  console.log('this', stack.length)
  return stack.length === 0; 
}
