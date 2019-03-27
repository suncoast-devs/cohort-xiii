import React, { useState, useEffect } from 'react'
import Pet from './Pet'
import axios from 'axios'

import Form from 'react-jsonschema-form'

export default function Pets() {
  const [pets, setPets] = useState([])
  const [isLoading, setLoading] = useState(true)

  const schema = {
    title: '',
    type: 'object',
    properties: {
      search: { type: 'string', title: 'search for pets', default: '' },
      goodWithKids: {
        type: 'string',
        title: 'kid friendly',
        default: '',
        enum: ['', 'true', 'false'],
        enumNames: ["Doesn't Matter", 'Yes', 'No']
      }
    }
  }
  const uiSchema = {
    search: {
      'ui:title': '',
      'ui:placeholder': 'Search for your fur-ever friend...'
    }
  }

  const getAllPetsThatCanBeAdopted = () => {
    setLoading(true)

    axios.get('https://localhost:5001/api/pets').then(resp => {
      console.log({ resp })
      setLoading(false)
      setPets(resp.data)
    })
  }

  const searchForPets = event => {
    let _url = `https://localhost:5001/api/search/pets?query=${
      event.formData.search
    }`
    if (event.formData.goodWithKids != '') {
      _url += `?goodWithKids=${event.formData.goodWithKids}`
    }
    setLoading(true)

    axios.get(_url).then(resp => {
      console.log({ resp })
      setLoading(false)

      setPets(resp.data.results)
    })
  }

  useEffect(() => {
    getAllPetsThatCanBeAdopted()
  }, [])

  return (
    <>
      <Form schema={schema} uiSchema={uiSchema} onSubmit={searchForPets} />
      {pets.length > 0 && (
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
      )}
      {pets.length === 0 && !isLoading && <h3>No results found</h3>}
      {isLoading && <div className="loading-icon">loading results...</div>}
    </>
  )
}
