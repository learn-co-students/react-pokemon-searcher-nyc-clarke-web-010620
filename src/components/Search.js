import React from 'react'

class Search extends React.Component {

  render () {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" onChange={this.props.searchHandler}/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
