let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  spaceship.color = 'glorious gold';
  // changes the color property
  spaceship.numEngines = 6;
  // adds a property 'numEngines' and adds a value of 6 to it
  delete spaceship['Secret Mission'];
  // deletes a property and value called 'Secret Mission' from spaceship object