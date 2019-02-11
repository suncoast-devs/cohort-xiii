// build a deck of cards
// shuffle the deck cards
let deck = []
const suits = ['hearts', 'spades', 'diamonds', 'clubs']
const ranks = [
  {
    name: '2',
    value: 2
  },
  {
    name: '3',
    value: 3
  },
  {
    name: '4',
    value: 4
  },
  {
    name: '5',
    value: 5
  },
  {
    name: '6',
    value: 6
  },
  {
    name: '7',
    value: 7
  },
  {
    name: '8',
    value: 8
  },
  {
    name: '9',
    value: 9
  },
  {
    name: '10',
    value: 10
  },
  {
    name: 'jack',
    value: 10
  },
  {
    name: 'queen',
    value: 10
  },
  {
    name: 'king',
    value: 10
  },
  {
    name: 'ace',
    value: 11
  }
]

const createDeck = () => {
  deck = []
  suits.forEach(suit => {
    ranks.forEach(rank => {
      const card = {
        value: rank.value,
        suit: suit,
        rank: rank.name,
        imageUrl: rank.name + '_of_' + suit
      }
      deck.push(card)
    })
  })
  console.log(deck)
}

const shuffleDeck = () => {
  for (let i = deck.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // swapping
    const cardAtI = deck[i]
    const cardAtJ = deck[j]
    deck[i] = cardAtJ
    deck[j] = cardAtI
  }
  console.log('shuffled deck', deck)
}

const main = () => {
  createDeck()
  shuffleDeck()
}

document.addEventListener('DOMContentLoaded', main)
