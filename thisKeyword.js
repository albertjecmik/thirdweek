const robot = {
    model: '1E78V2',
    energyLevel: 100,
    // watch out for commas at the end of each key-value element
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
    // has to be with the keyword otherwise reference error -- this broadens the scope to the whole robot object
  };
  console.log(robot.provideInfo())