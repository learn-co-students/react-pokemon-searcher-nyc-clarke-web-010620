import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import TestComponent from './TestComponent'

class PokemonPage extends React.Component {

  state = {
    pokeIndex: [],
    searchQuery: '',
    hpQuery: 0
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

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  handleHpSearch = e => {
    this.setState({ hpQuery: e.target.value })
  }

  render() {
    let filteredPokemon = this.state.pokeIndex.filter(p => 
      p.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    )
    let finalPokemon = filteredPokemon.filter(p => 
      p.stats[5].value >= this.state.hpQuery
    )

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.handleSearch} />
        <br /> 
        <input onChange={this.handleHpSearch} />
        <br /><br />
        <PokemonCollection pokeIndex={finalPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
