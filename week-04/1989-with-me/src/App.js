import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

import FontAwesome from 'react-fontawesome'

const myMovie = {
  vote_count: 4300,
  id: 89,
  video: false,
  vote_average: 7.7,
  title: 'Indiana Jones and the Last Crusade',
  popularity: 18.43,
  poster_path: './images/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg',
  original_language: 'en',
  original_title: 'Indiana Jones and the Last Crusade',
  genre_ids: [12, 28],
  backdrop_path: '/vfvVuu1JdnEGcyZUj7VHrhhbeMj.jpg',
  adult: false,
  overview:
    "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
  release_date: '1989-05-24'
}

class App extends Component {
  render() {
    return (
      <section>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
            myMovie.poster_path
          }`}
        />
        <FontAwesome
          className="super-crazy-colors"
          name="rocket"
          size="2x"
          spin
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      </section>
    )
  }
}

export default App
