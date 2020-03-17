import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon"


class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(pokemons => this.setState({
      pokemons,
      filteredPokemon: pokemons
    }))
  }

  addPokemon = newPokemon => {
    this.setState(prevState => ({pokemons: [...prevState.pokemons, newPokemon]}))
  }

  searchHandler = event => {
      this.setState({
      searchTerm: event.target.value
    })
  }
  

  render() {
    const filterPokemon = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchHandler={this.searchHandler} />
        <br />
        <PokemonCollection pokemons={filterPokemon} />
      </Container>
    )
  }

}

export default PokemonPage
