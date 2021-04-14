let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember} : ${spaceship.crew[crewMember].name}`)
}
// goes through the whole object and takes out the crewmemeber's role after goes through names and prints them in format Role : Name
for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name} : ${spaceship.crew[crewMember].degree}`)
}
// goes through the whole object and takes out the crewmemeber's role after goes through names and prints them in format Name : Degree