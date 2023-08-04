import React, { Component } from 'react'
import Hoc from './Hoc'

class Click extends Component {
   
    render() {
        const{count,increment}=this.props
        return (
            <div>
                <button onClick={increment}> Clicked {count} Times</button>
            </div>
        )
    }
}
export default Hoc(Click)
