const robot = {
    _energyLevel: 100,
    // _energyLevel should not be changed
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  robot._energyLevel = 'high'
  // reassignes the _energyLevel key to 'high' value
  robot.recharge()
  // prints 'Recharged! Energy is currently at high30%.'  