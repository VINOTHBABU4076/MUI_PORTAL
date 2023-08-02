import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Second = () => {
    const [user, setuser] = useState([])

    const [name, setname] = useState("")

    useEffect(() => {

        Axios.get(`https://jsonplaceholder.typicode.com/users`)

            .then(res => setuser(res.data))

    },[])
    const handlechange = () => {

        Axios.post(`https://jsonplaceholder.typicode.com/users`, { name: name })

            .then(res =>setuser([...user,res.data]))

    }
    return (
    <div>
        {user.map((u,i) =>{
            return(
                <div key={i}>
                    {u.name}
                    </div>
            )
        })}
        <input type="text" value={name} onChange={(e) =>setname(e.target.value)} />

        <button onClick={handlechange}> Add </button>

    </div >
  )
}
export default Second;
