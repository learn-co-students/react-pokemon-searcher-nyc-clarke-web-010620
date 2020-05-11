// import React from 'react'

// class Search extends React.Component {

//   state = {
//     searchQuery: ''
//   }

//   handleChange = (e) => {
//     this.setState({ searchQuery: e.target.value })
//   }

//   render() {
//     return (
//       <div className="ui search">
//         <div className="ui icon input">
//           <form onChange={this.state.handleChange}>
//             <input className="prompt" type="text" value={this.state.searchQuery} onChange={(e) => this.handleChange(e)} />
//             <i className="search icon" />
//           </form>
//         </div>
//       </div>
//     )
//   }
// }
// export default Search

import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.onChange} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search