import React from 'react'
import Detail from './Detail'
import Usercontext from './Usercontext'
import { useContext } from 'react'
 const Users = () => {
    const data=useContext(Usercontext)
    console.log(data.Users)
  return (
    <div>
        <h5>Users</h5>
        <Detail />
    </div>
  )
}
export default Users
