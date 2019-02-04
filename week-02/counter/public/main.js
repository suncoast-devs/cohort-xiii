let counter = 0

const main = () => {
  document.querySelector('p').textContent = 0
}

// when a user clicks a button
const increaseCounter = () => {
  // i will do the things
  console.log('button clicked')
  // increase the varible 'counter' by 1
  counter = counter + 1
  // shortcut : counter++
  console.log(counter)
  // update the HTML with the new value
  // hey DOM, find the <p> and set your textContent = counter
  document.querySelector('p').textContent = counter
}

const resetCounter = () => {
  console.log('reseting counter')
  // set counter = 0
  counter = 0
  // update the html
  console.log('reset counter to ' + counter)
  document.querySelector('p').textContent = counter
}

document.addEventListener('DOMContentLoaded', main)
// go the HTML (DOM)
// find the button
// add event listener
// listen for the 'click' event
// when the 'click' event happens, run the function increaseCounter
document
  .querySelector('.add-one-button')
  .addEventListener('click', increaseCounter)
document.querySelector('.reset-button').addEventListener('click', resetCounter)
