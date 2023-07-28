import React from 'react'
import Button from "./Button";

 const Practice = (props) => {
  return (
    <div>
        {props.count}
        <Button setcount={props.setcount}/>
    </div>
  )
}
export default Practice
 