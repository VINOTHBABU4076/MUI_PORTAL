import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

 const Login = () => {
    const[user,setuser]=useState('')

    const auth=useAuth()
    const navigate=useNavigate()
    
    const handlechange =() =>{
        auth.login(user)
        navigate('/')
    }
  return (
    <div>
        <label>
            Username:{''}
            <input type="text" onChange={(e) =>setuser(e.target.value)}></input>
        </label>
        <button onClick={handlechange}>Login</button>
    </div>
  )
}
export default Login
