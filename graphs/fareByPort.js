export default function fareByPort(container, titanic) {
  // Create & Style the `container` div
  const dataContainer = document.createElement('div')
  dataContainer.style.display = 'flex'
  dataContainer.style.flexFlow = 'row wrap'
  dataContainer.style.width = '80%'
  container.appendChild(dataContainer)
  container.style.display = 'flex'
  container.style.flexFlow = 'row nowrap'
  container.style.justifyContent = 'space-around'

  // Create a Legend
  const legend = document.createElement('div')
  const title = document.createElement('h2')
  const key = document.createElement('p')
  
  // Add Content to Legend
  title.innerHTML = 'Cost Per Ticket at Each Port'
  key.innerHTML = 'circle = Queenstown, square = Cherbourg, triangle = Southampton; blue = $$$$$, red = $$$$, orange = $$$, yellow = $$, green = \$'
  
  // Style Legend
  legend.style.width = '200px'
  legend.style.fontFamily = 'Montserrat'

  // Append Title & Key to Legend
  legend.appendChild(title)
  legend.appendChild(key)
  
  let embarkedSort = titanic.passengers.filter(passenger => passenger.embarked !== undefined)
  embarkedSort.sort((passengerOne, passengerTwo) => {
    if (passengerOne.embarked < passengerTwo.embarked) { return -1 }
    if (passengerOne.embarked > passengerTwo.embarked) { return 1 }
  })

  // Loop through passengers
  embarkedSort.forEach((passenger) => {
    // Normalize Fare
    let normalizedFare
    if (typeof passenger.fare === 'number') {
      normalizedFare = passenger.fare / 263
    }

    // Create `element`
    const element = document.createElement('div')
    element.style.margin = '4px'

    // Change `element` appearance based on Port & Fare
    if (passenger.embarked === 'Cherbourg') {
      element.style.height = '10px'
      element.style.width = '10px'
      element.style.backgroundColor = `hsl(${(normalizedFare * (0 - 100)) + 100}, 100%, 45%)`
    } else if (passenger.embarked === 'Queenstown') {
      element.style.height = '10px'
      element.style.width = '10px'
      element.style.borderRadius = '10px'
      element.style.backgroundColor = `hsl(${(normalizedFare * (0 - 100)) + 100}, 100%, 45%)`
    } else if (passenger.embarked === 'Southampton') {
      element.style.height = '0px'
      element.style.width = '0px'
      element.style.borderLeft = '5px solid transparent'
      element.style.borderRight = '5px solid transparent'
      element.style.borderBottom = `10px solid hsl(${(normalizedFare * (0 - 100)) + 100}, 100%, 45%)`
    }

    // Add element to container
    dataContainer.appendChild(element)
  })

  // Add Legend after appending all other nodes
  container.appendChild(legend)
}