class Passenger {
  constructor(passenger) {
    const { name, fare, sex, pclass, survived, age, embarked, sibsp, parch } = passenger.fields
    this.name = name
    this.age = age
    this.sex = sex
    this.class = pclass
    this.fare = fare
    this.family = sibsp + parch
    this.embarked = this.locationEmbarked(embarked)
    this.survived = this.didSurvive(survived)
  }


  didSurvive(survived) {
    // Return Boolean value for survival status
    if (survived === 'Yes') {
      return true
    }
    return false
  }

  
  locationEmbarked(embarked) {
    // Convert character string to port name
    if (embarked === 'C') {
      return 'Cherbourg'
    } else if (embarked === 'Q') {
      return 'Queenstown'
    } else if (embarked === 'S') {
      return 'Southampton'
    }
  }
}

export default Passenger