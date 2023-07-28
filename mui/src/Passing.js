import React from 'react'
import { useState } from 'react'
import Practice from './Practice';

 const Passing= () => {
    const[count,setcount]=useState(0);
  return (
    <div>
        <Practice count={count} setcount={setcount}/>
    </div>
  )
}
export default Passing
