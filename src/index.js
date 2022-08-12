module.exports = function check(str, bracketsConfig) {
  // if (str.length%2!==0){
  //   // console.log(str,str.length);
  //   return false;
  // }

  console.log(str);
  console.log(bracketsConfig);
  // for (i=0;i<str.length;i++){
  //   if (str[str.length-1]==='('||str[str.length-1]==='['||str[str.length-1]==='{'){
  //     return false;
  //   }
  // }
  const obj = {};
  let stack = [];
  for (const key of bracketsConfig) {
    obj[key[0]] = key[1];
  }
  for (i=0;i<str.length;i++){
    let curr = str[i];
    if (curr === '('||curr === '{'||curr === '['||curr === '|'){
      stack.push(curr);
      console.log(curr);
    } else {
      if (stack.length === 0){
        return false;
      }
      let last = stack[stack.length - 1];
      console.log(last);
      if (obj[curr] === last){
        stack.pop();
      }
      else {
        return false;
      }
    }
  }

    // console.log(str.split(''));
  return stack.length === 0;
  
}
