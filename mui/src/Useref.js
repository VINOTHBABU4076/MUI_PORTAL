import React,{useState}from 'react'
import { useRef} from 'react';
import { useEffect } from 'react';

const Useref1 = () => {
    const[name,setcount]=useState('');
    const render=useRef('');
    useEffect(()=>{
        render.current=name;
        
    },[name])

  return (
    <div>
        <input value={name} onChange={e=>setcount(e.target.value)}></input>
        <p> Value is:{name} the previous value is:{render.current}</p>
        
    </div>
  )
}
    export default Useref1; 