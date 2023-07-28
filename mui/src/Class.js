import React, { Component } from 'react'

export default class classapp extends Component {
    constructor(props){
        super(props);

        this.state={
            count:0,
        }
    }
    increment =() =>{
    this.setState({
        count:this.state.count +1,
    })
    };
    decrement =() =>{
        this.setState({
            count:this.state.count -1,
        })
    }
  render() {
    return (
      <div>
           <button onClick={this.state.increment}> + </button>
            <span>{this.state.count}</span>
            <button onClick={this.state.decrement}> - </button>
      </div>
    )
  }
}
