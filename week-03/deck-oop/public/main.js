class Card {
  constructor(rank, suit, value) {
    this.rank = rank
    this.suit = suit
    this.value = value
  }

  getImageUrl() {
    return `${this.rank}_of_${this.suit}`
  }
}

class Deck {
  constructor() {
    this.cards = []
  }
  create() {
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
    this.cards = []
    suits.forEach(suit => {
      ranks.forEach(rank => {
        this.cards.push(new Card(rank.name, suit, rank.value))
      })
    })
    console.log(this.cards)
  }
  shuffle() {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      // swapping
      const cardAtI = this.cards[i]
      const cardAtJ = this.cards[j]
      this.cards[i] = cardAtJ
      this.cards[j] = cardAtI
    }
    console.log('shuffled this.cards', this.cards)
  }
  deal() {
    return this.cards.shift()
  }
}

class Player {
  constructor(name) {
    this.hand = []
    this.wins = 0
    this.loss = 0
    this.ties = 0
    this.username = name
  }

  addCardToHand(card) {
    this.hand.push(card)
  }
}

const main = () => {
  myDeck.create()
  myDeck.shuffle()
}

const startGame = () => {
  // get the username from the input
  const newPlayerName = document.querySelector('.new-player-name').value
  // creat a new player
  const newPlayer = new Player(newPlayerName)
  // deal them in
  newPlayer.addCardToHand(myDeck.deal())
  newPlayer.addCardToHand(myDeck.deal())
  // update the HTML
  // add the players array
  players.push(newPlayer)
  console.log(players)
}
const myDeck = new Deck()
const players = []
document.addEventListener('DOMContentLoaded', main)
document.querySelector('.start-button').addEventListener('click', startGame)
