const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
     // for loop which starts at zero; doesn't exceed the length of the array; and adds one after every loop
        console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!')
        // prints the line to the console with different arr depending on what i is
    }
  };
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);