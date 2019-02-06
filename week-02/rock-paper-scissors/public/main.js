let playerSelection

const computersTurn = () => {
  console.log('computer turn has started')
  const possibleSelections = ['rock', 'paper', 'scissors']
  const pick = Math.floor(Math.random() * possibleSelections.length)
  const selected = possibleSelections[pick]
  console.log(selected)
  document.querySelector('.computer-pick').textContent = selected
}

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
