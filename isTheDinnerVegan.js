const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant')
//creates a function called isTheDinnerVegan that takes in parametr arr
// the function checks every element in the array and if it meets the criteria it returns it

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false