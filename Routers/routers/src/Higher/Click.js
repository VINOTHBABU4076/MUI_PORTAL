import React, { Component } from 'react';
import UpdatedComponent from './Counter'

class Click extends Component {
    render() {
        const{count,incrementCount}=this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} Times </button>
            </div>
        );
    }
}

export default UpdatedComponent(Click);

