const robot = {
    energyLevel: 100,
    checkEnergy () {
// shorthand for ES6 --- this is a function with no parametrs inside the object
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();