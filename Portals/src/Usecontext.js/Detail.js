import React from 'react'
import Usercontext from './Usercontext'
import { useContext } from 'react'
 const Detail = () => {
    const updatename=useContext(Usercontext)
    console.log(updatename)
  return (
    <div>Detail
        <br></br>
        <br></br>
        <br></br>
        <button onClick={()=>updatename("Fnatic")}>update name</button>
    </div>
  )
}
export default Detail
