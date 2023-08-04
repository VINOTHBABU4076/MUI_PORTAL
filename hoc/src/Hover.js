import React, { Component } from 'react'
import Hoc from './Hoc'

 class Hover extends Component {
    
  render() {
      const{count,increment}=this.props
    return (
      <div>
        <button onMouseOver={increment}>Hovered {count} Times </button>
      </div>
    )
  }
}
export default Hoc(Hover)
