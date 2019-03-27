import React from 'react'
import axios from 'axios'

export default function Pet(props) {
  const updateAdoptionStatus = () => {
    axios
      .put(`https://localhost:5001/api/pets/${props.data.id}/adopt`)
      .then(resp => {
        console.log({ resp })
        props.updateParentUi()
      })
  }

  return (
    <li className="pet-container">
      <img
        className="pet-image"
        src={
          props.data.imageUrl
            ? props.data.imageUrl
            : 'https://octodex.github.com/images/maxtocat.gif'
        }
        alt={`Picture of ${props.data.name}`}
      />
      <h1>{props.data.name}</h1>
      <section>
        <div className="italics">
          {props.data.breed}, age {props.data.age}
        </div>
        <div>
          {props.data.goodWithKids ? 'Great with kids' : 'Not Friendly'}
        </div>
        <div>
          looking for a home since{' '}
          {new Date(props.data.dateArrived).toLocaleDateString()}
        </div>
        <div>Located at {props.data.shelterName}</div>
      </section>
      <section className="action-items">
        <button onClick={updateAdoptionStatus}>Adopt {props.data.name}</button>
      </section>
    </li>
  )
}
