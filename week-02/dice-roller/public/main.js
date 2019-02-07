const dice = [4, 6, 8, 10, 12, 20, 100]

const rollDice = sides => {
  const rand = Math.floor(Math.random() * sides) + 1
  console.log('rolling d' + sides + ', results = ' + rand)
  const rollResult = document.createElement('li')
  rollResult.textContent = rand
  document.querySelector('.past-rolls').appendChild(rollResult)
}

const addDiceButtonEvents = () => {
  for (let i = 0; i < dice.length; i++) {
    document.querySelector('.d' + dice[i]).addEventListener('click', () => {
      rollDice(dice[i])
    })
  }
}

document.addEventListener('DOMContentLoaded', addDiceButtonEvents)
