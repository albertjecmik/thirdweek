const robot = {
    model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);
console.log(robotKeys);
//prints the keys of the object

const robotEntries = Object.entries(robot);
console.log(robotEntries);
//prints the keys and values of the object

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);
//prints the object and the added values