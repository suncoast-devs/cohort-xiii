import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'

/**
 * 1) create the React component for the page
 * 2) populate the component with HTML
 * 3) hook the new component with React Router
 * 4) add the new page to the menu
 * 5) submit the new shelter using the Forms library
 * 5.1) Build the API (already scaffolded for us)
 * 6) show a link to go the add pet page after we create a shelter
 *
 */

export default function AddShelterPage() {
  const schema = {
    title: 'Register a Shelter',
    type: 'object',
    required: ['name', 'address', 'primaryContactName', 'primaryContactPhone'],
    properties: {
      name: { type: 'string', title: 'Shelter Name', default: 'No name given' },
      address: { type: 'string', title: 'Full Address' },
      isNoKill: { type: 'boolean', title: 'No Kill', default: true },
      maxCapacity: { type: 'number', title: 'Max. Capacity' },
      primaryContactName: { type: 'string', title: 'Who is in charge' },
      primaryContactPhone: { type: 'string', title: 'Who we gonna call?' },
      adoptionFee: { type: 'number', title: 'What are we gonna bill?' }
    }
  }

  const onSubmit = event => {
    axios
      .post('https://localhost:5001/api/shelter', { ...event.formData })
      .then(resp => {
        console.log({ resp })
        setAddedShelter(true)
        //display the message for adding a pet
      })
  }

  const [addedShelter, setAddedShelter] = useState(false)
  return (
    <>
      <TopBar />
      <NavBar />
      <section>
        <Form schema={schema} onSubmit={onSubmit} />
        {addedShelter && (
          <div className="alert alert-success" role="alert">
            Successfully added a shelter.{' '}
            <Link to="/add">Do you want to add a pet?</Link>
          </div>
        )}
      </section>
    </>
  )
}
