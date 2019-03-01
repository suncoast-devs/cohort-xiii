import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import hobbies from '../data/hobbies.json'

class PhotoDetail extends Component {
  render() {
    const currentHobby = hobbies[this.props.match.params.hobby]
    console.log(this.props.match.params)
    console.log(currentHobby)
    return (
      <>
        <main>
          <main>
            <header>
              <h1>Things I Like</h1>
              <h2>A Photo gallery by Jason Perry</h2>
            </header>
          </main>
          <section>🏡Home / {currentHobby.title} </section>
        </main>
        <section>
          <header>
            {currentHobby.photos[this.props.match.params.index].title}
          </header>
          <a
            href={currentHobby.photos[this.props.match.params.index].sourceURL}
          >
            <img
              src={currentHobby.photos[this.props.match.params.index].imageURL}
            />
          </a>
        </section>
      </>
    )
  }
}

export default PhotoDetail
