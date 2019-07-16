// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  let value = obj;
  let arr = [];
  // check if value is string then add "" to the string
  if(typeof value === "string"){
    return `"` + value + `"`;
  }
  // check if value/boolean/null is number then change value to string
  if(typeof value === "number" || typeof value === "boolean" || value === null){
    return "" + value;
  }
  // if value is a function return undefined
  if(typeof value === "function"){
    return undefined;
  }
  // if value is null return undefined
  if(value === undefined){
    return String(null);
  }
  // check if is array
  if(Array.isArray(value)){  
    // check if array is empty
    if(value.length === 0){
      return "[]"
    }
    for(let i = 0; i < value.length; i++){
      let index = value[i];
      console.log("this is now in array")
      if(typeof index === "number" || typeof index === "boolean"){
         arr.push(index);
      } else if(typeof index === null || typeof index === undefined){
        arr.push(stringifyJSON(index))
      }
    }
    return '"' + arr + '"';
  }
    // if not then loop through array to get each individual values
    // .
    // .
    // . 
  // check if is object
  // if(typeof value === "object"){
    // check if object is empty
    // .
    // .
    // .

};
