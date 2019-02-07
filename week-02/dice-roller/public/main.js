// created array to hold all the different types of dices
const dice = [4, 6, 8, 10, 12, 20, 100]

// created 1 function, that takes a parameter (sides)
// and generates a random number, and adds that result to the DOM
// => This was created after we created a very events and saw that all 7 of the dice would have very similar code
const rollDice = sides => {
  const rand = Math.floor(Math.random() * sides) + 1
  console.log('rolling d' + sides + ', results = ' + rand)
  const rollResult = document.createElement('li')
  rollResult.textContent = rand
  document.querySelector('.past-rolls').appendChild(rollResult)
}

// a function that allows us to hook up all the buttons for our dice, based on the array on line 2
// => this was created after we saw that we repeated several lines of code that looked very similar
const addDiceButtonEvents = () => {
  for (let i = 0; i < dice.length; i++) {
    document.querySelector('.d' + dice[i]).addEventListener('click', () => {
      rollDice(dice[i])
    })
  }
}

// the one event to add the events once the page is loaded.
document.addEventListener('DOMContentLoaded', addDiceButtonEvents)
