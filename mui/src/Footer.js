import React from 'react'
import './index.css';

 const  Footer = () => {
    const year=new Date();
  return (
    <div className='footer'>Footer &copy;{year.getFullYear}</div>
  )
}
export default Footer
