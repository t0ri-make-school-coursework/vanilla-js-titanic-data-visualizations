export default function renderJohns(container, titanic) {
  // Style container
  container.style.display = 'flex'
  container.style.flexFlow = 'row nowrap'
  container.style.justifyContent = 'center'

  // Get all passengers named John/Jon
  const johns = titanic.passengers.filter((passenger) => {
    return passenger.sex === 'male' && (passenger.name.includes('Mr. Jon') || passenger.name.includes('Mr. John'))
  })
  johns.sort((passengerOne) => {
    return passengerOne.survived === true ? -1 : 1
  })
  
  johns.forEach((passenger) => {
    // Create a new element for each with blue or pink relating to sex
    let element = document.createElement('div')
    element.style.height = '30px'
    element.style.width = '30px'
    element.style.margin = '2px'

    element.style.backgroundColor = 'lightgray'
    element.style.borderLeft = '1px solid lightgray'
    element.style.borderBottom = '1px solid lightgray'
    element.style.borderRight = '1px solid lightgray'
    element.style.borderTop = '1px solid lightgray'

    element.style.borderColor = passenger.survived === true ? 'black' : 'lightgray'
    
    // Append element to `container`
    container.appendChild(element)
  })
}