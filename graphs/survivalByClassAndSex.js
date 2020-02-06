// this file makes me want to cry too, it's okay -- we can both hate it

export default function survivalByClassAndSex(container, titanic) {
  // Style the `container` div
  container.style.display = 'flex'
  
  console.log(titanic)



  // Create `left` & `right` divs and append them to `container`
  const left = document.createElement('div')
  const right = document.createElement('div')

  // Set middle border line
  left.style.borderRight = '2px solid black'

  // Add `left` and `right` to `container`
  container.appendChild(left)
  container.appendChild(right)

  // Create 3 divs in `left` to hold classes
  const leftFirstClass = document.createElement('div')
  const leftSecondClass = document.createElement('div')
  const leftThirdClass = document.createElement('div')

  // Style `left` subdivs
  leftFirstClass.style.display = 'flex'
  leftSecondClass.style.display = 'flex'
  leftThirdClass.style.display = 'flex'
  leftFirstClass.style.justifyContent = 'flex-end'
  leftSecondClass.style.justifyContent = 'flex-end'
  leftThirdClass.style.justifyContent = 'flex-end'

  // Add `left` subdivs to `left` in DOM
  left.appendChild(leftFirstClass)
  left.appendChild(leftSecondClass)
  left.appendChild(leftThirdClass)

  // Create 3 divs in `right` to hold classes
  const rightFirstClass = document.createElement('div')
  const rightSecondClass = document.createElement('div')
  const rightThirdClass = document.createElement('div')

  // Style `right` subdivs
  rightFirstClass.style.display = 'flex'
  rightSecondClass.style.display = 'flex'
  rightThirdClass.style.display = 'flex'

  // Add `right` subdivs to `right` in DOM
  right.appendChild(rightFirstClass)
  right.appendChild(rightSecondClass)
  right.appendChild(rightThirdClass)


  // First Class Female Survivors and Deaths
  const firstClassFemaleSurvivors = titanic.passengers.filter((passenger) => {
    return passenger.survived === true && passenger.sex === 'female' && passenger.class === 1
  })
  const firstClassFemaleDeaths = titanic.passengers.filter((passenger) => {
    return passenger.survived === false && passenger.sex === 'female' && passenger.class === 1
  })
  // Second Class Female Survivors and Deaths
  const secondClassFemaleSurvivors = titanic.passengers.filter((passenger) => {
    return passenger.survived === true && passenger.sex === 'female' && passenger.class === 2
  })
  const secondClassFemaleDeaths = titanic.passengers.filter((passenger) => {
    return passenger.survived === false && passenger.sex === 'female' && passenger.class === 2
  })
  // Third Class Female Survivors and Deaths
  const thirdClassFemaleSurvivors = titanic.passengers.filter((passenger) => {
    return passenger.survived === true && passenger.sex === 'female' && passenger.class === 3
  })
  const thirdClassFemaleDeaths = titanic.passengers.filter((passenger) => {
    return passenger.survived === false && passenger.sex === 'female' && passenger.class === 3
  })

  // First Class Male Survivors and Deaths
  const firstClassMaleSurvivors = titanic.passengers.filter((passenger) => {
    return passenger.survived === true && passenger.sex === 'male' && passenger.class === 1
  })
  const firstClassMaleDeaths = titanic.passengers.filter((passenger) => {
    return passenger.survived === false && passenger.sex === 'male' && passenger.class === 1
  })
  // Second Class Male Survivors and Deaths
  const secondClassMaleSurvivors = titanic.passengers.filter((passenger) => {
    return passenger.survived === true && passenger.sex === 'male' && passenger.class === 2
  })
  const secondClassMaleDeaths = titanic.passengers.filter((passenger) => {
    return passenger.survived === false && passenger.sex === 'male' && passenger.class === 2
  })
  // Third Class Female Survivors and Deaths
  const thirdClassMaleSurvivors = titanic.passengers.filter((passenger) => {
    return passenger.survived === true && passenger.sex === 'male' && passenger.class === 3
  })
  const thirdClassMaleDeaths = titanic.passengers.filter((passenger) => {
    return passenger.survived === false && passenger.sex === 'male' && passenger.class === 3
  })
  console.log(thirdClassMaleDeaths)

  // 👀👀👀👀👀👀 keeping this ugly implementation for sake of comparison
  // check out a better implementation in renderAge 👀👀👀👀👀👀
  firstClassFemaleSurvivors.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'lightpink'
    // Add element as child of `rightFirstClass` on DOM
    rightFirstClass.appendChild(element)
  })

  firstClassFemaleDeaths.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'lightgrey'
    // Add element as child of `rightFirstClass` on DOM
    rightFirstClass.appendChild(element)
  })

  secondClassFemaleSurvivors.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'lightpink'
    // Add element as child of `rightFirstClass` on DOM
    rightSecondClass.appendChild(element)
  })

  secondClassFemaleDeaths.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'lightgrey'
    // Add element as child of `rightFirstClass` on DOM
    rightSecondClass.appendChild(element)
  })

  thirdClassFemaleSurvivors.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'lightpink'
    // Add element as child of `rightFirstClass` on DOM
    rightThirdClass.appendChild(element)
  })

  thirdClassFemaleDeaths.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'lightgrey'
    // Add element as child of `rightFirstClass` on DOM
    rightThirdClass.appendChild(element)
  })

  firstClassMaleDeaths.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'lightgrey'
    // Add element as child of `rightFirstClass` on DOM
    leftFirstClass.appendChild(element)
  })

  firstClassMaleSurvivors.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'steelblue'
    // Add element as child of `rightFirstClass` on DOM
    leftFirstClass.appendChild(element)
  })

  secondClassMaleDeaths.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'lightgrey'
    // Add element as child of `rightFirstClass` on DOM
    leftSecondClass.appendChild(element)
  })

  secondClassMaleSurvivors.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'steelblue'
    // Add element as child of `rightFirstClass` on DOM
    leftSecondClass.appendChild(element)
  })

  thirdClassMaleDeaths.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'lightgrey'
    // Add element as child of `rightFirstClass` on DOM
    leftThirdClass.appendChild(element)
  })

  thirdClassMaleSurvivors.forEach((passenger) => {
    // Create & Style `element`
    let element = document.createElement('div')
    element.style.height = '50px'
    element.style.width = '2px'
    element.style.backgroundColor = 'steelblue'
    // Add element as child of `rightFirstClass` on DOM
    leftThirdClass.appendChild(element)
  })
}