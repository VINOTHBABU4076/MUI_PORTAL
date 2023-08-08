import React from 'react'
import { useSearchParams } from "react-router-dom"

const Users = () => {
    const[searchparams,setsearchparams]=useSearchParams()
    const showusers=searchparams.get('filter') ==='active'
  return (
    <div>
        <h3>User 1</h3>
        <h3>User 2</h3>
        <h3>User 3</h3>   
        <button onClick={() =>setsearchparams({filter:'active'})}>Active Users</button>
        <button onClick={() =>setsearchparams({})}>Reset Button</button>
        {
            showusers ?<h3>Showing active users</h3> : 
            (<h3>Showing all users</h3>)
        }
    </div>
  )
}
export default Users
