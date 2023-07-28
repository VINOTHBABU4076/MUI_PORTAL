import React from 'react'
import Users from './Users'
import Usercontext from './Usercontext'
import { useState } from 'react'

const Dashboard = () => {
    const[name,setname]=useState("sentinels")
    const users={
        username:name,
        updatename:setname

    }
    return (
        <Usercontext.Provider value={users}>
             <h4> usecontext hook </h4>
              <Users />
        </Usercontext.Provider>
    )
}
export default Dashboard
