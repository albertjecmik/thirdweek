const reverseArray = arr => {
    let reversed = [];
    // opens a new array
    for (let i = arr.length - 1; i >= 0; i--){
    // this is a for loop that takes in the length - 1 (because of index) --- i >= 0 is a condition --- from the length every time -1
      reversed.push(arr[i])
      //adds the index string to the new array
    }
    return reversed
  };
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence));