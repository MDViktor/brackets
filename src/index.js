module.exports = function check(str, bracketsConfig) {
  console.log(str);
  console.log(bracketsConfig);
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
        if (stack[stack.length-1] === stack[stack.length-2] && curr==='|'){
          stack.pop();
          stack.pop();
        }
      } else {
        console.log(`Curr${i} else = ${curr}`);
        if (stack.length === 0){
          return false;
        }
        console.log(`Stack${i} else = ${stack}, stack.length= ${stack.length} , obj[curr]=${obj[curr]}`);
        let last = stack[stack.length - 1];
        if (obj[curr] === last){
          stack.pop();
          console.log(`Stack${i} poped = ${stack}, stack.length= ${stack.length}`);
        } else {
          return false;
        }
      }
    // }else if (stack[stack.length-1] === stack[stack.length-2]){
    //   stack.pop();
    // } else {
    //   continue;
    // }
  }
  if (stack.length%2 === 0){
    console.log(stack);
    return true;
  }
  console.log('this', stack.length, stack)
  return stack.length === 0; 
}
