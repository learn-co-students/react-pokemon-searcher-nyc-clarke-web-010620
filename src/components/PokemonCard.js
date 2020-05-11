import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardFront: true
  }

  componentDidMount() {
    
  }

  turnCard = (e) => {
    if (this.state.cardFront === true) {
      this.setState({ cardFront: false })
    } else {
      this.setState({ cardFront: true })
    }
  }

  showImg = () => {
    if (this.state.cardFront === true) {
      return (
        <div className="image">
          <img src={this.props.sprites.front} alt={this.props.name} />
        </div>
      )
    } else {
      return (
        <div className="image">
          <img src={this.props.sprites.back} alt={this.props.name} />
        </div>
      )
    }
  }

  render() {
    return (
      <Card>
        <div onClick={this.turnCard} >
          <div className="image">
            {this.showImg()}
          </div>
          <div className="content">
            <div className="header">{ this.props.name.slice(0, 1).toUpperCase() + this.props.name.slice(1, this.props.name.length) }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
