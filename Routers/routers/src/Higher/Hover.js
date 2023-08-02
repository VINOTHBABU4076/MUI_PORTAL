import React, { Component } from 'react';
import UpdatedComponent from './Counter'

class Hover extends Component {

    render() {
        const{count,incrementCount}=this.props
        return (
            <div>
                <button onMouseOver={incrementCount}> Hovered{count}Times </button>
            </div>
        );
    }
}

export default UpdatedComponent(Hover);
