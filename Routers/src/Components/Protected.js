import React from 'react'
import { useAuth } from './Auth'
import {Navigate } from 'react-router-dom'
const Protected = ({children}) => {
    const auth=useAuth()
    if(!auth.user){
        return<Navigate to='/Login'/>
    }
  return children
}
export default Protected
