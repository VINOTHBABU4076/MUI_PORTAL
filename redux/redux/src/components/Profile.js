import React from 'react'
import {useSelector} from 'react-redux'

 const Profile = () => {
    const user=useSelector((state)=> state.user.value)
    const theme=useSelector((state)=> state.theme.value)
  return (
    <div style={{'color':theme}}>
        <h3>Profile Page</h3>
        <h4>Name:{user.name}</h4>
        <h5>Age:{user.age}</h5>
        <h5>Email:{user.Email}</h5>
    </div>
  )
}
export default Profile
