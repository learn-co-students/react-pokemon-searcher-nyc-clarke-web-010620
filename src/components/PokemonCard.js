import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    frontCard: true
  }

  capitalizeFirst = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  clickHandler = (event) => {
    this.setState({
      frontCard: !this.state.frontCard
    })
  }

  render() {
    return (
      <Card onClick={this.clickHandler}>
        <div>
          <div className="image">
            {
              this.state.frontCard ?
              <img alt="pokemon" src={this.props.pokemon.sprites.front}/>
              : <img alt="pokemon" src={this.props.pokemon.sprites.back}/>
            }

          </div>
          <div className="content">
            <div className="header">{this.capitalizeFirst(this.props.pokemon.name)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === 'hp').value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
