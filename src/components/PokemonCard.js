import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  componentDidMount() {
    console.log(this.props.name)
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{ this.props.name.slice(0, 1).toUpperCase() + this.props.name.slice(1, this.props.name.length) }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
