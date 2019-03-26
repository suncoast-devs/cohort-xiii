import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-jsonschema-form'

import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'

// when we load the component, go to the API and get all the shelters
// dynamically update the form to show the shelters,
// post the selected shelter ID back to the API

const log = type => console.log.bind(console, type)

class AddAPet extends Component {
  state = {
    formSchema: {
      title: 'Add a Pet',
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Pet Name', default: 'No name given' },
        species: {
          type: 'string',
          title: 'Pet Species',
          default: 'No species given'
        },
        breed: {
          type: 'string',
          title: 'Pet Breed',
          default: 'No breed given'
        },
        age: { type: 'number', title: 'Pet Age', default: 0 },
        goodWithKids: {
          type: 'boolean',
          title: 'Kid Friendly',
          default: false
        },
        imageUrl: { type: 'string', title: 'Pet Picture ', default: null }
      }
    }
  }
  componentDidMount() {
    axios.get('https://localhost:5001/api/shelter').then(resp => {
      console.log(resp.data)
      // update our state with the new items
      const _form = this.state.formSchema
      _form.properties.shelterId = {
        type: 'number',
        title: 'Pick a shelter',
        enum: resp.data.map(shelter => shelter.id),
        enumNames: resp.data.map(shelter => shelter.name)
      }
      this.setState({
        formSchema: _form
      })
    })
  }

  onSubmit = event => {
    const data = { ...event.formData }
    console.log(data)
    axios
      .post('https://localhost:5001/api/pets', data, {
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(resp => {
        console.log(resp)
        // TODO: something?
      })
  }

  render() {
    return (
      <>
        <TopBar />
        <NavBar />
        <section>
          <header>
            <h1>Add a pet!</h1>
          </header>
          <Form
            schema={this.state.formSchema}
            onChange={log('changed')}
            onSubmit={this.onSubmit}
            onError={log('errors')}
          />
        </section>
      </>
    )
  }
}

export default AddAPet
