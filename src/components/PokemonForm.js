import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  addPokemon = (pokemonObj) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pokemonObj),
    })
    .then(response => response.json()) 
    .then(data => console.log(data))
  }  

  handleSubmit = e => {
    let pokemonObj = {
      height: 10,
      weight: 100,
      name: e.target[0].value,
      stats: [
        {
          value: 100,
          name: 'special-defense'
        },
        {
          value: 100,
          name: 'special-attack'
        },
        {
          value: 80,
          name: 'defense'
        },
        {
          value: 75,
          name: 'attack'
        },
        {
          value: 78,
          name: 'speed'
        },
        {
          value: parseInt(e.target[1].value),
          name: 'hp'
        }
      ],
      sprites: {
        front: e.target[2].value,
        back: e.target[3].value
      }
    }
    this.addPokemon(pokemonObj)
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleHpChange = e => {
    this.setState({ hp: e.target.value })
  }

  handleFrontURL = e => {
    this.setState({ frontUrl: e.target.value })
  }

  handleBackURL = e => {
    this.setState({ backUrl: e.target.value })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={e => this.handleNameChange(e)} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={e => this.handleHpChange(e)} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={e => this.handleFrontURL(e)} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={e => this.handleBackURL(e)} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
