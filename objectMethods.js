let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage);
    //creates a method .retreat which prints the retreat message
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
    //creates a method .takeOff which prints 'Spim... Borp... Glix... Blastoff!'
  }
}

alienShip.retreat();
//calls the .retreat
alienShip.takeOff();
//calls the .takeOff