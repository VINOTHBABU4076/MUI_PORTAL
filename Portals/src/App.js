import { useState } from 'react';
import './App.css';
import Modal from './Modal';
const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
  padding: '10px',
}
const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px' 
}


function App() {
  const[isopen,setisopen]=useState(false)
  return (
    <div>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={()=>{setisopen(true)}}>Open modal</button>
      
      <Modal open={isopen} close={() =>{setisopen(false)}}>
        React Portal
      </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content
      </div>

    </div>
  );
}

export default App;
