const findMyKeys = (arr) => arr.findIndex(item => item === 'keys');
// creates a function called findMyKeys which takes in one parametr
// the function searches through the array with .findIndex
// helps it self with a helper --- item which sets it equal to keys
//either returns the index of "keys" or -1

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// should print 4
