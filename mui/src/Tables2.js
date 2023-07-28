import React from 'react'
import Tables from "./Tables"
import Tabless from "./Tabless.css"

 const Tables2 = () => {
    const arr=[
        
            {id:1, name:"tenz", age:20, email:"tenz@gmail.com"},
            {id:2, name:"shroud", age:22, email:"shroud@gmail.com"},
            {id:3, name:"boost", age:25, email:"booster@gmail.com"},
        
    ]
  return (
    <div className='le'>
            Tables
        <Tables data={arr} />
    </div>
  )
}
export default Tables2

 