module.exports = function check(str, bracketsConfig) {
  // your solution
  let open = bracketsConfig.map(function(item){
    return item[0];
  });
  let close = bracketsConfig.map(function(item){
    return item[1];
  });
  let stack = [];
  str.split('').forEach(function(item, i) {
      if(open.includes(item) && close.includes(item)){
        if(stack.includes(item)){
          stack.splice(-1,1);
        }else{
          stack.push(item);
        }
      }else if(open.includes(item)){
          stack.push(item);
      }else if(close.includes(item)){ 
          let pair = open[close.indexOf(item)];
          if(stack[stack.length - 1] === pair){ 
            stack.splice(-1,1) 
          }else{
            stack.push(item)
          }

      }
  

  });
  return (stack.length === 0) ? true : false;
}
