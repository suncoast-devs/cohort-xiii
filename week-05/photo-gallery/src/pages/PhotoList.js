import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import hobbies from '../data/hobbies.json'

class PhotoList extends Component {
  render() {
    console.log(this.props.match.params.hobby)
    const currentHobby = hobbies[this.props.match.params.hobby]
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
          <section>🏡Home</section>
        </main>
        <section>
          <header>{currentHobby.title}</header>
          <p>{currentHobby.description}</p>
          <section>
            {currentHobby.photos.map((photo, index) => {
              console.log(photo)
              return (
                <Link
                  key={index}
                  to={`/${this.props.match.params.hobby}/${index}`}
                >
                  <img src={photo.imageURL} alt={photo.title} />
                </Link>
              )
            })}
          </section>
        </section>
      </>
    )
  }
}

export default PhotoList
