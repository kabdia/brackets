module.exports = function check(str, bracketsConfig) {
  const bracketsMap = {};
  const openBrackets = [];
  const sameBrackets = [];

  bracketsConfig.forEach(([open, close]) => {
      bracketsMap[close] = open; 
      openBrackets.push(open); 
      if (open === close) sameBrackets.push(open); 
  });

  const stack = []; 

  for (let char of str) {
      if (sameBrackets.includes(char)) {
          if (stack[stack.length - 1] === char) {
              stack.pop(); 
          } else {
              stack.push(char); 
          }
      } else if (openBrackets.includes(char)) {
          stack.push(char); 
      } else {
          if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
              return false; 
          }
      }
  }
  return stack.length === 0; 

}


//[['(', ')'], ['[', ']']]
//'()[]'   ({[()]})  (] 
//[{
//]}