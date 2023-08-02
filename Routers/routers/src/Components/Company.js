import React from 'react'
import { useNavigate } from 'react-router-dom'

const Company = () => {
    const navigate=useNavigate();
  return (
    <div>
        
        <button onClick={() =>{navigate(-1)}}>Back to home page</button>
    </div>
  )
}
export default Company
