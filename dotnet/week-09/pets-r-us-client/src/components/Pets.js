import React, { useState, useEffect } from 'react'
import Pet from './Pet'
import axios from 'axios'

export default function Pets() {
  const [pets, setPets] = useState([])

  const getAllPetsThatCanBeAdopted = () => {
    axios.get('https://localhost:5001/api/pets').then(resp => {
      console.log({ resp })
      setPets(resp.data)
    })
  }

  useEffect(() => {
    getAllPetsThatCanBeAdopted()
  }, [])

  return (
    <ul className="all-pets">
      {pets.map(pet => {
        return (
          <Pet
            key={pet.id}
            data={pet}
            updateParentUi={getAllPetsThatCanBeAdopted}
          />
        )
      })}
    </ul>
  )
}
