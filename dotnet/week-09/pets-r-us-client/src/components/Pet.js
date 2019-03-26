import React, { Component } from 'react'

class Pet extends Component {
  render() {
    return (
      <li className="pet-container">
        <img
          className="pet-image"
          src="https://cdn0.wideopenpets.com/wp-content/uploads/2016/06/flemish-ii.jpg"
        />
        <h1>Sir Remington Rabbit I</h1>
        <section>
          <div className="italics">rabbit, age 4</div>
          <div>Great with kids</div>
          <div>looking for a home since 1/23/2019</div>
        </section>
        <section className="action-items">
          <button>Adopt Sir Remington Rabbit I</button>
        </section>
      </li>
    )
  }
}

export default Pet
