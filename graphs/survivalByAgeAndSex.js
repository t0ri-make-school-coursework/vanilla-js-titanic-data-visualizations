export default function survivalByAgeAndSex(container, titanic) {
  // Create divs to hold each age group
  const infantContainer = document.createElement('div')
  const childContainer = document.createElement('div')
  const teenContainer = document.createElement('div')
  const youngAdultContainer = document.createElement('div')
  const adultContainer = document.createElement('div')
  const seniorContainer = document.createElement('div')

  let ageGroupContainers = [infantContainer, childContainer, teenContainer, youngAdultContainer, adultContainer, seniorContainer]
  ageGroupContainers.forEach((ageGroupContainer) => {
    // Style age group divs
    ageGroupContainer.style.display = 'flex'
    ageGroupContainer.style.flexFlow = 'column wrap'
    ageGroupContainer.style.alignItems = 'center'

    // Add age group divs to container on DOM
    container.appendChild(ageGroupContainer)
  })

  // Filter passengers to create arrays of each age group
  let infants = titanic.passengers.filter((passenger) => passenger.age < 5)
  let children = titanic.passengers.filter((passenger) => passenger.age > 4 && passenger.age < 15)
  let teens = titanic.passengers.filter((passenger) => passenger.age > 13 && passenger.age < 20)
  let youngAdults = titanic.passengers.filter((passenger) => passenger.age > 19 && passenger.age < 26)
  let adults = titanic.passengers.filter((passenger) => passenger.age > 24 && passenger.age < 65)
  let seniors = titanic.passengers.filter((passenger) => passenger.age > 64)

  let ageGroups = [infants, children, teens, youngAdults, adults, seniors]
  let ageGroupNames = ['Infants', 'Children', 'Teens', 'Young Adults', 'Adults', 'Seniors']
  ageGroups.forEach((ageGroup, index) => {
    // Sort age groups by sex
    ageGroup.sort((passengerOne) => passengerOne.sex === 'female' ? -1 : 1)
    ageGroup.sort((passsengerOne) => passsengerOne.survived === false ? -1 : 1)
    
    // Title each age group in DOM
    const title = document.createElement('p')
    title.innerHTML = `${ageGroupNames[index]}`
    ageGroupContainers[index].appendChild(title)

    // Loop through passengers in each ageGroup
    ageGroup.forEach((passenger) => {
      // Create & Style new `element`
      let element = document.createElement('div')
      element.style.height = '5px'
      element.style.width = '5px'
      element.style.margin = '0px'
      element.style.backgroundColor = passenger.sex === 'male' ? 'steelblue' : 'lightpink'
      if (passenger.survived) { element.style.border = '1px solid black' }
      if (!passenger.survived) { element.style.border = `1px solid ${passenger.sex === 'male' ? 'lightsteelblue' : 'pink'}` }

      // Add element to DOM in `infantContainer` div
      if (index < ageGroupContainers.length) {
        ageGroupContainers[index].appendChild(element)
      }
    })
  })
}