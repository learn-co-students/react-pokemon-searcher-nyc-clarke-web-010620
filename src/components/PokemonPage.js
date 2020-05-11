import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import TestComponent from './TestComponent'

class PokemonPage extends React.Component {

  state = {
    pokeIndex: []
  }

  componentDidMount() {
    this.fetchIndex()
  }

  fetchIndex() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => this.setIndex(data))
  }

  setIndex(pokemons) {
    this.setState({ pokeIndex: pokemons })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <br /><br /><br />
        <TestComponent />
        <br /><br /><br />
        <PokemonCollection pokeIndex={this.state.pokeIndex} />
      </Container>
    )
  }
}

export default PokemonPage
