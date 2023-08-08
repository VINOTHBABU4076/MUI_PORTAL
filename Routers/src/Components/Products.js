import React from 'react'
import { Link} from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <input type="text" placeholder='Enter here'></input>
    
    <div>
        <Link to='Featured'> Featured </Link>
        <Link to='New'> New </Link>
    </div>
    </div>

  )
}
export default Products
