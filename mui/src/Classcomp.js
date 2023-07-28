import React, { Component } from 'react'

 class Classcomp extends Component {
    constructor(props){
    super(props);

    this.state={
        name:'',
        age:30,
        ismale:true,

    };
}
  render() {

    return (
      <div>
        <h1>my name is {this.state.name}</h1>
        <h1>my age is {this.state.age}</h1>
        <h1>ismale is {this.state.ismale ?"male":"female"}</h1>

      </div>
    )
  }
}
export default Classcomp
