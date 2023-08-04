import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './Auth'

const Navbar = () => {
    const auth=useAuth()
    return (
        <nav>
            <Link to='/'> Home </Link>
            <Link to='/About'> About</Link>
            <Link to='/products'> Products</Link>
            <Link to='/Profile'> Profile</Link>
            {
                !auth.user && (
                    <Link to='/Login'>Login</Link>
                )
            }
        </nav>
    )
}
export default Navbar
