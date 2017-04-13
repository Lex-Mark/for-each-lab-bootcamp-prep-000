const myarray=['1','2','3'];
function iterativeLog(array){
  array.forEach(function (element,index,array){
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  myarray.forEach(callback);
  return myarray;
}
function doToArray(array, callback){
  array.forEach(callback);
}