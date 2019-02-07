// Problem?
//  - shuffle cards,
//  - create a deck
// Example Data
// - ace of hearts
// - jack of clubs
// - seven of diamonds
// Data Structures
// - deck is going to be an array
// - card is going to an object, suit and rank
// Algorithms
// - create a deck
//
// Code with intent

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]
const deck = []

const main = () => {
  console.log('starting shuffle')
  // do things here
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      // right here 52 times
      const card = {
        suit: suits[i],
        rank: ranks[j]
      }
      deck.push(card)
    }
  }
  console.log(deck)

  // shuffle the deck
  // for i from n - 1 down to 1 do:
  // j = random integer (where 0 <= j <= i)
  // swap items[i] with items[j]
  for (let i = deck.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // swapping
    const cardAtI = deck[i]
    const cardAtJ = deck[j]
    deck[i] = cardAtJ
    deck[j] = cardAtI
  }
  console.log('shuffled')
  console.log(deck)
}

document.addEventListener('DOMContentLoaded', main)
