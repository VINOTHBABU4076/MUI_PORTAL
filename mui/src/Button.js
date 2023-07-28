import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={()=>{
            props.setcount((count) => count +1);
        }}>
            Increase count 
        </button>
    </div>
  )
}
export default Button
