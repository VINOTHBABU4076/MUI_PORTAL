import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const auth=useAuth()
    const navigate=useNavigate()

    const handlelogout =() =>{
        auth.logout()
        navigate('/')
    }
  return (
    <div> Profile page
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}
export default Profile
