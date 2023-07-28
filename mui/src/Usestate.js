import React,{useState} from 'react'

 const Setstate = () => {
    const[count,setcount]=useState(0);
   const handlebutton =() =>{
        setcount(count+1);
    }
    const decreasebutton= ()=> {
        setcount(count-1);

    }
  return (
    <div>
        
        <p> Update value </p>
        <button onClick={handlebutton}> Increase value </button>
        <p> name:{count}</p>
        <button onClick={decreasebutton}>Decrease value </button>
    </div>
  )
}
export default Setstate
