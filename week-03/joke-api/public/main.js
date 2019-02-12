let currentJoke = {}

const getJoke = () => {
  // send the request
  fetch('https://official-joke-api.appspot.com/random_joke')
    // getting the response back
    .then(resp => {
      return resp.json()
    })
    // opening the response, joke is the actual data that we want
    .then(joke => {
      console.log(joke)
      currentJoke = joke
      document.querySelector('.joke').textContent = joke.setup
      document.querySelector('.punchline').textContent = ''
    })
}

const revealPunchline = () => {
  document.querySelector('.punchline').textContent = currentJoke.punchline
}

document
  .querySelector('.reveal-punchline')
  .addEventListener('click', revealPunchline)
document.querySelector('.get-joke-button').addEventListener('click', getJoke)
