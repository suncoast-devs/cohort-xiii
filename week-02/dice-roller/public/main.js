const rollDice = sides => {
  const rand = Math.floor(Math.random() * sides) + 1
  console.log('rolling d' + sides + ', results = ' + rand)
  const rollResult = document.createElement('li')
  rollResult.textContent = rand
  document.querySelector('.past-rolls').appendChild(rollResult)
}

document.querySelector('.d4').addEventListener('click', () => {
  rollDice(4)
})
document.querySelector('.d6').addEventListener('click', () => {
  rollDice(6)
})

document.querySelector('.d8').addEventListener('click', () => {
  rollDice(8)
})
document.querySelector('.d10').addEventListener('click', () => {
  rollDice(10)
})
document.querySelector('.d12').addEventListener('click', () => {
  rollDice(12)
})
document.querySelector('.d20').addEventListener('click', () => {
  rollDice(20)
})
document.querySelector('.d100').addEventListener('click', () => {
  rollDice(100)
})
