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

const player = {
  hand: [],
  wins: 0,
  losses: 0
}

const dealer = {
  hand: []
}

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

const getNextCard = () => {
  // .shift to remove the first card from deck
  return deck.shift()
}
const dealCardToPlayer = () => {
  // .push to add to the player hand
  player.hand.push(getNextCard())
}

const dealCardToDealer = () => {
  const nextCard = getNextCard()
  console.log(nextCard)
  dealer.hand.push(nextCard)
}

const createCardHTML = card => {
  const img = document.createElement('img')
  img.src = '/images/' + card.imageUrl + '.svg'
  const li = document.createElement('li')
  li.appendChild(img)
  return li
}

const displayPlayerHand = () => {
  // remove all the cards in the existing ul
  const parent = document.querySelector('.player-hand')
  while (parent.firstChild) {
    parent.firstChild.remove()
  }
  // document.querySelector('.player-hand').textContent = ''
  const lis = player.hand.map(card => {
    return createCardHTML(card)
  })
  lis.forEach(li => {
    document.querySelector('.player-hand').appendChild(li)
  })
}

const displayDealerHand = () => {
  // document.querySelector('.player-hand').textContent = ''
  const cardToReveal = dealer.hand[0]
  const li = createCardHTML(cardToReveal)
  document.querySelector('.dealer-hand').appendChild(li)
}

const getSumOfCards = cards => {
  // sum up all the cards in a players hand
  // reduce
  // const playerScore = player.hand.reduce((total, card) => {
  //   total += card.value
  //   return total
  // }, 0)

  // using forEach
  // let playerScore = 0
  // player.hand.forEach(card => {
  //   playerScore += card.value
  // })
  // for loop
  let score = 0
  for (let i = 0; i < cards.length; i++) {
    score += cards[i].value
  }
  return score
}

const getSumOfPlayerCards = () => {
  return getSumOfCards(player.hand)
}

const getSumOfDealerCards = () => {
  return getSumOfCards(dealer.hand)
}

const displayPlayerTotal = () => {
  document.querySelector('.player-score').textContent = getSumOfPlayerCards()
}

const startGame = () => {
  // deal 2 cards to player (be sure to update the deck)
  dealCardToPlayer()
  dealCardToPlayer()
  console.log(player)
  // show player their cards (and their points)
  displayPlayerHand()
  displayPlayerTotal()
  // deal 2 cards to dealer
  dealCardToDealer()
  dealCardToDealer()
  // show only 1 dealer card
  displayDealerHand()
}

const main = () => {
  createDeck()
  shuffleDeck()
  startGame()
}

const playerHit = () => {
  // card is drawn
  // added tp player hand
  dealCardToPlayer()
  // update the display total
  displayPlayerTotal()
  displayPlayerHand()
  // check for player bust
  // sum up the cards
  const playerScore = getSumOfPlayerCards()
  // if greater than 21, player lose
  if (playerScore > 21) {
    console.log('Player lost')
  }
}

const playerStand = () => {
  // while the sum of the dealer hand <= 16
  // dealer will a take card
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.hit-button').addEventListener('click', playerHit)
document.querySelector('.stand-button').addEventListener('click', playerStand)
