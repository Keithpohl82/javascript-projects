function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let index = Math.floor(Math.random() * arr.length);
  for(let i = 0; i < arr.length; i++){
    return arr[index];
  }
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;