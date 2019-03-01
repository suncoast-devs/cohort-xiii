import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import hobbies from '../data/hobbies.json'

class CategoryList extends Component {
  render() {
    console.log(Object.keys(hobbies))
    return (
      <>
        <main>
          <header>
            <h1>Things I Like</h1>
            <h2>A Photo gallery by Jason Perry</h2>
          </header>
        </main>
        <section>🏡Home</section>
        <section className="hobbies">
          {Object.keys(hobbies).map((hobby, i) => {
            console.log('the hobby' + hobby)
            console.log('the hobby object:', hobbies[hobby])
            return (
              <section key={i} className="hobby">
                <header>
                  <Link to={`/${hobby}`}>{hobbies[hobby].title}</Link>
                </header>
                <p>{hobbies[hobby].description}</p>
                <img src={hobbies[hobby].photos[0].imageURL} />
              </section>
            )
          })}
        </section>
      </>
    )
  }
}

export default CategoryList
