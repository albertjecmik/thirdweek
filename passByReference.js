let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil'
  };
  //changes the 'Fuel Type' to 'avocado oil'
  
  let remotelyDisable = obj => {
    obj.disabled = true
  };
  // creates a new key called disabled with value true
  
  greenEnergy(spaceship)
  //calls the function greenEnergy on object spaceship
  remotelyDisable(spaceship)
  //calls the function remotelyDisable on object spaceship
  
  console.log(spaceship)
  //prints the changed object spaceship