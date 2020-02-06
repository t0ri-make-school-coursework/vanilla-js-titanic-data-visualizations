import Passenger from './Passenger.js'

class Titanic {
  constructor() {
    this.totalPassengers = 0
    this.deaths = 0
    this.survivors = 0

    this.classes = {
      deaths: {},
      total: {}
    }
    this.passengers = []
    this.ages = {}
    
    this.elements = []
    this.passengerElements = document.createElement('div')
    this.getData()
  }


  getData() {
    // Pull data from JSON file
    fetch('./data.json')
      .then(res => res.json())
      .then(json => this.handleData(json))
      .catch()
  }


  handleData(data) {
    data.forEach((passenger, index) => {
      // Create a new Passenger and append it to `this.passengers`
      this.passengers.push(new Passenger(passenger))

      // Update `this.totalPassengers`
      this.totalPassengers++

      // Update `this.classes`
      this.calculateClasses(passenger)
      
      // Update `this.survivors` and `this.deaths`
      this.calculateSurvivors(passenger)

      // Update `this.ages`
      this.getAges(passenger)
      
      // Create new Element for Passenger
      this.newPassengerElement(index)
    })

    // Set `this.passengerElements` to body
    this.showVisualizer()
  }
  
  showVisualizer() {
    // Set #passenger-elements on `passengerElements`
    this.passengerElements.setAttribute('id', 'passenger-elements')
    // Style `passengerElements`
    this.passengerElements.style.display = 'flex'
    this.passengerElements.style.flexFlow = 'row wrap'
    this.passengerElements.style.width = "75%"
    
    // Append `passengerElements` to the body
    const container = document.getElementById('visualizer-container')
    container.appendChild(this.passengerElements)
  }

  newPassengerElement(index) {
    // Create a new Element
    const element = document.createElement('div')

    // Style Element
    element.style.width = '14px'
    element.style.height = '14px'
    element.style.backgroundColor = 'grey'
    element.style.margin = '1px'
    element.style.transition = '200ms'
    element.style.boxSizing = 'border-box'

    // Assign its ID
    element.setAttribute('data-index', index)

    // Append it to `this.elements` and `this.passengerElements`
    this.elements.push(element)
    this.passengerElements.appendChild(element)
  }


  calculateClasses(passenger) {
    // Update `this.classes.total`
    if (passenger.fields.pclass in this.classes.total) {
      this.classes.total[passenger.fields.pclass] += 1
    } else {
      this.classes.total[passenger.fields.pclass] = 1
    }

    // Update `this.classes.deaths`
    if (passenger.fields.survived === 'No') {
      if (passenger.fields.pclass in this.classes.deaths) {
        this.classes.deaths[passenger.fields.pclass] += 1
      } else {
        this.classes.deaths[passenger.fields.pclass] = 1
      }
    }
  }


  calculateSurvivors(passenger) {
    // Update `this.survivors` and `this.deaths`
    if (passenger.fields.survived === 'Yes') {
      this.survivors++
    }
    if (passenger.fields.survived === 'No') {
      this.deaths++
    }
  }


  getAges(passenger) {
    // Get all ages
    if (passenger.fields.age in this.ages) {
      this.ages[passenger.fields.age] += 1
    } else {
      this.ages[passenger.fields.age] = 1
    }
  }
}

export default Titanic