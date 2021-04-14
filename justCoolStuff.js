const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item));
// creates a function called justCoolStuff which takes two parametrs
// the function filters firstArray and the parametr is for item which if it is included in secondArray returns it

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

