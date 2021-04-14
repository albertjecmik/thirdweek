const convertToBaby = arr => {
    let newAnimals = [];
    // creates a new array
    for (let i = 0; i < arr.length; i++){
    //for loop which starts at i=0, continues until the length fo the array and adds one at the of each loop
        newAnimals.push('baby ' + arr[i]);
        //adds 'baby' to the new array with the element that is just in the for loop
    }
    return newAnimals
  };
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  