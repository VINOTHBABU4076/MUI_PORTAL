import React from 'react'
import { Link,Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <input type="text" placeholder='Enter here'></input>
    
    <div>
        <Link to='Featured'> Featured </Link>
        <Link to='New'> New </Link>
    </div>
    <Outlet></Outlet>
    </div>

  )
}
export default Products
