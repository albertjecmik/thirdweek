const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
    //get gets and returns the internal properties of objects
      if (typeof this._energyLevel === 'number'){
        //checks if the value is a number if so executes
        return `My current energy level is ${this._energyLevel}`
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  console.log(robot.energyLevel);