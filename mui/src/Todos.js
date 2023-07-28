import React from 'react'
import { useState, useReducer } from 'react'

function reducer(Todo, action) {
    switch (action.type) {
        case 'increment':
            return [...Todo, createtodo(action.payload.name)]

    }
}
function createtodo(name) {
    return {
        id: Date.now(),
        name: name,
        completed: false,
    }
}

const Todos = () => {
    const [Todo, dispatch] = useReducer(reducer, []);
    const [name, setname] = useState('');

    const handlechange = (e) => {
        e.preventDefault();
        dispatch({
            type: 'increment',
            payload: {
                name: name
            }
        })

    }
    console.log(Todo)

    return(
    
        <>
        <form onSubmit={handlechange}>
            <input value={name} onChange={e => setname(e.target.value)} />
        </form>
        </>

    )
}
export default Todos
