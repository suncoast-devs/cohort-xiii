let playerSelection

// player selected rock
const playerSelectedRock = () => {
  playerSelection = 'rock'
  console.log(playerSelection)
  document.querySelector('.player-pick').textContent = playerSelection
}

const playerSelectedPaper = () => {
  playerSelection = 'paper'
  console.log(playerSelection)
  document.querySelector('.player-pick').textContent = playerSelection
}

const playerSelectedScissors = () => {
  playerSelection = 'scissors'
  console.log(playerSelection)
  document.querySelector('.player-pick').textContent = playerSelection
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
