import React,{useState}from 'react'

 const Functional = (props) => {
    const[name,setname]=useState('');
    const[age,setage]=useState(30);
    const[ismale,setmale]=useState(true); 
  return (
    <div>Functional
        <h1>My name is {name}</h1>
        <h2>My age is {age}</h2>
        <h3> ismale is {ismale ? "male" :"Female"}</h3>
        <h4> my feelinf is {props.emotion}</h4>
    </div>
  )
}
export default Functional
