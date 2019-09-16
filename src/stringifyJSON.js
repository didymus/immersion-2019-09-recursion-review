// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
return '' + obj;
  }

  if(typeof obj === 'string'){
    // return `"` + obj + `"`;
    return `"${obj}"`
  }

if(Array.isArray(obj)) { 
    let arrayValues = [];   
    _.each(obj, function(e){
if(typeof e === 'number'){
  arrayValues.push(e);
} else {
  arrayValues.push(stringifyJSON(e));
}
  })
  return `[${arrayValues}]`;
  }

if(_.isObject(obj)){
  let objectValues = [];
  _.each(obj, function(value, key){
    if (value === undefined || typeof value === 'function') {
    return '{}';
  } else {
 objectValues.push(`${stringifyJSON(key)}:${stringifyJSON(value)}`);
  }
  })
  return `{${objectValues}}`;
}

};
