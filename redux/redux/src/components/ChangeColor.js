import React,{useState}from 'react'
import {useDispatch} from 'react-redux'
import {changeColor} from '../features/Theme'
 

const ChangeColor = () => {
    const dispatch=useDispatch();
    const[color,setcolor]=useState("")
  return (
    <div>
        <input type="text"  value={color} onChange={(e) =>setcolor(e.target.value)}></input>
        <button onClick={()=>{dispatch(changeColor(color))}}> Color Button</button>
    </div>
  )
}
export default ChangeColor
