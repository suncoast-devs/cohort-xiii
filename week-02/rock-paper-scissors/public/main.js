const possibleSelections = ['rock', 'paper', 'scissors']
let playerSelection

const computersTurn = () => {
  console.log('computer turn has started')
  const pick = Math.floor(Math.random() * possibleSelections.length)
  const selected = possibleSelections[pick]
  console.log(selected)
  document.querySelector('.computer-pick').textContent = selected
  let message
  if (playerSelection === 'rock' && selected === 'paper') {
    message = 'player lost, paper beats rock'
  } else if (playerSelection === 'rock' && selected === 'scissors') {
    message = 'player won, rock beats scissors'
  } else if (playerSelection === 'rock' && selected === 'rock') {
    message = 'tie! try again'
  }
  document.querySelector('.results').textContent = message
}

const addButtonsToPage = () => {}

// player selected rock
const playerSelectedRock = () => {
  playerSelection = 'rock'
  console.log(playerSelection)
  document.querySelector('.player-pick').textContent = playerSelection
  computersTurn()
}

const playerSelectedPaper = () => {
  playerSelection = 'paper'
  console.log(playerSelection)
  document.querySelector('.player-pick').textContent = playerSelection
  computersTurn()
}

const playerSelectedScissors = () => {
  playerSelection = 'scissors'
  console.log(playerSelection)
  document.querySelector('.player-pick').textContent = playerSelection
  computersTurn()
}

const main = () => {}

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('#rockButton')
  .addEventListener('click', playerSelectedRock)
document
  .querySelector('#paperButton')
  .addEventListener('click', playerSelectedPaper)
document
  .querySelector('#scissorsButton')
  .addEventListener('click', playerSelectedScissors)
