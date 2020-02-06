import Titanic from './Titanic.js'
import survivalByClassAndSex from './graphs/survivalByClassAndSex.js'
import survivalByAgeAndSex from './graphs/survivalByAgeAndSex.js'
import fareByPort from './graphs/fareByPort.js'
import survivalOfJohns from './graphs/survivalOfJohns.js'

{
  const body = document.querySelector('body')

  // Create new Titanic object
  const titanic = new Titanic()
  
  // Controls
  let showGender = false
  let showEmbarked = false
  let showSurvived = false


  // Helper method to style buttons
  function selectButton(element, state) {
    if (state) {
      element.classList.add('btn-selected')
    } else {
      element.classList.remove('btn-selected')
    }
  }
  

  // Set Visualizer Buttons
  function createVisualizerButtons() {
    // Create `btnContainer` and append to DOM
    const visualizerRightContainer = document.getElementById('visualizer-right-container')
    const btnContainer = document.createElement('div')
    visualizerRightContainer.appendChild(btnContainer)
  
    // Create `genderBtn`
    const genderBtn = document.createElement('button')
    genderBtn.id = 'btn-gender'
    genderBtn.innerHTML = 'Show Gender'
    genderBtn.addEventListener('click', e => {
      showGender = !showGender
      e.target.classList.add('btn-selected')
      selectButton(e.target, showGender)
      visualizeByGender()
    })
    btnContainer.appendChild(genderBtn)
  
    // Create `embarkedBtn`
    const embarkedBtn = document.createElement('button')
    embarkedBtn.id = 'btn-embarked'
    embarkedBtn.innerHTML = 'Show Ports'
    embarkedBtn.addEventListener('click', e => {
      showEmbarked = !showEmbarked
      selectButton(e.target, showEmbarked)
      visualizeByEmbarked()
    })
    btnContainer.appendChild(embarkedBtn)
  
    // Create `survivedBtn`
    const survivedBtn = document.createElement('button')
    survivedBtn.id = 'btn-survived'
    survivedBtn.innerHTML = 'Show Survivors'
    survivedBtn.addEventListener('click', e => {
      showSurvived = !showSurvived
      selectButton(e.target, showSurvived)
      visualizeBySurvival()
    })
    btnContainer.appendChild(survivedBtn)
  }


  // Set Visualizer to color squares by Passenger Gender
  function visualizeByGender() {
    titanic.passengers.forEach((passenger, index) => {
      const element = titanic.elements[index]
      const color = passenger.sex === 'male' ? 'steelblue' : 'lightpink'
      element.style.backgroundColor = showGender ? color : 'grey'
    })
  }


  // Set visualizer to color squares by Port
  function visualizeByEmbarked() {
    titanic.passengers.forEach((passenger, index) => {
      const element = titanic.elements[index]
      let color = ''
      switch (passenger.embarked) {
        case 'Cherbourg':
          color = 'steelblue'
          break
        case 'Southampton':
          color = 'powderblue'
          break
        case 'Queenstown':
          color = 'darkseagreen'
          break
      }
      element.style.backgroundColor = showEmbarked ? color : 'grey'
    })
  }


  // Set visualizer to color squares by Passenger Survival
  function visualizeBySurvival() {
    titanic.passengers.forEach((passenger, index) => {
      const element = titanic.elements[index]
      let color = passenger.survived === true ? 'darkseagreen' : 'tomato'
      element.style.backgroundColor = showSurvived ? color : 'grey'
    })
  }


  // Render container that shows Passenger data on mouseover
  function displayPassengerData() {
    const visualizerContainer = document.getElementById('visualizer-container')
    visualizerContainer.style.display = 'flex'
    visualizerContainer.style.flexFlow = 'row-reverse nowrap'
    visualizerContainer.style.justifyContent = 'space-around'
  
    // Create `container` to hold passenger data
    let rightContainer = document.createElement('div')
    let container = document.createElement('div')
    container.setAttribute('id', 'passenger-data')
    rightContainer.setAttribute('id', 'visualizer-right-container')
  
    // Append `container` to DOM
    visualizerContainer.appendChild(rightContainer)
    rightContainer.appendChild(container)
  
    // Create elements to hold passenger name
    let name = document.createElement('h3')
    let age = document.createElement('p')
    let fare = document.createElement('p')
    let embarked = document.createElement('p')
    let survived = document.createElement('p')

    // Set Default Text
    name.innerHTML = 'Hover over a Passenger to learn more about them.'
  
    // Append passenger data elements to DOM
    container.appendChild(name)
    container.appendChild(age)
    container.appendChild(fare)
    container.appendChild(embarked)
    container.appendChild(survived)
  
    body.addEventListener('mouseover', (e) => {
      if (e.target.hasAttribute('data-index')) {
        // Get Passenger
        const passenger = titanic.passengers[e.target.getAttribute('data-index')]
  
        // Set elements to hold passenger data
        name.innerHTML = passenger.name
        age.innerHTML = `${passenger.age} year old ${passenger.sex}`
        fare.innerHTML = `Paid $${passenger.fare} for a ticket in Class ${passenger.class}`
        embarked.innerHTML = `Boarded ship in ${passenger.embarked}`
        survived.innerHTML = passenger.survived === true ? 'Survived' : 'Did Not Survive'
      }
    })
  }


  // Calls necessary methods to begin Visualization
  function renderVisualization() {
    displayPassengerData()
    createVisualizerButtons()
  }


  // Create graph that renders survival by class & sex
  function renderSurvivalByClassAndSex() {
    const survivalByClassAndSexContainer = document.getElementById('survival-graph-container')
    
    const title = document.createElement('h2')
    title.innerHTML = 'Survival of Men & Women by Ticket Class'
    title.style.textAlign = 'center'
    title.style.color = '#892617'
    survivalByClassAndSexContainer.appendChild(title)

    const key = document.createElement('p')
    key.innerHTML = 'survivors are colored by sex, deaths are grey'
    key.style.textAlign = 'center'
    survivalByClassAndSexContainer.appendChild(key)

    const graphContainer = document.createElement('div')
    survivalByClassAndSexContainer.appendChild(graphContainer)
    survivalByClassAndSex(graphContainer, titanic)
  }


  // Create graph that renders survival by age & sex
  function renderSurvivalByAgeAndSex() {
    const survivalByAgeAndSexContainer = document.getElementById('age-graph-container')

    const title = document.createElement('h2')
    title.innerHTML = 'Survival of Passengers by Age Group'
    title.style.textAlign = 'center'
    title.style.color = '#892817'
    survivalByAgeAndSexContainer.appendChild(title)

    const key = document.createElement('p')
    key.innerHTML = 'survivors outlined in black'
    key.style.textAlign = 'center'
    survivalByAgeAndSexContainer.appendChild(key)

    const graphContainer = document.createElement('div')
    survivalByAgeAndSexContainer.appendChild(graphContainer)
    survivalByAgeAndSex(graphContainer, titanic)
  }


  // Create graph that renders survival of men named John
  function renderSurvivalOfJohns() {
    const survivalOfJohnsContainer = document.getElementById('johns-graph-container')

    const title = document.createElement('h2')
    title.innerHTML = 'Survival of Men Named Jo(h)n'
    title.style.textAlign = 'center'
    title.style.color = '#892817'
    survivalOfJohnsContainer.appendChild(title)

    const key = document.createElement('p')
    key.innerHTML = 'survivors outlined in black'
    key.style.textAlign = 'center'
    survivalOfJohnsContainer.appendChild(key)

    const graphContainer = document.createElement('div')
    survivalOfJohnsContainer.appendChild(graphContainer)
    survivalOfJohns(graphContainer, titanic)
  }


  // Create graph that renders cost of fare by port
  function renderFareByPort() {
    const fareByPortContainer = document.getElementById('fare-graph-container')

    const title = document.createElement('h2')
    title.innerHTML = 'Cost of Fare by Port'
    title.style.textAlign = 'center'
    title.style.color = '#892817'
    fareByPortContainer.appendChild(title)

    const graphContainer = document.createElement('div')
    fareByPortContainer.appendChild(graphContainer)
    fareByPort(graphContainer, titanic)
  }

  // Render graphs
  function renderGraphs() {
    renderSurvivalByClassAndSex()
    renderSurvivalByAgeAndSex()
    renderSurvivalOfJohns()
    renderFareByPort()
  }

  renderVisualization()
  setTimeout(() => renderGraphs(), 150) // wait to render graphs until data is handled
}

