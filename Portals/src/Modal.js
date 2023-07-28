import React from 'react'
import ReactDOM  from 'react-dom';

const MODAL_STYLES = {
    
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'red',
    transform: 'translate(-50%,-50%)',
    zIndex: 1000,
  
}
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000,
    

}

function Modal({ open, children, close }) {
    

if (!open) return null;
return ReactDOM.createPortal(
    <>
        <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <button onClick={close}>Close Modal</button>
                {children}</div>
    </>
)
}
document.getElementById('portal')
export default Modal