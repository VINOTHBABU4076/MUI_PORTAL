import React from 'react'
import { useNavigate } from 'react-router-dom'

 const Home = () => {
    const navigate=useNavigate();
  return (
    <>
    <div>Home page</div>
    <button onClick={ () =>navigate('Company Bio')}>Navigate to Company bio</button>
    </>
  )
}
export default Home
